import { useState } from "react";
import type { ReactElement } from "react";
import { Link } from "react-router";
import { LuHouse } from "react-icons/lu";
import { PiPlantBold } from "react-icons/pi";
import { LuBeef } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { ImLeaf } from "react-icons/im";
import { BsBoxSeam } from "react-icons/bs";
import { FiTool } from "react-icons/fi";
import { FaCalendar, FaRegUser } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

import { IoAnalytics } from "react-icons/io5";
import { GiChestnutLeaf } from "react-icons/gi";
import { LuMessageSquare } from "react-icons/lu";

interface SideBarRoute {
  name: string;
  path: string;
  icon: ReactElement;
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeRoute, setActiveRoute] = useState<string>("Dashboard");
  const role: any = localStorage.getItem("role");
  console.log(role);

  let mainRoute = [];

  const farmer: SideBarRoute[] = [
    { name: "Dashboard", path: "/", icon: <LuHouse /> },
    { name: "Livestock", path: "/livestock", icon: <LuBeef /> },

    { name: "Crops", path: "/crops", icon: <PiPlantBold /> },
    {
      name: "Resources",
      path: "/resources",
      icon: <BsBoxSeam />,
    },
    { name: "AI Analytics", path: "/aianalytics", icon: <IoAnalytics /> },
    {
      name: "Disease Detection",
      path: "/diseasedetection",
      icon: <GiChestnutLeaf />,
    },
    {
      name: "Notification",
      path: "/notification",
      icon: <IoIosNotifications />,
    },
    {
      name: " AI Assistant",
      path: "/aiassistant",
      icon: <LuMessageSquare />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FaRegFileAlt />,
    },

    {
      name: "Profile",
      path: "/profile",
      icon: <FaRegUser />,
    },
  ];

  const Admin: SideBarRoute[] = [
    { name: "Dashboard", path: "/", icon: <LuHouse /> },
    { name: "Crops", path: "/crops", icon: <PiPlantBold /> },
    { name: "Livestock", path: "/livestock", icon: <LuBeef /> },
    { name: "Equipments", path: "/equipments", icon: <FiTool /> },
    { name: "Tasks", path: "/tasks", icon: <FaCalendar /> },
    { name: "Financial", path: "/financial", icon: <FiDollarSign /> },
    { name: "Users", path: "/users", icon: <FaUserFriends /> },
  ];

  const Veterinarian: SideBarRoute[] = [
    { name: "Dashboard", path: "/", icon: <LuHouse /> },
    { name: "Crops", path: "/crops", icon: <PiPlantBold /> },
    { name: "Livestock", path: "/livestock", icon: <LuBeef /> },
    { name: "Tasks", path: "/tasks", icon: <FaCalendar /> },
  ];

  if (role === "Farmer") {
    mainRoute = farmer;
  } else if (role === "Admin") {
    mainRoute = Admin;
  } else {
    mainRoute = Veterinarian;
  }

  const shouldCollapse = !isCollapsed;
  return (
    <>
      <div
        className={`h-screen ${shouldCollapse === true ? "w-[70px] px-2" : "w-64 "} gap-2 bg-green-800 flex flex-col p-6`}
        onMouseEnter={() => setIsCollapsed(true)}
        onMouseLeave={() => setIsCollapsed(false)}
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <div
              className={`text-white ${shouldCollapse === true ? "text-2xl px-2" : " "}`}
            >
              <ImLeaf />{" "}
            </div>
            <h1
              className={` text-xl text-white ${shouldCollapse == true ? "hidden" : "blocked"}`}
            >
              GreenLeaf
            </h1>
          </div>
          <h1
            className={` text-white ${shouldCollapse == true ? "hidden" : "blocked"}`}
          >
            Smart Farm Management
          </h1>
        </div>
        <hr className="text-white mt-2" />
        <div className="pt-5">
          {mainRoute.map((item) => (
            <Link to={item.path} key={item.name}>
              <div
                className={` w-full p-4 ${activeRoute == item.name ? "bg-green-950 text-white rounded-lg " : " "} flex gap-3 hover:bg-green-900 mb-2 rounded-lg`}
                onClick={() => setActiveRoute(item.name)}
              >
                <div
                  className={`flex gap-2 items-center ${activeRoute === item.name ? "text-white" : "text-white"}`}
                >
                  <div
                    className={` ${shouldCollapse == true ? "flex items-center text-xl " : " "}`}
                  >
                    {item.icon}
                  </div>
                  <h1
                    className={` ${shouldCollapse == true ? "hidden" : "block"}`}
                  >
                    {" "}
                    {item.name}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* <hr className="text-gray-400" /> */}

        {/* <div className="mt-70  p-4 items-center flex gap-2">
          <div className="rounded-full size-12 text-center justify-center align-center bg-green-700">
            <span className="text-white text-3xl">JD</span>
          </div>
          <div className="flex flex-col  text-white">
            <h1>John Doe</h1>
            <h1 className="text-gray-300">Farmer</h1>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
