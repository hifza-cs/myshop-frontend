// AdminDashboard.jsx
import React, { useState } from 'react';
import './AdminDashboard.css';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Fatima Khan', email: 'fatima@example.com' },
    { id: 2, name: 'Ayesha Noor', email: 'ayesha@example.com' },
    { id: 3, name: 'Zara Ali', email: 'zara@example.com' },
  ]);

  const [products] = useState([
    { id: 1, name: 'Handmade Earrings', sold: true },
    { id: 2, name: 'Organic Soap', sold: false },
    { id: 3, name: 'Embroidered Scarf', sold: true },
  ]);

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const pieData = [
    { name: 'Sold', value: products.filter(p => p.sold).length },
    { name: 'Unsold', value: products.filter(p => !p.sold).length },
  ];
  const COLORS = ['#4CAF50', '#F44336'];

  const barData = [
    { name: 'Jan', sales: 30000 },
    { name: 'Feb', sales: 50000 },
    { name: 'Mar', sales: 70000 },
    { name: 'Apr', sales: 40000 },
    { name: 'May', sales: 60000 },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaT1gI3Wb_XPFotSsKuCm6CCevBRGU0lhVdA&s"
            alt="Profile"
            className="profile-pic"
          />
          <h2>Hifza</h2>
          <p>Admin</p>
        </div>

        {/* Graph summaries */}
        <div className="graphs-summary">
          <h3>Sales Over Months</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={barData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#1976d2" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <h3>Product Status</h3>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </aside>

      {/* Main content area */}
      <main className="main-dashboard">
        <div className="top-cards">
          <div className="card">
            <h4>Total Users</h4>
            <p>{users.length}</p>
          </div>
          <div className="card">
            <h4>Total Products</h4>
            <p>{products.length}</p>
          </div>
          <div className="card">
            <h4>Sold Products</h4>
            <p>{products.filter(p => p.sold).length}</p>
          </div>
        </div>

        <section className="user-management">
          <h3>Registered Users</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center' }}>No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
