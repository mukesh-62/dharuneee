import { useEffect, useState } from "react";
import api from "../api/axiosInstance";
import Layout from "../components/Layout";
import TableCard from "../components/TableCard";
import Modal from "../components/Modal";

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    patient: "",
    modality: "",
    status: "Finalized"
  });

  const loadReports = () => {
    api.get("/reports").then(res => setReports(res.data));
  };

  useEffect(() => {
    loadReports();
  }, []);

  const submitReport = () => {
    api.post("/reports", form).then(() => {
      setOpen(false);
      loadReports();
    });
  };

  return (
    <Layout>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Reports</h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          + Add Report
        </button>
      </div>

      <TableCard title="Radiology Reports">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3">ID</th>
              <th className="p-3">Patient</th>
              <th className="p-3">Modality</th>
              <th className="p-3">Status</th>
              <th className="p-3">Timestamp</th>
            </tr>
          </thead>

          <tbody>
            {reports.map(r => (
              <tr key={r.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{r.id}</td>
                <td className="p-3">{r.patient}</td>
                <td className="p-3">{r.modality}</td>
                <td className="p-3 text-green-700">{r.status}</td>
                <td className="p-3">{r.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>

      <Modal open={open} onClose={() => setOpen(false)} title="Add Report">
        <input
          className="w-full border p-2 rounded mb-2"
          placeholder="Patient Name"
          onChange={(e) => setForm({ ...form, patient: e.target.value })}
        />

        <input
          className="w-full border p-2 rounded mb-2"
          placeholder="Modality"
          onChange={(e) => setForm({ ...form, modality: e.target.value })}
        />

        <button
          onClick={submitReport}
          className="bg-blue-600 text-white w-full py-2 rounded mt-2"
        >
          Save Report
        </button>
      </Modal>
    </Layout>
  );
}
