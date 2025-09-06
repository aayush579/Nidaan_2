import React from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/employee-login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 flex items-center space-x-3">
        <AppImage
          src="/WhatsApp_Image_2025-09-01_at_23.01.47_1a7b7201-1757006885467.jpg"
          alt="NIDAAN Logo"
          className="h-8 w-auto object-contain"
        />
        <span className="text-lg font-semibold text-gray-900">NIDAAN</span>
      </div>

      {/* Profile */}
      <div
        className="p-6 border-b border-gray-200 flex items-center space-x-3 cursor-pointer"
        onClick={() => navigate('/profile')} // Navigate to profile page
      >
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <Icon name="User" size={20} color="#4f46e5" />
        </div>
        <div>
          <p className="font-medium text-gray-900">EMP0001</p>
          <p className="text-sm text-gray-500">Admin</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => navigate('/dashboard')}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition ${
                isActive('/dashboard')
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon name="LayoutDashboard" size={20} color={isActive('/dashboard') ? '#2563eb' : 'currentColor'} />
              <span>Dashboard</span>
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate('/browse-issues')}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition ${
                isActive('/browse-issues')
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon name="AlertCircle" size={20} color={isActive('/browse-issues') ? '#2563eb' : 'currentColor'} />
              <span>Browse Issues</span>
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate('/analytics')}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition ${
                isActive('/analytics')
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon name="BarChart2" size={20} color={isActive('/analytics') ? '#2563eb' : 'currentColor'} />
              <span>Analytics</span>
            </button>
          </li>
          <li>
  <button
    onClick={() => navigate('/departments')}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition ${
      isActive('/departments')
        ? 'bg-blue-100 text-blue-600'
        : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    <Icon name="Grid" size={20} color={isActive('/departments') ? '#2563eb' : 'currentColor'} />
    <span>Departments</span>
  </button>
</li>

        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 w-full text-left"
          onClick={handleLogout}
        >
          <Icon name="LogOut" size={20} color="currentColor" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
