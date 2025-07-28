import React, { useState } from 'react';

const initialState = {
  name: '',
  type: '',
  sku: '',
  image_url: '',
  description: '',
  quantity: '',
  price: '',
};

export default function AddProductForm({ onAdd }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const valid = form.name && form.type && form.sku && form.quantity && form.price;
    if (!valid) {
      setError('Please fill all required fields.');
      setLoading(false);
      return;
    }
    await onAdd({ ...form, quantity: Number(form.quantity), price: Number(form.price) });
    setForm(initialState);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <h3>Add Product</h3>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} style={{ marginRight: 8 }} />
      <input name="type" placeholder="Type" value={form.type} onChange={handleChange} style={{ marginRight: 8 }} />
      <input name="sku" placeholder="SKU" value={form.sku} onChange={handleChange} style={{ marginRight: 8 }} />
      <input name="image_url" placeholder="Image URL" value={form.image_url} onChange={handleChange} style={{ marginRight: 8 }} />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} style={{ marginRight: 8 }} />
      <input name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleChange} style={{ marginRight: 8, width: 80 }} />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} style={{ marginRight: 8, width: 80 }} />
      <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Product'}</button>
      {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
    </form>
  );
} 