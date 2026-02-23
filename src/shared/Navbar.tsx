import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

// interface NavBarProps {
//   title: string;
// }

const Navbar = () => {
  return (
    <div className="px-5 justify-between flex border-b border-b-gray-300 ">
      <div className="flex flex-col gap-1 p-2">
        <h1 className="text-2xl">Welcome Back, John Doe</h1>
        <h2 className="text-gray-400 text-sm">Farmer</h2>
      </div>

      <div className=" flex gap-4 items-center ">
        <Link to="/">
          <div className="text-2xl">
            <FiMoon />
          </div>
        </Link>
        <div className="text-3xl relative ">
          <IoIosNotifications />

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
