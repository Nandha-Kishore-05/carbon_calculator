import PageLayoutTwo from "../components/Layout/pageLayoutTwo";
import PageOneLayout from "../components/Layout/PageOneLayout";
import Sample from "../pages/sample/sample";
import Url from "../pages/url/url";
import FuelType from "../pages/Vehicle/FuelType";
import KiloMeters from "../pages/Vehicle/Kilometers";
import NoOfVehicle from "../pages/Vehicle/NoOfVehicle";
import VehicleType from "../pages/Vehicle/VehicleType";
const routes = [
  {
    path: "/sample",
    element: (
      <PageOneLayout>
        <Url />
      </PageOneLayout>
    ),
  },
{
  path:"/",
  element: (
    <PageOneLayout>
      <Sample />
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


  

];

export default routes;
