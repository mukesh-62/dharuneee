import { NavLink } from "react-router-dom";
import { Home, ClipboardList, Inbox, FileText, Activity } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-5 fixed">
      <h1 className="text-2xl font-bold text-blue-700 mb-8">Radiology Dashboard</h1>

      <nav className="flex flex-col space-y-2">
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "sidebar-link sidebar-link-active" : "sidebar-link"
          }
        >
          <Home size={20} /> Home
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive ? "sidebar-link sidebar-link-active" : "sidebar-link"
          }
        >
          <ClipboardList size={20} /> Orders
        </NavLink>

        <NavLink
          to="/messages"
          className={({ isActive }) =>
            isActive ? "sidebar-link sidebar-link-active" : "sidebar-link"
          }
        >
          <Inbox size={20} /> HL7 Messages
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? "sidebar-link sidebar-link-active" : "sidebar-link"
          }
        >
          <FileText size={20} /> Reports
        </NavLink>

        <NavLink
          to="/system-health"
          className={({ isActive }) =>
            isActive ? "sidebar-link sidebar-link-active" : "sidebar-link"
          }
        >
          <Activity size={20} /> System Health
        </NavLink>

      </nav>
    </div>
  );
}
