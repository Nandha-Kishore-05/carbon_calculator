package models

type TreePlantationWithStatus struct {
	Name         string `json:"name"`
	PhoneNumber  string `json:"phone_number"`
	Email        string `json:"email"`
	Location     string `json:"location"`
	TreesToPlant int    `json:"trees_to_plant"`
	NameOnBehalf string `json:"name_on_behalf"`
	UserId       int    `json:"user_id"`
	Status       string `json:"status"`
}
