import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full">
        <Topbar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
