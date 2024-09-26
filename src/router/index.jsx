import PageLayoutTwo from "../components/Layout/pageLayoutTwo";
import PageOneLayout from "../components/Layout/PageOneLayout";
import Sample from "../pages/sample/sample";
import Url from "../pages/url/url";
import VehicleType from "../pages/Vehicle/VehicleType";
import FormSummition from "../pages/Form/form";

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
    <PageOneLayout>
      <VehicleType />
    </PageOneLayout>

  )
},
{
  path:'/form',
  element : (
    <PageOneLayout>
      <FormSummition />
    </PageOneLayout>

  )
}
  

];

export default routes;
