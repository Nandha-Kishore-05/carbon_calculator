package pages

import (
	"CARBON_CALCULATOR/config"
	"CARBON_CALCULATOR/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateTreePlantation(c *gin.Context) {
	var tree models.TreePlantation

	if err := c.ShouldBindJSON(&tree); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	query := `INSERT INTO tree_plantation (name, phone_number, email, location, trees_to_plant, name_on_behalf) 
              VALUES (?, ?, ?, ?, ?, ?)`
	_, err := config.Database.Exec(query, tree.Name, tree.PhoneNumber, tree.Email, tree.Location, tree.TreesToPlant, tree.NameOnBehalf)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := gin.H{
		"message": "Plantation inserted successfully",
	}

	c.JSON(http.StatusCreated, response)
}
