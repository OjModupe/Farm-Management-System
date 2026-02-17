import { useState } from "react";
import type { ReactElement } from "react";
import { Link } from "react-router";
import { LuHouse } from "react-icons/lu";
import { PiPlantBold } from "react-icons/pi";
import { LuBeef } from "react-icons/lu";
import { AiOutlineBarChart } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { ImLeaf } from "react-icons/im";
import { BsBoxSeam } from "react-icons/bs";
import { FiTool } from "react-icons/fi";
import { FaCalendar } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";

interface SideBarRoute {
  name: string;
  path: string;
  icon: ReactElement;
}

const Sidebar = () => {
  const [activeRoute, setActiveRoute] = useState<string>("Dashboard");
  const farmer: SideBarRoute[] = [
    { name: "Dashboard", path: "/", icon: <LuHouse /> },
    { name: "Crops", path: "/crops", icon: <PiPlantBold /> },
    { name: "Livestock", path: "/livestock", icon: <LuBeef /> },
    { name: "Production", path: "/production", icon: <BsBoxSeam /> },
    { name: "Analytics", path: "/analytics", icon: <AiOutlineBarChart /> },
    {
      name: "Notification",
      path: "/notification",
      icon: <IoIosNotifications />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <IoSettingsOutline />,
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
  return (
    <div className="h-screen w-[60vw] sm:w-[40vw]  md:w-[25vw] lg:w-[15vw] gap-2 bg-gray-300 flex flex-col">
      {farmer.map((item) => (
        <Link to={item.path} key={item.name}>
          <div
            className={`p-4 ${activeRoute == item.name ? "bg-green-200 text-gray-300" : " "} flex gap-3`}
            onClick={() => setActiveRoute(item.name)}
          >
            <div
              className={`flex gap-2 items-center ${activeRoute === item.name ? "text-black" : "text-gray-600"}`}
            >
              {item.icon}
              {item.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
