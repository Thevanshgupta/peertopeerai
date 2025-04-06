import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const styles = {
    dashboard: {
      width: '100%',
      minHeight: '100vh',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f5f6fa',
      fontFamily: 'Arial, sans-serif',
      color: '#2c3e50',
    },
    header: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '30px',
      textAlign: 'center',
    },
    cardContainer: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
      alignItems: 'center',
      justifyItems: 'center',
    },
    card: {
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      padding: '30px',
      textAlign: 'center',
      width: '100%',
      maxWidth: '350px',
    },
    cardTitle: {
      fontSize: '22px',
      fontWeight: '600',
      marginBottom: '20px',
    },
    button: {
      padding: '14px 28px',
      fontSize: '18px',
      backgroundColor: '#0984e3',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    buttonHover: {
      backgroundColor: '#74b9ff',
    },
  };

  return (
    <div style={styles.dashboard}>
      <div style={styles.header}>Admin Dashboard</div>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <div style={styles.cardTitle}>View All Users</div>
          <button style={styles.button} onClick={() => navigate('/admin/users')}>
            Go to Users
          </button>
        </div>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Add New User</div>
          <button style={styles.button} onClick={() => navigate('/admin/add-user')}>
            Go to Add User
          </button>
        </div>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Peer to Peer Overview</div>
          <button style={styles.button} onClick={() => navigate('/admin/peers')}>
            Go to Peers
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


