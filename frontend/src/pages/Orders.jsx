import { useEffect, useState } from "react";
import api from "../api/axiosInstance";
import Layout from "../components/Layout";
import TableCard from "../components/TableCard";
import Modal from "../components/Modal";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    patient: "",
    modality: "",
    status: "",
  });

  const loadOrders = () => {
    api.get("/orders").then(res => setOrders(res.data));
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const submitOrder = () => {
    api.post("/orders", form).then(() => {
      setOpen(false);
      loadOrders();
    });
  };

  return (
    <Layout>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          + Add Order
        </button>
      </div>

      <TableCard title="Active Radiology Orders">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3">Order ID</th>
              <th className="p-3">Patient</th>
              <th className="p-3">Modality</th>
              <th className="p-3">Status</th>
              <th className="p-3">Timestamp</th>
            </tr>
          </thead>

          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.patient}</td>
                <td className="p-3">{order.modality}</td>
                <td className="p-3">{order.status}</td>
                <td className="p-3">{order.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>

      <Modal open={open} onClose={() => setOpen(false)} title="Add New Order">
        <input
          className="w-full border p-2 rounded mb-2"
          placeholder="Patient Name"
          onChange={(e) => setForm({ ...form, patient: e.target.value })}
        />
        <input
          className="w-full border p-2 rounded mb-2"
          placeholder="Modality (CT/MRI/X-Ray)"
          onChange={(e) => setForm({ ...form, modality: e.target.value })}
        />
        <input
          className="w-full border p-2 rounded mb-2"
          placeholder="Status"
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        />

        <button
          onClick={submitOrder}
          className="bg-blue-600 text-white w-full py-2 rounded mt-2"
        >
          Save
        </button>
      </Modal>
    </Layout>
  );
}
