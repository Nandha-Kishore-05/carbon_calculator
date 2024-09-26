import PageLayoutTwo from "../components/Layout/pageLayoutTwo";
import PageOneLayout from "../components/Layout/PageOneLayout";
import Sample from "../pages/sample/sample";
import Url from "../pages/url/url";
import VehicleType from "../pages/Vehicle/VehicleType";
import FormSummition from "../pages/Form/form";
import Submitted from "../pages/Form/submitted";

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
},
{
  path:'/submitted',
  element : (
    <PageOneLayout>
      <Submitted />
    </PageOneLayout>

  )
}
  

];

export default routes;
