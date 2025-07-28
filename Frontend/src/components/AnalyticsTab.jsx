import React, { useEffect, useState } from 'react';
import { apiRequest } from '../api';
import { getAuth } from '../auth';

export default function AnalyticsTab() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAnalytics = async () => {
      setLoading(true);
      setError('');
      const { token } = getAuth();
      const { status, data } = await apiRequest('/analytics/most-added-products', 'GET', null, token);
      if (status === 200) {
        setProducts(data);
      } else {
        setError(data.message || 'Failed to fetch analytics');
      }
      setLoading(false);
    };
    fetchAnalytics();
  }, []);

  return (
    <div style={{ marginTop: 24 }}>
      <h3>Top 5 Products by Quantity</h3>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div style={{ color: 'red' }}>{error}</div>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i}>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
} 