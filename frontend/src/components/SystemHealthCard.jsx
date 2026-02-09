export default function SystemHealthCard({ health }) {
  return (
    <div className="p-6 bg-white border shadow rounded-xl space-y-2">
      <p>PACS: <span className="font-semibold text-blue-600">{health.pacs}</span></p>
      <p>HL7 Engine: <span className="font-semibold text-blue-600">{health.hl7_status}</span></p>
      <p>Queue Depth: <span className="font-semibold text-blue-600">{health.queue_depth}</span></p>
      <p>Last Message: <span className="font-semibold">{health.last_message}</span></p>
    </div>
  );
}
