import { BiMenu } from "react-icons/bi";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

// interface NavBarProps {
//   title: string;
// }

const Navbar = () => {
  return (
    <div className="px-5 justify-between flex border-b border-b-gray-300 ">
      <div className="flex items-center gap-8">
        <Link to="/">
          <div>
            <MdMenu size={40} className=" md:hidden" />
          </div>
        </Link>
        <div className="flex flex-col gap-1 p-2">
          <div className="flex gap-6 items-center">
            <h1 className=" text-sm sm:text-xl lg:text-2xl font-semibold">
              Welcome Back, John Doe
            </h1>
          </div>
          <h2 className="text-gray-400 text-sm">Farmer</h2>
        </div>
      </div>

      <div className=" flex gap-4 items-center  ">
        <Link to="/">
          <div className="text-2xl">
            <FiMoon className="" />
          </div>
        </Link>
        <div className="text-3xl relative ">
          <IoIosNotifications className="" />

          <div className="size-5 rounded-full bg-red-400 absolute top-0 left-4">
            <h1 className="text-sm text-center">3</h1>
          </div>
        </div>
        {/* <div className="text-2xl">
          <FiSun />
        </div> */}
        <div className="size-10 rounded-full bg-green-800  text-center justify-center">
          <h1 className="text-white text-xl text-center">J</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
