import { useEffect, useState } from "react";
import api from "../api/axiosInstance";
import Layout from "../components/Layout";
import ChartCard from "../components/ChartCard";
import Modal from "../components/Modal";
import { BarChart, Bar, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

export default function SystemHealth() {
  const [traffic, setTraffic] = useState([]);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    hour: "",
    messages: ""
  });

  const loadTraffic = () => {
    api.get("/system/traffic").then(res => setTraffic(res.data));
  };

  useEffect(() => {
    loadTraffic();
  }, []);

  const submitTraffic = () => {
    api.post("/system/traffic", {
      hour: form.hour,
      messages: Number(form.messages),
    }).then(() => {
      setOpen(false);
      loadTraffic();
    });
  };

  return (
    <Layout>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">System Health</h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          + Add Traffic Entry
        </button>
      </div>

      <ChartCard title="HL7 Traffic">
        <BarChart width={700} height={300} data={traffic}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="messages" fill="#007bff" />
        </BarChart>
      </ChartCard>

      <Modal open={open} onClose={() => setOpen(false)} title="Add Traffic Data">
        <input
          className="w-full border p-2 rounded mb-2"
          placeholder="Hour (e.g., 10:00)"
          onChange={(e) => setForm({ ...form, hour: e.target.value })}
        />
        <input
          className="w-full border p-2 rounded mb-2"
          placeholder="Messages Count"
          onChange={(e) => setForm({ ...form, messages: e.target.value })}
        />

        <button
          onClick={submitTraffic}
          className="bg-blue-600 text-white w-full py-2 rounded mt-2"
        >
          Save Entry
        </button>
      </Modal>
    </Layout>
  );
}
