import React from 'react';
import Sidebar from '../dashboard-landing-page/components/Sidebar';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

const Analytics = () => {
  // Sample data
  const reportStatusData = [
    { name: 'Pending', value: 75 },
    { name: 'Resolved', value: 150 },
    { name: 'New', value: 25 },
  ];

  const reportColors = ['#f59e0b', '#10b981', '#3b82f6']; // Yellow, Green, Blue

  const weeklyVolumeData = [
    { week: 'Week 1', Pending: 20, Resolved: 50, New: 10 },
    { week: 'Week 2', Pending: 15, Resolved: 40, New: 5 },
    { week: 'Week 3', Pending: 25, Resolved: 30, New: 7 },
    { week: 'Week 4', Pending: 15, Resolved: 30, New: 3 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-10 py-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Analytics</h2>
          <p className="text-gray-500 mb-8">Overview of key metrics and trends.</p>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-sm text-gray-500">Pending Reports</h3>
              <p className="text-2xl font-bold text-yellow-500">{reportStatusData[0].value}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-sm text-gray-500">Resolved Reports</h3>
              <p className="text-2xl font-bold text-green-500">{reportStatusData[1].value}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-sm text-gray-500">New Reports</h3>
              <p className="text-2xl font-bold text-blue-500">{reportStatusData[2].value}</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart */}
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Reports Status Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={reportStatusData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {reportStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={reportColors[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Weekly Volume</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={weeklyVolumeData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Pending" stackId="a" fill="#f59e0b" />
                  <Bar dataKey="Resolved" stackId="a" fill="#10b981" />
                  <Bar dataKey="New" stackId="a" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
