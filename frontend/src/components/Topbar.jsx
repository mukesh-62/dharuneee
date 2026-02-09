import { User } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <span className="text-lg font-semibold text-gray-700">Radiology Information System</span>

      <div className="flex items-center gap-4">
        <span className="text-gray-500 text-sm">Admin User</span>
        <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
          <User size={18}/>
        </div>
      </div>
    </div>
  );
}
