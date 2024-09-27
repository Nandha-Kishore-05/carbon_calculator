package pages

import (
	"CARBON_CALCULATOR/config"
	"CARBON_CALCULATOR/models"
	"log"

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

	_, err := config.Database.Exec(`INSERT INTO vehicles (vehicle_type_id, fuel_type_id, km_per_week, number_of_vehicles) VALUES (?, ?, ?, ?)`,
		input.VehicleTypeID, input.FuelTypeID, input.KmPerWeek, input.NumberOfVehicles)

	if err != nil {
		log.Println("Error inserting vehicle data:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to insert vehicle data"})
		return
	}

	_, err = config.Database.Exec(`INSERT INTO dietary_habits (diet_type_id) VALUES (?)`, input.DietTypeID)
	if err != nil {
		log.Println("Error inserting dietary data:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to insert dietary data"})
		return
	}

	_, err = config.Database.Exec(`INSERT INTO electricity_consumption (units_consumed,appliance_id) VALUES (?,?)`, input.ElectricityConsumed, input.ApplianceIDs) // Assuming first appliance for simplicity
	if err != nil {
		log.Println("Error inserting electricity data:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to insert electricity data"})
		return
	}

	totalEmissions := calculateFootprint(input)
	averageEmissions := 10.0

	comparison := "Your carbon footprint is lower than the average"
	if totalEmissions > averageEmissions {
		comparison = "Your carbon footprint is higher than the average"
	}

	percentageDifference := (totalEmissions / averageEmissions) * 100

	c.JSON(http.StatusOK, gin.H{
		"annual_carbon_footprint": strconv.FormatFloat(totalEmissions, 'f', 2, 64) + " ton CO₂",
		"comparison_to_average":   comparison,
		"percentage_difference":   strconv.FormatFloat(percentageDifference, 'f', 2, 64) + "%",
	})
}

func calculateFootprint(input models.CarbonInput) float64 {

	vehicleEmissions := float64(input.KmPerWeek) * 0.1 * float64(input.NumberOfVehicles)
	dietEmissions := float64(input.DietTypeID) * 0.5
	electricityEmissions := float64(input.ElectricityConsumed) * 0.3

	totalEmissions := vehicleEmissions + dietEmissions + electricityEmissions
	return totalEmissions
}
