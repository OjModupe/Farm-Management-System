import React from "react";
import FarmerDash from "../components/Admin/Dashboard";
import AdminDash from "../components/Farmer/Dashboard";

const Dashboard = () => {
  const role = localStorage.getItem("role");
  return <div>{role === "Farmer" ? <FarmerDash /> : <AdminDash />}</div>;
};

export default Dashboard;
