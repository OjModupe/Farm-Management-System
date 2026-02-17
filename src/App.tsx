import { Route, Routes } from "react-router-dom";
import Crops from "./pages/Crops";
import Dashboard from "./pages/Dashboard";
import Equipment from "./pages/Equipment";
import Financial from "./pages/Financial";
import Inventory from "./pages/Inventory";
import Livestock from "./pages/Livestock";
import LoginComponents from "./components/Login/LoginComponents";
import Tasks from "./pages/Tasks";
import SigninComponnents from "./components/Signin/SigninComponents";
import Users from "./pages/Users";
import PageLayout from "./layouts/PageLayout";
import Production from "./pages/Production";
import Analytics from "./pages/Analytics";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginComponents />} />
        <Route path="/signup" element={<SigninComponnents />} />

        <Route element={<PageLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/production" element={<Production />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/inventory" element={<Inventory />} />
          <Route path="/livestock" element={<Livestock />} />
          <Route path="/login" element={<LoginComponents />} />
          <Route path="/signup" element={<SigninComponnents />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
