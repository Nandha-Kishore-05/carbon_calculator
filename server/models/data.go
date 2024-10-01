package models

type Appliance struct {
	ApplianceID   int     `json:"appliance_id"`
	ApplianceName string  `json:"appliance_name"`
	CarbonValue   float64 `json:"carbon_value"`
}

type FoodType struct {
	FoodTypeID   int     `json:"Food_type_id"`
	FoodTypeName string  `json:"Food_type_name"`
	CarbonValue  float64 `json:"carbon_value"`
}

type VehicleType struct {
	VehicleTypeID   int     `json:"vehicle_type_id"`
	VehicleTypeName string  `json:"vehicle_type_name"`
	CarbonValue     float64 `json:"carbon_value"`
}

type FuelType struct {
	FuelTypeID   int     `json:"fuel_type_id"`
	FuelTypeName string  `json:"fuel_type_name"`
	CarbonValue  float64 `json:"carbon_value"`
}

type CombinedData struct {
	Appliances   []Appliance   `json:"appliances"`
	FoodTypes    []FoodType    `json:"dietary_types"`
	VehicleTypes []VehicleType `json:"vehicle_types"`
	FuelTypes    []FuelType    `json:"fuel_types"`
}
