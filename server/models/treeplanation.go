package models

type TreePlantation struct {
	ID           int    `json:"id"`
	Name         string `json:"name"`
	PhoneNumber  string `json:"phone_number"`
	Email        string `json:"email"`
	Location     string `json:"location"`
	TreesToPlant int    `json:"trees_to_plant"`
	NameOnBehalf string `json:"name_on_behalf"`
}
