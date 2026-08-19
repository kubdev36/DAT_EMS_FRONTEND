import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { isMobile } from "react-device-detect";

import Header from "../Header/Header";
import SidebarPrj from "../Screen/Project/SidebarPrj/SidebarPrj";
import "./Layout.scss";

export default function ProjectLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  return (
    <div
      className={
        isMobile
          ? "layoutMobile"
          : `layout ${sidebarCollapsed ? "layout-collapsed" : ""}`
      }
    >
      <SidebarPrj collapsed={sidebarCollapsed} onToggle={toggleSidebar} />

      <div className={isMobile ? "layoutMobile-main" : "layout-main"}>
        <Header onMenuToggle={toggleSidebar} />

        <main className={isMobile ? "layoutMobile-content" : "layout-content"}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
