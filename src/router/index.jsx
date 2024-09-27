import PageLayoutTwo from "../components/Layout/pageLayoutTwo";
import PageOneLayout from "../components/Layout/PageOneLayout";
import Sample from "../pages/sample/sample";
import FuelType from "../pages/VehicleExpensive/FuelType";
import KiloMeters from "../pages/VehicleExpensive/Kilometers";
import NoOfVehicle from "../pages/VehicleExpensive/NoOfVehicle";
import VehicleType from "../pages/VehicleExpensive/VehicleType";
import PageLayoutThree from "../components/Layout/pageLayoutThree";
import CarbonFootPrint from "../pages/CarbonFootprint/CarbonFootPrint";
import Form from "../pages/Form/Form";
import FoodType from "../pages/FoodExpensive/FoodType";
import HomeAppliances from "../pages/ElectricityExpensive/HomeAppliances";
import CurrentUnit from "../pages/ElectricityExpensive/CurrentUnit";
import Home from "../pages/Home/Home";
const routes = [
{
  path:"/",
  element: (
    <PageOneLayout>
      <Home />
    </PageOneLayout>
  ),
},
{
  path:'/vehicle-type',
  element : (
    <PageLayoutTwo>
      <VehicleType />
    </PageLayoutTwo>

  ),
},
{
  path:'/no-of-vehicle',
  element : (
    <PageLayoutTwo>
      <NoOfVehicle/>
    </PageLayoutTwo>

  ),
},
{
  path: '/fuel-type',
  element: (
    <PageLayoutTwo>
      <FuelType />
    </PageLayoutTwo>
  ),
},
{
  path:'/kilometer',
  element : (
    <PageLayoutTwo>
<KiloMeters/>
      
    </PageLayoutTwo>

  ),
},
{
  path:'/food-type',
  element : (
    <PageLayoutTwo>
<FoodType/>    
    </PageLayoutTwo>

  ),
},
{
  path:'/home-appliance',
  element : (
    <PageLayoutTwo>
<HomeAppliances/>
      
    </PageLayoutTwo>

  ),
},
{
  path:'/current-unit',
  element : (
    <PageLayoutTwo>
<CurrentUnit/> 
    </PageLayoutTwo>

  ),
},
{
  path:'/carbon-footprint',
  element : (
    <PageLayoutThree>
      <CarbonFootPrint/>
    </PageLayoutThree>

  ),
},
{
  path:"/form",
  element: (
    <PageOneLayout>
      <Form />
    </PageOneLayout>
  ),
},


  

];

export default routes;
