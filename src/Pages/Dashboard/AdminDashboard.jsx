import React, { useState } from 'react';
import './AdminDashboard.css';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell, Legend
} from 'recharts';

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard');

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
  const COLORS = ['#FFBB28', '#00C49F'];

  const barData = [
    { name: 'Jan', sales: 30000 },
    { name: 'Feb', sales: 50000 },
    { name: 'Mar', sales: 70000 },
    { name: 'Apr', sales: 40000 },
    { name: 'May', sales: 60000 },
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <img src="data:image/jpeg;base64,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" alt="Admin DP" className="profile-pic" />
        <div className="profile">
          <h2>Hifza</h2>
          <p>hifza@gmail.com</p>
        </div>
        <nav className="nav-links">
          <button onClick={() => setSelectedSection('dashboard')}>Dashboard</button>
          <button onClick={() => setSelectedSection('users')}>Registered Users</button>
          <button onClick={() => setSelectedSection('products')}>Total Products</button>
          <button onClick={() => setSelectedSection('sales')}>Sales</button>
        </nav>
      </aside>

      <main className="main-dashboard">
        {selectedSection === 'dashboard' && (
          <div className="top-cards">
            <div className="card"><h4>Earnings</h4><p>$628</p></div>
            <div className="card"><h4>Total Users</h4><p>{users.length}</p></div>
            <div className="card"><h4>Total Products</h4><p>{products.length}</p></div>
            <div className="card"><h4>Rating</h4><p>8.5</p></div>
          </div>
        )}

        {selectedSection === 'users' && (
          <div className="user-management">
            <h3>Registered Users</h3>
            <table>
              <thead>
                <tr><th>Name</th><th>Email</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button>Edit</button>
                      <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedSection === 'products' && (
          <div className="product-section">
            <h3>Total Products</h3>
            <ul>
              {products.map(p => (
                <li key={p.id}>{p.name} - {p.sold ? 'Sold' : 'Unsold'}</li>
              ))}
            </ul>
          </div>
        )}

        {selectedSection === 'sales' && (
          <div className="charts-section">
            <div className="chart-box">
              <h3>Monthly Sales</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-box">
              <h3>Product Status</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
