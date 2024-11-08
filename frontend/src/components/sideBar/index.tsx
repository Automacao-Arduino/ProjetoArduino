import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-fit h-screen bg-red-700 text-white p-12">
      <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a>
          </li>
          <li>
            <a href="#profile" className="block py-2 px-4 rounded hover:bg-gray-700">Profile</a>
          </li>
          <li>
            <a href="#settings" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</a>
          </li>
          <li>
            <a href="#logout" className="block py-2 px-4 rounded hover:bg-gray-700">Logout</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
