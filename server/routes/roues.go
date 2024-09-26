package routes

import (
	"CARBON_CALCULATOR/pages"

	"github.com/gin-gonic/gin"
)

func RegisterRoutes(router *gin.Engine) {
	api := router.Group("/crayon")
	{
		api.POST("/calculate", pages.CalculateCarbonFootprint)
		api.POST("/plantation", pages.CreateTreePlantation)
	}
}
