import { useEffect, useState } from "react";
import api from "../api/axiosInstance";
import Layout from "../components/Layout";
import TableCard from "../components/TableCard";
import Modal from "../components/Modal";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const loadMessages = () => {
    api.get("/messages").then(res => setMessages(res.data));
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const submitMessage = () => {
    api.post("/messages", { message }).then(() => {
      setOpen(false);
      loadMessages();
    });
  };

  return (
    <Layout>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">HL7 Messages</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          + Add HL7 Message
        </button>
      </div>

      <TableCard title="HL7 Message Log">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3">ID</th>
              <th className="p-3">Message</th>
              <th className="p-3">Timestamp</th>
            </tr>
          </thead>

          <tbody>
            {messages.map(m => (
              <tr key={m.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{m.id}</td>
                <td className="p-3">{m.message}</td>
                <td className="p-3">{m.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>

      <Modal open={open} onClose={() => setOpen(false)} title="Add HL7 Message">
        <textarea
          className="w-full border p-2 rounded mb-2 h-32"
          placeholder="Paste HL7 message..."
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={submitMessage}
          className="bg-blue-600 text-white w-full py-2 rounded mt-2"
        >
          Save Message
        </button>
      </Modal>
    </Layout>
  );
}
