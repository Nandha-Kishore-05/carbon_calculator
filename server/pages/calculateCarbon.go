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
	err = config.Database.QueryRow(`SELECT carbon_value FROM food_types WHERE food_type_id = ?`, input.FoodTypeID).Scan(&foodCarbonValue)
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

	// Calculate total emissions
	totalEmissions := (vehicleCarbonValue * float64(input.KmPerWeek) * float64(input.NumberOfVehicles)) +
		float64(fuelCarbonValue) + float64(foodCarbonValue) + float64(applianceCarbonValue) +
		float64(input.UnitsConsumed)

	totalEmissionsInTons := totalEmissions / 10000

	// Insert electricity consumption data
	result, err := config.Database.Exec(`INSERT INTO electricity_consumption (units_consumed, appliance_ids) VALUES (?, ?)`,
		input.UnitsConsumed, applianceIDs)
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

	// Insert carbon calculator data
	result, err = config.Database.Exec(`INSERT INTO carbon_calculator_data (vehicle_type_id, fuel_type_id, food_type_id, electricity_id, km_per_week, number_of_vehicles, carbon_value) VALUES (?, ?, ?, ?, ?, ?, ?)`,
		input.VehicleTypeID, input.FuelTypeID, input.FoodTypeID, electricityID, input.KmPerWeek, input.NumberOfVehicles, totalEmissionsInTons)
	if err != nil {
		log.Println("Error inserting carbon data:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to insert carbon data"})
		return
	}

	// Get last insert ID
	lastInsertID, err := result.LastInsertId()
	if err != nil {
		log.Println("Error getting last insert ID for carbon data:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to retrieve last insert ID"})
		return
	}

	// Calculate comparison to average emissions
	averageEmissions := 10.0 // Average value, this can be adjusted
	percentageDifference := ((totalEmissionsInTons - averageEmissions) / averageEmissions) * 1000

	annualCarbonFootprint := strconv.Itoa(int(math.Round(totalEmissionsInTons)))
	roundedPercentageDifference := int(math.Round(percentageDifference))

	comparison := "Your carbon footprint is equal to the average"
	if totalEmissionsInTons > averageEmissions {
		comparison = "Your carbon footprint is " + strconv.Itoa(roundedPercentageDifference) + "% higher than the average"
	} else if totalEmissionsInTons < averageEmissions {
		comparison = "Your carbon footprint is " + strconv.Itoa(-roundedPercentageDifference) + "% lower than the average"
	}

	c.JSON(http.StatusOK, gin.H{
		"annual_carbon_footprint": annualCarbonFootprint + " ton CO₂",
		"comparison_to_average":   comparison,
		"user_id":                 lastInsertID,
	})
}
