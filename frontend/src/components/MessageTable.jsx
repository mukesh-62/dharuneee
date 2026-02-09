import StatusBadge from "./StatusBadge";

export default function MessageTable({ messages }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow border">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="py-2">ID</th>
            <th>Type</th>
            <th>Status</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr className="border-b" key={msg.id}>
              <td className="py-2">{msg.id}</td>
              <td>{msg.type}</td>
              <td><StatusBadge status={msg.status} /></td>
              <td>{msg.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
