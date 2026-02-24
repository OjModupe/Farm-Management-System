import FarmerDash from "../components/Admin/Dashboard";
import AdminDash from "../components/Farmer/Dashboard";
import PageHeader from "../shared/PageHeader";
import VetDash from "../components/Veterinarian/Dashboard";

interface PageHeaderProps {
  title: string;
  description: string;
}
const Dashboard = () => {
  const role = localStorage.getItem("role");

  const renderDashboard = () => {
    if (role === "Farmer") {
      return <FarmerDash />;
    } else if (role === "Admin") {
      return <AdminDash />;
    } else {
      return <VetDash />;
    }
  };

  return (
    <div className="bg-green-50">
      <div className="pt-7">
        <PageHeader
          title="Dashboard Overview"
          description="Monitor your farm's performance and analytics"
        />
      </div>
      <div className="pt-5">{renderDashboard()}</div>
    </div>
  );
};

export default Dashboard;
