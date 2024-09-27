package routes

import (
	"CARBON_CALCULATOR/pages"

	"github.com/gin-gonic/gin"
)

// RegisterRoutes sets up the API routes for the Carbon Calculator application.
// @title Carbon Calculator API
// @version 1.0
// @description This API allows calculating carbon footprint and managing tree plantation data.
// @host localhost:8080
// @BasePath /crayon
func RegisterRoutes(router *gin.Engine) {
	api := router.Group("/crayon")
	{
		// @Summary Calculate Carbon Footprint
		// @Description Calculate the carbon footprint based on provided data.
		// @Tags carbon
		// @Accept  json
		// @Produce  json
		// @Param   request body pages.CarbonFootprintRequest true "Carbon Footprint Request"
		// @Success 200 {object} pages.CarbonFootprintResponse
		// @Failure 400 {object} gin.H
		// @Router /crayon/calculate [post]
		api.POST("/calculate", pages.CalculateCarbonFootprint)

		// @Summary Create Tree Plantation Data
		// @Description Create a new entry for tree plantation data.
		// @Tags plantation
		// @Accept  json
		// @Produce  json
		// @Param   request body pages.TreePlantationRequest true "Tree Plantation Request"
		// @Success 201 {object} gin.H
		// @Failure 400 {object} gin.H
		// @Router /crayon/plantation [post]
		api.POST("/plantation", pages.CreateTreePlantation)

		// @Summary Get All Data
		// @Description Retrieve all carbon footprint and plantation data.
		// @Tags data
		// @Produce  json
		// @Success 200 {object} []pages.DataResponse
		// @Failure 404 {object} gin.H
		// @Router /crayon/all-data [get]
		api.GET("/all-data", pages.GetAllData)
	}
}
