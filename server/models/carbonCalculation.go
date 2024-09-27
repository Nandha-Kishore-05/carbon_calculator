package models

type CarbonInput struct {
	VehicleTypeID       int `json:"vehicle_type_id"`
	NumberOfVehicles    int `json:"number_of_vehicles"`
	FuelTypeID          int `json:"fuel_type_id"`
	KmPerWeek           int `json:"km_per_week"`
	DietTypeID          int `json:"diet_type_id"`
	ApplianceIDs        int `json:"appliance_id"`
	ElectricityConsumed int `json:"electricity_consumed"`
}
