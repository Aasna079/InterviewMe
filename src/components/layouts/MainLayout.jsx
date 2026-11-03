import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../../styles/MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;