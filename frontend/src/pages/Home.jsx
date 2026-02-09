import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const sampleData = [
  { name: "Mon", value: 200 },
  { name: "Tue", value: 320 },
  { name: "Wed", value: 280 },
  { name: "Thu", value: 330 },
  { name: "Fri", value: 380 },
];

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard label="Orders Today" value="128" />
        <StatCard label="HL7 Messages" value="4,892" />
        <StatCard label="Reports Finalized" value="91" />
        <StatCard label="Errors / Warnings" value="12" />
      </div>

      <ChartCard title="HL7 Message Traffic">
        <LineChart width={700} height={300} data={sampleData}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <CartesianGrid stroke="#eee"/>
          <Line type="monotone" dataKey="value" stroke="#007bff" strokeWidth={3}/>
        </LineChart>
      </ChartCard>
    </Layout>
  );
}
