export default function StatusBadge({ status }) {
  const colors = {
    Processed: "bg-green-100 text-green-700",
    Error: "bg-red-100 text-red-700",
    Queued: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span className={`px-3 py-1 text-sm rounded-full font-medium ${colors[status]}`}>
      {status}
    </span>
  );
}
