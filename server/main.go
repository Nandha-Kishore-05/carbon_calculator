package main

import (
	"CARBON_CALCULATOR/config"
	"CARBON_CALCULATOR/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	config.ConnectDB()

	router := gin.Default()
	routes.RegisterRoutes(router)

	router.Run(":8080")
}
