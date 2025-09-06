import React from 'react';
import Sidebar from "../dashboard-landing-page/components/Sidebar";
import AppImage from "../../components/AppImage";
import Icon from "../../components/AppIcon";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const DepartmentTab = () => {
  // Mock data
  const departments = [
    { id: 'DEP001', name: 'Sanitation', manager: 'Anil Kumar Sharma', employees: 12 },
    { id: 'DEP002', name: 'Road Maintenance', manager: 'Ajay Patel', employees: 8 },
    { id: 'DEP003', name: 'Electricity', manager: 'Shalini Mehta', employees: 10 },
    { id: 'DEP004', name: 'Waste Management', manager: 'Suman Jha', employees: 20 },
  ];

  const issueStats = [
    { name: 'Sanitation', Pending: 20, Resolved: 50, New: 10 },
    { name: 'Road Maintenance', Pending: 15, Resolved: 40, New: 5 },
    { name: 'Electricity', Pending: 10, Resolved: 60, New: 15 },
    { name: 'Waste Management', Pending: 25, Resolved: 30, New: 20 },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <main className="flex-1 p-10">
<h1 className="text-3xl font-bold text-foreground mb-6">Departments</h1>

        {/* Department Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {departments.map((dep) => (
            <div key={dep.id} className="bg-card p-6 rounded-lg shadow elevation-subtle flex flex-col space-y-3">
              <h2 className="text-xl font-semibold text-card-foreground">{dep.name}</h2>
              <p className="text-muted-foreground">Manager: {dep.manager}</p>
              <p className="text-muted-foreground">Employees: {dep.employees}</p>
              <div className="flex space-x-2 mt-3">
                <button className="px-3 py-1 bg-primary text-primary-foreground rounded hover:bg-primary-foreground hover:text-primary transition-smooth flex items-center space-x-1">
                  <Icon name="Eye" size={16} color="currentColor" />
                  <span>View</span>
                </button>
                <button className="px-3 py-1 bg-accent text-accent-foreground rounded hover:bg-accent-foreground hover:text-accent transition-smooth flex items-center space-x-1">
                  <Icon name="Edit" size={16} color="currentColor" />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Issue Stats Chart */}
        <div className="bg-card p-6 rounded-lg shadow elevation-subtle mb-10">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">Department Issue Statistics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={issueStats}>
              <XAxis dataKey="name" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip />
              <Bar dataKey="Pending" fill="var(--color-warning)" />
              <Bar dataKey="Resolved" fill="var(--color-success)" />
              <Bar dataKey="New" fill="var(--color-accent)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Employee Assignment Table */}
        <div className="bg-card p-6 rounded-lg shadow elevation-subtle">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">Employees per Department</h2>
          <table className="min-w-full border border-border">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="px-4 py-2 text-left">Department</th>
                <th className="px-4 py-2 text-left">Employee Name</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="px-4 py-2">Sanitation</td>
                <td className="px-4 py-2">Sunil Khanna</td>
                <td className="px-4 py-2">Worker</td>
                <td className="px-4 py-2">
                  <button className="px-3 py-1 bg-primary text-primary-foreground rounded hover:bg-primary-foreground hover:text-primary transition-smooth flex items-center space-x-1">
                    <Icon name="Eye" size={16} color="currentColor" />
                    <span>View</span>
                  </button>
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2">Road Maintenance</td>
                <td className="px-4 py-2">Deepak Joshi</td>
                <td className="px-4 py-2">Supervisor</td>
                <td className="px-4 py-2">
                  <button className="px-3 py-1 bg-primary text-primary-foreground rounded hover:bg-primary-foreground hover:text-primary transition-smooth flex items-center space-x-1">
                    <Icon name="Eye" size={16} color="currentColor" />
                    <span>View</span>
                  </button>
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2">Electricity</td>
                <td className="px-4 py-2">Ramesh Choudhary</td>
                <td className="px-4 py-2">Supervisor</td>
                <td className="px-4 py-2">
                  <button className="px-3 py-1 bg-primary text-primary-foreground rounded hover:bg-primary-foreground hover:text-primary transition-smooth flex items-center space-x-1">
                    <Icon name="Eye" size={16} color="currentColor" />
                    <span>View</span>
                  </button>
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2">Waste Management</td>
                <td className="px-4 py-2">Arjun Nair</td>
                <td className="px-4 py-2">Inspector</td>
                <td className="px-4 py-2">
                  <button className="px-3 py-1 bg-primary text-primary-foreground rounded hover:bg-primary-foreground hover:text-primary transition-smooth flex items-center space-x-1">
                    <Icon name="Eye" size={16} color="currentColor" />
                    <span>View</span>
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DepartmentTab;
