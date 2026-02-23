import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sidebar";
// import { Outlet, useLocation } from "react-router-dom";

const PageLayout = () => {
  // const { pathname } = useLocation();

  // console.log("Current Pathname:", pathname);

  // const routeTitles: Record<string, string> = {
  //   "/dashboard": "Dashboard",
  //   "/dashboard/livestock": "Livestock",
  //   "/dashboard/crops": "Crops",
  //   "/dashboard/resources": "Resources",
  //   "/dashboard/aianalytics": "AI Analytics",
  //   "/dashboard/diseasedetection": "Disease Detection",
  //   "/dashboard/notification": "Notifications",
  //   "/dashboard/aiassistant": "AI Assistant",
  //   "/dashboard/reports": "Reports",
  //   "/dashboard/profile": "Profile",
  // };

  // const pathTitle = routeTitles[pathname];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 space-y-2">
        <Navbar  />

        {/* <Outlet/> */}
      </div>
    </div>
  );
};

export default PageLayout;
