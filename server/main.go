package main

import (
	"CARBON_CALCULATOR/config" // Import the generated Swagger docs
	"CARBON_CALCULATOR/routes"

	cors "github.com/gin-contrib/cors"
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

	// CORS configuration
	corsConfig := cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // Allow only this origin
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}

	// Apply CORS middleware
	router.Use(cors.New(corsConfig))

	// Register routes
	routes.RegisterRoutes(router)

	// Set up Swagger

	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	// Start the server

	router.Run(":8080")
}
