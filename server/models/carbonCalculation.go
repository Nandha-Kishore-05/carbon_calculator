package models

type CarbonInput struct {
	VehicleTypeID    int    `json:"vehicle_type_id"`
	FuelTypeID       int    `json:"fuel_type_id"`
	FoodTypeID       int    `json:"food_type_id"`
	ApplianceID      string `json:"appliance_id"`
	KmPerWeek        int    `json:"km_per_week"`
	NumberOfVehicles int    `json:"number_of_vehicles"`
	ElectricityID    int    `json:"electricity_id"`
	UnitsConsumed    int    `json:"units_consumed"`
	Name             string `json:"name"`
	PhoneNumber      string `json:"phone_number"`
	Email            string `json:"email"`
	Location         string `json:"location"`
	TreesToPlant     int    `json:"trees_to_plant"`
	NameOnBehalf     string `json:"name_on_behalf"`
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
