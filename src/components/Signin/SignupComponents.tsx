import Button from "../../shared/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ImLeaf } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import SuIm from "../../assets/image 18.png";

const SigninComponnents = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const [openModal, setOpenModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    // if (role === "Farmer") {
    //   navigate("");
    // } else if (role === "Admin") {
    //   navigate("");
    // } else if (role === "Manager") {
    //   navigate("");
    // } else {
    //   alert("Please select role");
    // }

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    localStorage.setItem("role", role);
    console.log("role set about to navigate");
    navigate("/");

    // if (
    //   name === "" ||
    //   email === "" ||
    //   password === "" ||
    //   confirmPassword === ""
    // ) {
    //   toast.error("Please fill all input fields");
    //   return;
    // }
  };

  return (
    <div className="min h-screen flex flex-col w-full md:flex-row">
      <div className="relative bg-gray-300 basis-1/2 w-full h-full overflow-hidden hidden md:block">
        {/* This is a div for the left part of the signup, it contains a background image */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="h-full object-cover">
          <img
            src={SuIm}
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute bottom-7 left-10 w-full flex flex-col gap-2 p-6 z-10 ">
            <h1 className="text-white text-xl font-bold">Join Smart Farm</h1>
            <h1 className="text-white">
              Start managing your farm efficiently with cutting-edge technology
            </h1>
          </div>
        </div>
      </div>

      {/* this div is for the right side containing the card and signup details */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-green-50 p-4">
        {/* Card Div */}
        <div className="p-6 w-full max-w-md rounded-2xl bg-white">
          <div className="items-center p-2 flex flex-col">
            <div className="text-4xl border p-5 rounded-2xl text-white bg-green-900">
              <ImLeaf />
            </div>

            <div className="space-y-3 text-center text-xl">
              <div className="pt-3">
                <h1>Create Account</h1>
              </div>
              <h2 className="text-green-800">
                Signup for a new SmartFarm acccount
              </h2>
            </div>

            {/* Login input field */}
            <div className="w-full gap-5 flex flex-col">
              <div className="pt-2">
                <label>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="p-2 rounded-2xl border w-full text-gray-400 bg-green-50"
                />
              </div>

              <div className="">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@example.com"
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

              <div className="">
                <label>Confirm Password</label>
                <input
                  type="text"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="........"
                  className="p-2 rounded-2xl border w-full text-gray-400 bg-green-50"
                />
              </div>

              <div className="relative">
                <label>Register as</label>

                <div
                  onClick={() => setOpenModal(!openModal)}
                  className="p-2 rounded-2xl border border-gray-400  w-full bg-green-50 flex justify-between items-center cursor-pointer"
                >
                  <span className={role ? "text-black" : "text-gray-400"}>
                    {role || "Farmer"}
                  </span>

                  <IoIosArrowDown className="text-gray-500 text-xl" />
                </div>

                {/* Dropdown  */}
                {openModal && (
                  <div className="absolute left-0 mt-2 w-full bg-white shadow-md rounded-lg z-50">
                    {["Farmer", "Admin", "Veterinarian"].map((item) => (
                      <div
                        key={item}
                        onClick={(e) => {
                          e.stopPropagation();
                          setRole(item);
                          setOpenModal(false);
                        }}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-5 flex gap-4 flex-col">
                {/* <Link to="/"> */}
                <Button
                  text="Create Account"
                  color="text-white"
                  borderRadius="rounded-2xl"
                  padding="p-3"
                  bgColor="bg-green-900"
                  width="w-full"
                  onClick={handleSignup}
                />
                {/* </Link> */}
              </div>
              <div className="flex gap-2 items-center justify-center">
                <h1 className="text-green-900 ">Already have an account?</h1>
                <Link to="/login">
                  <h1 className="text-green-900"> Sign in</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninComponnents;
