package models

type Appliance struct {
	ApplianceID   int    `json:"appliance_id"`
	ApplianceName string `json:"appliance_name"`
}

type DietaryType struct {
	DietTypeID   int    `json:"diet_type_id"`
	DietTypeName string `json:"diet_type_name"`
}

type VehicleType struct {
	VehicleTypeID   int    `json:"vehicle_type_id"`
	VehicleTypeName string `json:"vehicle_type_name"`
}

type FuelType struct {
	FuelTypeID   int    `json:"fuel_type_id"`
	FuelTypeName string `json:"fuel_type_name"`
}

type CombinedData struct {
	Appliances   []Appliance   `json:"appliances"`
	DietaryTypes []DietaryType `json:"dietary_types"`
	VehicleTypes []VehicleType `json:"vehicle_types"`
	FuelTypes    []FuelType    `json:"fuel_types"`
}
