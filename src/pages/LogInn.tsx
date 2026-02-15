import Button from "../shared/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import LgIm from "../assets/image 6.png";
import { ImLeaf } from "react-icons/im";
import { BsArrowDown } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const LogInn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  const navigate = useNavigate;

  const handleLogin = async () => {
    console.log(email);
    console.log(password);

    if (email === "" || password === "") {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        email,
        password,
      });
      console.log("response:", response.data);
      localStorage.setItem("token", response.data.accessToken);
      toast.success("Login Successful");
      navigate();
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message || "Login Failed");
    }
  };

  return (
    <>
      <div className="min-h-screen  flex flex-col w-full md:flex-row ">
        {/* a div for the left side of login containing the user login details */}
        <div className=" w-full md:w-1/2  flex justify-center items-center bg-green-50 p-4">
          {/* Card div */}
          <div className="p-6 w-full max-w-md rounded-2xl bg-white">
            <div className="items-center  p-2 flex flex-col">
              <div className="text-4xl  border p-5 rounded-2xl text-white bg-green-900">
                <ImLeaf />
              </div>

              <div className=" space-y-3 text-center text-xl ">
                <div className="pt-3">
                  <h1>Welcome back</h1>
                </div>
                <h2 className="text-green-800">
                  Sign in to your SmartFarm Account{" "}
                </h2>
              </div>

              {/* Login input field  or card widh */}
              <div className="w-full gap-5  flex flex-col">
                <div className="pt-2">
                  <label className=" ">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="p-2 rounded-2xl border w-full text-gray-400 bg-green-50"
                  />
                </div>

                <div className="">
                  <label>Password</label>
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="........"
                    className="p-2 rounded-2xl border w-full text-gray-400 bg-green-50"
                  />
                </div>

                <div className="relative">
                  <label>Login as</label>
                  <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Farmer"
                    className="p-2 rounded-2xl border w-full text-gray-400 bg-green-50"
                  />

                  <IoIosArrowDown className="absolute text-2xl right-3 top-11 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>

                <div className=" mt-5 flex gap-4 flex-col ">
                  <Link to="/login">
                    <Button
                      text="Sign In"
                      color="text-white"
                      borderRadius="rounded-2xl"
                      padding="p-3"
                      bgColor="bg-green-900"
                      width="w-full"
                      onClick={handleLogin}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* a div for the right side of the login page */}
        <div className="bg-gray-300 basis-1/2 w-full h-full overflow-hidden hidden md:block">
          <div className=" absolute inset-0 bg-black opacity-30"></div>
          <img
            src={LgIm}
            className="h-full w-full object-cover object-center "
          />
        </div>
      </div>
    </>
  );
};

export default LogInn;
