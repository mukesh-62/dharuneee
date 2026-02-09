export default function OrderCard({ order }) {
  return (
    <div className="p-4 bg-white shadow rounded-lg border hover:shadow-lg transition">
      <p className="text-sm text-gray-500">{order.date}</p>
      <h2 className="text-lg font-semibold">{order.patient}</h2>
      <p className="text-blue-600 font-bold">{order.modality}</p>
      <p className="text-gray-700 mt-2">Status: {order.status}</p>
    </div>
  );
}
