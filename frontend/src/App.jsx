import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Messages from "./pages/Messages";
import Reports from "./pages/Reports";
import SystemHealth from "./pages/SystemHealth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/system-health" element={<SystemHealth />} />
      </Routes>
    </BrowserRouter>
  );
}
