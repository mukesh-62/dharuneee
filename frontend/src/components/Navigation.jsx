import { NavLink } from "react-router-dom";
import { Home, List, FileSearch, FileText, Activity, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const link =
    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition";
  const active =
    "bg-blue-600 text-white shadow hover:bg-blue-700";

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-300">
          Radiology Dashboard
        </h1>

        <nav className="flex gap-4">
          <NavLink to="/" className={({ isActive }) => (isActive ? `${link} ${active}` : link)}>
            <Home size={16}/> Home
          </NavLink>
          <NavLink to="/orders" className={({ isActive }) => (isActive ? `${link} ${active}` : link)}>
            <List size={16}/> Orders
          </NavLink>
          <NavLink to="/messages" className={({ isActive }) => (isActive ? `${link} ${active}` : link)}>
            <FileSearch size={16}/> Messages
          </NavLink>
          <NavLink to="/reports" className={({ isActive }) => (isActive ? `${link} ${active}` : link)}>
            <FileText size={16}/> Reports
          </NavLink>
          <NavLink to="/system-health" className={({ isActive }) => (isActive ? `${link} ${active}` : link)}>
            <Activity size={16}/> System Health
          </NavLink>
        </nav>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white"
        >
          {dark ? <Sun size={18}/> : <Moon size={18}/>}
        </button>
      </div>
    </header>
  );
}
