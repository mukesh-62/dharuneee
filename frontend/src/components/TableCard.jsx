export default function TableCard({ title, children }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}
