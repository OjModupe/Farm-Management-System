import { Route, Routes } from "react-router-dom";
import Crops from "./pages/Crops";
import Dashboard from "./pages/Dashboard";
import Equipment from "./pages/Equipment";
import Financial from "./pages/Financial";
import Inventory from "./pages/Inventory";
import Livestock from "./pages/Livestock";
import LogInn from "./pages/LogInn";
import SignIn from "./pages/SignIn";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import PageLayout from "./layouts/PageLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LogInn />} />
        <Route path="/signup" element={<SignIn />} />

        <Route element={<PageLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/livestock" element={<Livestock />} />
          <Route path="/loginn" element={<LogInn />} />
          <Route path="/signup" element={<SignIn />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
