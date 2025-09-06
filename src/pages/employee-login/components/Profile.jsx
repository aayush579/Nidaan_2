import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../dashboard-landing-page/components/Sidebar';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

const Profile = () => {
  const navigate = useNavigate();

  // Mock employee data
  const [employee, setEmployee] = useState({
    id: 'EMP0001',
    name: 'Admin User',
    email: 'admin@nidaan.com',
    role: 'Administrator',
    department: 'IT',
    avatar: '/WhatsApp_Image_2025-09-01_at_23.01.47_1a7b7201-1757006885467.jpg',
    activity: [
      { id: 1, action: 'Resolved Issue #101', date: '2025-09-01' },
      { id: 2, action: 'Reported Issue #102', date: '2025-09-02' },
      { id: 3, action: 'Updated profile info', date: '2025-09-03' },
    ],
    assignedIssues: [
      { id: 201, title: 'Water leakage in sector 5', status: 'Pending' },
      { id: 202, title: 'Road pothole near main gate', status: 'Resolved' },
    ],
    stats: {
      totalReports: 50,
      resolved: 30,
      pending: 20,
    },
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...employee });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setEmployee(formData);
    setEditMode(false);
  };

  const handleExport = () => {
    const data = JSON.stringify(employee, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${employee.id}_profile.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow space-y-8">
          {/* Header */}
          <div className="flex items-center space-x-6">
            <AppImage
              src={employee.avatar}
              alt={employee.name}
              className="w-24 h-24 rounded-full object-cover border border-gray-200"
            />
            <div className="flex-1">
              {editMode ? (
                <div className="space-y-2">
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <Input
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <Input
                    label="Role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                  />
                  <Input
                    label="Department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                  />
                  <div className="flex space-x-2 mt-2">
                    <Button onClick={handleSave} variant="default">Save</Button>
                    <Button onClick={() => setEditMode(false)} variant="secondary">Cancel</Button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-800">{employee.name}</h2>
                  <p className="text-gray-500">{employee.role}</p>
                  <p className="text-gray-500">{employee.department}</p>
                  <div className="flex space-x-2 mt-2">
                    <Button onClick={() => setEditMode(true)} variant="default" iconName="Edit2">Edit Profile</Button>
                    <Button onClick={handleExport} variant="secondary" iconName="Download">Export</Button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Employee Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-500">Total Reports</p>
              <p className="text-2xl font-bold text-blue-600">{employee.stats.totalReports}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-gray-500">Resolved</p>
              <p className="text-2xl font-bold text-green-600">{employee.stats.resolved}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-gray-500">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">{employee.stats.pending}</p>
            </div>
          </div>

          {/* Assigned Issues */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Assigned Issues</h3>
            <ul className="space-y-2">
              {employee.assignedIssues.map((issue) => (
                <li
                  key={issue.id}
                  className="flex justify-between px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  <span>{issue.title}</span>
                  <span className={`font-medium ${issue.status === 'Resolved' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {issue.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Activity Feed */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Activity</h3>
            <ul className="space-y-1">
              {employee.activity.map((act) => (
                <li key={act.id} className="flex justify-between px-4 py-2 border rounded-lg hover:bg-gray-50">
                  <span>{act.action}</span>
                  <span className="text-gray-400">{act.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Dashboard */}
          <div className="flex justify-end">
            <Button onClick={() => navigate('/dashboard')} variant="default">Back to Dashboard</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
