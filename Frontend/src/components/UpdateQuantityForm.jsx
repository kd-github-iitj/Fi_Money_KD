import React, { useState } from 'react';

export default function UpdateQuantityForm({ product, onUpdate, onCancel }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await onUpdate(product._id, Number(quantity));
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16, background: '#f9f9f9', padding: 12, borderRadius: 6 }}>
      <strong>Update Quantity for {product.name}:</strong>
      <input
        type="number"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
        style={{ marginLeft: 8, width: 80 }}
      />
      <button type="submit" disabled={loading} style={{ marginLeft: 8 }}>
        {loading ? 'Updating...' : 'Update'}
      </button>
      <button type="button" onClick={onCancel} style={{ marginLeft: 8 }}>
        Cancel
      </button>
    </form>
  );
} 