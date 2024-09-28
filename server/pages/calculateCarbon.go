package pages

import (
	"CARBON_CALCULATOR/config"
	"CARBON_CALCULATOR/models"
	"log"
	"math"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CalculateCarbonFootprint(c *gin.Context) {
	var input models.CarbonInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var vehicleCarbonValue int
	err := config.Database.QueryRow(`SELECT carbon_value FROM vehicle_types WHERE vehicle_type_id = ?`, input.VehicleTypeID).Scan(&vehicleCarbonValue)
	if err != nil {
		log.Println("Error fetching vehicle carbon value:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch vehicle carbon value"})
		return
	}

	var fuelCarbonValue int
	err = config.Database.QueryRow(`SELECT carbon_value FROM fuel_types WHERE fuel_type_id = ?`, input.FuelTypeID).Scan(&fuelCarbonValue)
	if err != nil {
		log.Println("Error fetching fuel carbon value:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch fuel carbon value"})
		return
	}

	var foodCarbonValue int
	err = config.Database.QueryRow(`SELECT carbon_value FROM food_types WHERE food_type_id = ?`, input.FoodTypeID).Scan(&foodCarbonValue)
	if err != nil {
		log.Println("Error fetching food carbon value:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch food carbon value"})
		return
	}
	var applianceCarbonValue int

	query := `
		SELECT SUM(a.carbon_value) 
		FROM appliance_names a
		INNER JOIN electricity_consumption e
		ON FIND_IN_SET(a.appliance_id, e.appliance_ids) > 0
		WHERE e.id = ?
	`

	err = config.Database.QueryRow(query, input.ApplianceID).Scan(&applianceCarbonValue)
	if err != nil {
		log.Println("Error fetching appliance carbon values:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch appliance carbon values"})
		return
	}

	totalEmissions := float64(vehicleCarbonValue*input.KmPerWeek*input.NumberOfVehicles + fuelCarbonValue + foodCarbonValue + applianceCarbonValue + input.UnitsConsumed)
	totalEmissionsInTons := totalEmissions / 10000

	result, err := config.Database.Exec(`INSERT INTO electricity_consumption (units_consumed, appliance_ids) VALUES (?, ?)`,
		input.UnitsConsumed, input.ApplianceID)
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

	_, err = config.Database.Exec(`INSERT INTO carbon_calculator_data (vehicle_type_id, fuel_type_id, food_type_id, electricity_id, km_per_week, number_of_vehicles, carbon_value) VALUES (?, ?, ?, ?, ?, ?, ?)`,
		input.VehicleTypeID, input.FuelTypeID, input.FoodTypeID, electricityID, input.KmPerWeek, input.NumberOfVehicles, totalEmissionsInTons)
	if err != nil {
		log.Println("Error inserting carbon data:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to insert carbon data"})
		return
	}

	averageEmissions := 10.0
	percentageDifference := ((totalEmissionsInTons - averageEmissions) / averageEmissions) * 10

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
	})
}
