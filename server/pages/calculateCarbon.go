package pages

import (
	"CARBON_CALCULATOR/config"
	"CARBON_CALCULATOR/models"
	"fmt"
	"log"
	"math"
	"net/http"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
)

func CalculateCarbonFootprint(c *gin.Context) {
	var input models.CarbonInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Fetch vehicle carbon value
	var vehicleCarbonValue float64
	fmt.Printf("VehicleTypeID: %d\n", input.VehicleTypeID)

	err := config.Database.QueryRow(`SELECT carbon_value FROM vehicle_types WHERE vehicle_type_id = ?`, input.VehicleTypeID).Scan(&vehicleCarbonValue)
	log.Printf("Vehicle carbon value fetched: %.2f\n", vehicleCarbonValue)
	if err != nil {
		log.Println("Error fetching vehicle carbon value:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch vehicle carbon value"})
		return
	}

	// Fetch fuel carbon value
	var fuelCarbonValue float64
	err = config.Database.QueryRow(`SELECT carbon_value FROM fuel_types WHERE fuel_type_id = ?`, input.FuelTypeID).Scan(&fuelCarbonValue)
	if err != nil {
		log.Println("Error fetching fuel carbon value:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch fuel carbon value"})
		return
	}

	// Fetch food carbon value
	var foodCarbonValue float64
	fmt.Printf("foodTypeID: %d\n", input.DietTypeID)
	err = config.Database.QueryRow(`SELECT carbon_value FROM food_types WHERE diet_type_id = ?`, input.DietTypeID).Scan(&foodCarbonValue)
	if err != nil {
		log.Println("Error fetching food carbon value:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch food carbon value"})
		return
	}

	// Fetch appliance carbon values
	var applianceCarbonValue float64
	applianceIDs := strings.Join(input.ApplianceID, ",")
	query := `
		SELECT SUM(a.carbon_value) 
		FROM appliance_names a
		WHERE FIND_IN_SET(a.appliance_id, ?)
	`
	err = config.Database.QueryRow(query, applianceIDs).Scan(&applianceCarbonValue)
	if err != nil {
		log.Println("Error fetching appliance carbon values:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch appliance carbon values"})
		return
	}
	totalEmissions := (vehicleCarbonValue * float64(input.KmPerWeek) * float64(input.NumberOfVehicles)) +
		float64(fuelCarbonValue) +
		float64(foodCarbonValue) +
		float64(applianceCarbonValue) +
		float64(input.ElectricityConsumed)

	// Convert total emissions to tons (assuming emissions are calculated in grams)
	totalEmissionsInTons := totalEmissions / 1000 // Change divisor if your input emissions are in a different unit (grams, kg, etc.)

	// Debugging: Log the values before insertion
	log.Printf("Vehicle Carbon Value: %.2f, Km Per Week: %d, Number of Vehicles: %d, Fuel Carbon Value: %.2f, Food Carbon Value: %.2f, Appliance Carbon Value: %.2f, Electricity Consumed: %.2f, Total Emissions: %.2f\n",
		vehicleCarbonValue, input.KmPerWeek, input.NumberOfVehicles, fuelCarbonValue, foodCarbonValue, applianceCarbonValue, float64(input.ElectricityConsumed), totalEmissionsInTons)

	result, err := config.Database.Exec(`INSERT INTO electricity_consumption (electricity_consumed, appliance_ids) VALUES (?, ?)`,
		input.ElectricityConsumed, applianceIDs)
	if err != nil {
		log.Println("Error inserting into electricity_consumption:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to insert electricity consumption data"})
		return
	}
	electricityID, err := result.LastInsertId()
	if err != nil {
		log.Println("Error getting last insert ID:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to retrieve electricity ID"})
		return
	}

	result, err = config.Database.Exec(`INSERT INTO carbon_calculator_data (vehicle_type_id, fuel_type_id, diet_type_id, electricity_id, km_per_week, number_of_vehicles, carbon_value) VALUES (?, ?, ?, ?, ?, ?, ?)`,
		input.VehicleTypeID, input.FuelTypeID, input.DietTypeID, electricityID, input.KmPerWeek, input.NumberOfVehicles, totalEmissionsInTons)
	if err != nil {
		log.Println("Error inserting carbon data:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to insert carbon data"})
		return
	}

	lastInsertID, err := result.LastInsertId()
	if err != nil {
		log.Println("Error getting last insert ID for carbon data:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to retrieve last insert ID"})
		return
	}
	averageEmissions := 10.0                                                                     // Average emissions in tons
	percentageDifference := ((totalEmissionsInTons - averageEmissions) / averageEmissions) * 100 // Calculate percentage difference

	annualCarbonFootprint := strconv.Itoa(int(math.Round(totalEmissionsInTons)))   // Convert total emissions to string
	roundedPercentageDifference := int(math.Round(math.Abs(percentageDifference))) // Absolute value for comparison

	comparison := "which is equal to the average"
	if totalEmissionsInTons > averageEmissions {
		comparison = fmt.Sprintf("which is %d%% higher than average", roundedPercentageDifference)
	} else if totalEmissionsInTons < averageEmissions {
		comparison = fmt.Sprintf("which is %d%% lower than average", roundedPercentageDifference)
	}

	c.JSON(http.StatusOK, gin.H{
		"annual_carbon_footprint": annualCarbonFootprint + " ton CO₂",
		"comparison_to_average":   comparison,
		"user_id":                 lastInsertID,
	})
}
