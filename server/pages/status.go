package pages

import (
	"CARBON_CALCULATOR/config"
	"CARBON_CALCULATOR/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func TreePlantationStatus(c *gin.Context) {
	var requestData models.TreePlantationWithStatus

	if err := c.ShouldBindJSON(&requestData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input data", "details": err.Error()})
		return
	}

	if requestData.UserId == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user_id is required"})
		return
	}
	statusQuery := `INSERT INTO tree_planation_status (user_id, status) VALUES (?, ?)`
	_, err := config.Database.Exec(statusQuery, requestData.UserId, requestData.Status)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := gin.H{
		"message": "Plantation inserted successfully with status",
	}
	c.JSON(http.StatusCreated, response)
}
