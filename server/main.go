package main

import (
	"CARBON_CALCULATOR/config" // Import the generated Swagger docs

	"CARBON_CALCULATOR/routes"

	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// @title Carbon Calculator API
// @version 1.0
// @description API for calculating carbon footprint and managing tree plantations.
// @host localhost:8080
// @BasePath /crayon
func main() {
	// Connect to the database
	config.ConnectDB()

	// Initialize Gin router
	router := gin.Default()

	// Register routes
	routes.RegisterRoutes(router)

	// Set up Swagger
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	// Start the server
	router.Run(":8080")
}
