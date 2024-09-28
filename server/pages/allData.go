package pages

import (
	"CARBON_CALCULATOR/config"
	"CARBON_CALCULATOR/models"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllData(c *gin.Context) {

	var appliances []models.Appliance
	var dietaryTypes []models.DietaryType
	var vehicleTypes []models.VehicleType
	var fuelTypes []models.FuelType

	rows, err := config.Database.Query("SELECT appliance_id, appliance_name FROM appliance_names")
	if err != nil {
		log.Println("Error fetching appliance names:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch appliance names"})
		return
	}
	defer rows.Close()

	for rows.Next() {
		var appliance models.Appliance
		if err := rows.Scan(&appliance.ApplianceID, &appliance.ApplianceName); err != nil {
			log.Println("Error scanning appliance row:", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error scanning appliance row"})
			return
		}
		appliances = append(appliances, appliance)
	}

	rows, err = config.Database.Query("SELECT diet_type_id, diet_type_name FROM dietary_types")
	if err != nil {
		log.Println("Error fetching dietary types:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch dietary types"})
		return
	}
	defer rows.Close()

	for rows.Next() {
		var dietType models.DietaryType
		if err := rows.Scan(&dietType.DietTypeID, &dietType.DietTypeName); err != nil {
			log.Println("Error scanning dietary type row:", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error scanning dietary type row"})
			return
		}
		dietaryTypes = append(dietaryTypes, dietType)
	}

	rows, err = config.Database.Query("SELECT vehicle_type_id, vehicle_type_name FROM vehicle_types")
	if err != nil {
		log.Println("Error fetching vehicle types:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch vehicle types"})
		return
	}
	defer rows.Close()

	for rows.Next() {
		var vehicleType models.VehicleType
		if err := rows.Scan(&vehicleType.VehicleTypeID, &vehicleType.VehicleTypeName); err != nil {
			log.Println("Error scanning vehicle type row:", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error scanning vehicle type row"})
			return
		}
		vehicleTypes = append(vehicleTypes, vehicleType)
	}

	rows, err = config.Database.Query("SELECT fuel_type_id, fuel_type_name FROM fuel_types")
	if err != nil {
		log.Println("Error fetching fuel types:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch fuel types"})
		return
	}
	defer rows.Close()

	for rows.Next() {
		var fuelType models.FuelType
		if err := rows.Scan(&fuelType.FuelTypeID, &fuelType.FuelTypeName); err != nil {
			log.Println("Error scanning fuel type row:", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error scanning fuel type row"})
			return
		}
		fuelTypes = append(fuelTypes, fuelType)
	}

	combinedData := models.CombinedData{
		Appliances:   appliances,
		DietaryTypes: dietaryTypes,
		VehicleTypes: vehicleTypes,
		FuelTypes:    fuelTypes,
	}

	c.JSON(http.StatusOK, combinedData)
}
