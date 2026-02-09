export default function StatCard({ label, value }) {
  return (
    <div className="card">
      <p className="text-gray-500 text-sm">{label}</p>
      <h2 className="text-3xl font-bold text-gray-800">{value}</h2>
    </div>
  );
}
