import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../../styles/dashboard-layout.css";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;