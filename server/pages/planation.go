package pages

import (
	"CARBON_CALCULATOR/config"
	"CARBON_CALCULATOR/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateTreePlantation(c *gin.Context) {
	var requestData models.TreePlantationWithStatus

	if err := c.ShouldBindJSON(&requestData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input data", "details": err.Error()})
		return
	}

	if requestData.UserId == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user_id is required"})
		return
	}

	query := `INSERT INTO tree_plantation (name, phone_number, email, location, trees_to_plant, name_on_behalf, user_id) 
              VALUES (?, ?, ?, ?, ?, ?, ?)`
	_, err := config.Database.Exec(query, requestData.Name, requestData.PhoneNumber, requestData.Email, requestData.Location, requestData.TreesToPlant, requestData.NameOnBehalf, requestData.UserId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	statusQuery := `INSERT INTO tree_planation_status (user_id, status) VALUES (?, ?)`
	_, err = config.Database.Exec(statusQuery, requestData.UserId, requestData.Status)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := gin.H{
		"message": "Plantation inserted successfully with status",
	}

	c.JSON(http.StatusCreated, response)
}
