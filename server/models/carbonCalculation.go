package models

type CarbonInput struct {
	VehicleTypeID    int      `json:"vehicle_type_id"`
	FuelTypeID       int      `json:"fuel_type_id"`
	FoodTypeID       int      `json:"food_type_id"`
	DietTypeID       int      `json:"diet_type_id"` // New field
	ApplianceID      []string `json:"appliance_id"`
	KmPerWeek        int      `json:"km_per_week"`
	NumberOfVehicles int      `json:"number_of_vehicles"`

	ElectricityConsumed int `json:"electricity_consumed"` // New field
}

type CarbonData struct {
	VehicleTypeID int     `json:"vehicle_type_id"`
	CarbonValue   float64 `json:"carbon_value"`
}

type FuelData struct {
	FuelTypeID  int     `json:"fuel_type_id"`
	CarbonValue float64 `json:"carbon_value"`
}

type FoodData struct {
	FoodTypeID  int     `json:"food_type_id"`
	CarbonValue float64 `json:"carbon_value"`
}
type ApplianceData struct {
	ApplianceID int     `json:"appliance_id"`
	CarbonValue float64 `json:"carbon_value"`
}
