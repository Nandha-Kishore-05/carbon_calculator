import {createSlice} from '@reduxjs/toolkit'
export const karma=createSlice({

    name: 'user',
    initialState: {
     value: {
        vehicle_type_id: 2,
        number_of_vehicles: 2,
        fuel_type_id: 2,
        km_per_week: 86,
        diet_type_id: 1,
        appliance_id: 1,
        electricity_consumed: 100,
      }
    },
    reducers: {
        setvehicle_type_id:(state,action)=>{
            console.log(action.payload.vehicle_type_id)
            state.value.vehicle_type_id=action.payload.vehicle_type_id
        },
       
        setnumber_of_vehicles:(state,action)=>{
            console.log(action.payload.number_of_vehicles)
            state.value.number_of_vehicles=action.payload.number_of_vehicles
        },
        setfuel_type_id:(state,action)=>{
            console.log(action.payload.setfuel_type_id)
            state.value.fuel_type_id=action.payload.setfuel_type_id
            
        }
        , setkm_per_week:(state,action)=>{
            console.log(action.payload.km_per_week)
            state.value.km_per_week=action.payload.km_per_week
        }
        , setdiet_type_id:(state,action)=>{
            console.log(action.payload.diet_type_id)
            state.value.diet_type_id=action.payload.diet_type_id
        }
        , setappliance_id:(state,action)=>{
            console.log(action.payload.appliance_id)
            state.value.appliance_id=action.payload.appliance_id
        }
        , setelectricity_consumed:(state,action)=>{
            console.log(action.payload.electricity_consumed)
            state.value.electricity_consumed=action.payload.electricity_consumed
        }
    }
})

export const {setvehicle_type_id,setelectricity_consumed,setappliance_id,setdiet_type_id,setkm_per_week,setfuel_type_id,setnumber_of_vehicles} =karma.actions
export const {toggleIsLoggedIn}=karma.actions
export default karma.reducer