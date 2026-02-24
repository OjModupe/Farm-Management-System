import type { ReactElement } from "react";
import { LuBeef } from "react-icons/lu";
import { GiCurledLeaf } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import { FiCloudRain } from "react-icons/fi";
import { IoAnalytics } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

interface dashboardDiv {
  name: string;
  value: string;
  percentage: string;
  icon: ReactElement;
}

const dashboardDiv = [
  {
    name: "Total Animals",
    value: "124",
    percentage: "+8%",
    icon: <LuBeef />,
  },
  {
    name: "Active Crops",
    value: "12",
    percentage: "+3%",
    icon: <GiCurledLeaf />,
  },
  {
    name: "Resources",
    value: "8.2K kg",
    percentage: "-2%",
    icon: <BsBoxSeam />,
  },
  {
    name: "Weather",
    value: "24°C",
    percentage: "Sunny",
    icon: <FiCloudRain />,
  },
  {
    name: "Daily Production",
    value: "850L",
    percentage: "+12%",
    icon: <IoAnalytics />,
  },
  {
    name: "Alerts",
    value: "3",
    percentage: "Active",
    icon: <MdErrorOutline />,
  },
];

const Dashboard = () => {
  return (
    <div className="  ">
      <div className="bg-green-50 ">
        <div className="grid grid-cols-3 gap-5  ">
          {dashboardDiv.map((item) => (
            <div
              className={`flex flex-col  border border-gray-200 bg-white rounded-lg p-5`}
            >
              <div className="flex justify-between ">
                <div className="flex flex-col gap-1.25">
                  <span className="text-gray-500 ">{item.name}</span>
                  <span className="pt-2">{item.value}</span>
                </div>
                <div className="text-xl items-center size-12 rounded-2xl bg-gray-200 p-3">
                  {item.icon}
                </div>
              </div>
              <div className=" text-green-900 pt-2">{item.percentage}</div>
            </div>
          ))}
        </div>

        <div className=" pt-10">
          <div className="grid grid-cols-2 gap-5  ">
            <div className="flex flex-col border border-gray-200 rounded-lg">
              kjj ;lkjhbgvf
            </div>
            <div className="border border-gray-200 rounded-lg">,mnnn</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
