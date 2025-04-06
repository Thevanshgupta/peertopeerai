import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      padding: '40px 20px',
      backgroundColor: '#f5f6fa',
      fontFamily: 'Arial, sans-serif',
      color: '#2c3e50',
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
      marginBottom: '30px',
      textAlign: 'center',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      borderRadius: '8px',
      overflow: 'hidden',
    },
    th: {
      backgroundColor: '#0984e3',
      color: 'white',
      padding: '15px',
      textAlign: 'left',
    },
    td: {
      padding: '15px',
      borderBottom: '1px solid #ddd',
    },
    row: {
      transition: 'background-color 0.2s',
    },
    rowHover: {
      backgroundColor: '#f1f2f6',
    },
    loading: {
      textAlign: 'center',
      fontSize: '18px',
      marginTop: '40px',
    }
  };

  useEffect(() => {
    axios
      .get('http://localhost:5300/api/v1/admin/users')
      .then((res) => {
        if (res.data.status === true) {
          setUsers(res.data.message); // assuming response has users
        } else {
          console.error('Failed to fetch users');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.title}>All Registered Users</div>
      {loading ? (
        <div style={styles.loading}>Loading users...</div>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} style={styles.row}>
                <td style={styles.td}>{index + 1}</td>
                <td style={styles.td}>{user.name}</td>
                <td style={styles.td}>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewUsers;

