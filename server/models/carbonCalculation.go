package models

type CarbonInput struct {
	VehicleTypeID    int      `json:"VehicleTypeID"`
	FuelTypeID       int      `json:"FuelTypeID"`
	FoodTypeID       int      `json:"FoodTypeID"`
	ApplianceID      []string `json:"ApplianceID"`
	KmPerWeek        int      `json:"KmPerWeek"`
	NumberOfVehicles int      `json:"NumberOfVehicles"`
	UnitsConsumed    int      `json:"UnitsConsumed"`
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
