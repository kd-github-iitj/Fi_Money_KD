import React, { useEffect, useState } from 'react';
import { apiRequest } from '../api';
import { getAuth, clearAuth } from '../auth';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
import UpdateQuantityForm from './UpdateQuantityForm';

export default function UserDashboard({ onLogout }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showUpdate, setShowUpdate] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError('');
    const { token } = getAuth();
    const { status, data } = await apiRequest('/products?page=1&limit=100', 'GET', null, token);
    if (status === 200) {
      setProducts(data.products || []);
    } else {
      setError(data.message || 'Failed to fetch products');
    }
    setLoading(false);
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleAdd = async (product) => {
    const { token } = getAuth();
    const { status, data } = await apiRequest('/products', 'POST', product, token);
    if (status === 201) fetchProducts();
    else alert(data.message || 'Failed to add product');
  };

  const handleUpdate = (product) => setShowUpdate(product);

  const handleUpdateQuantity = async (id, quantity) => {
    const { token } = getAuth();
    const { status, data } = await apiRequest(`/products/${id}/quantity`, 'PUT', { quantity }, token);
    if (status === 200) fetchProducts();
    else alert(data.message || 'Failed to update quantity');
    setShowUpdate(null);
  };

  return (
    <div style={{ maxWidth: 900, margin: '30px auto', padding: 24 }}>
      <h2>User Dashboard</h2>
      <button onClick={() => { clearAuth(); onLogout(); }} style={{ float: 'right' }}>Logout</button>
      <AddProductForm onAdd={handleAdd} />
      {loading ? <div>Loading...</div> : error ? <div style={{ color: 'red' }}>{error}</div> : (
        <ProductList products={products} onUpdateQuantity={handleUpdate} />
      )}
      {showUpdate && (
        <UpdateQuantityForm product={showUpdate} onUpdate={handleUpdateQuantity} onCancel={() => setShowUpdate(null)} />
      )}
    </div>
  );
} 