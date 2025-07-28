import React from 'react';

export default function ProductList({ products, onUpdateQuantity }) {
  return (
    <div>
      <h3>Product List</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Price</th>
            {onUpdateQuantity && <th>Update</th>}
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.type}</td>
              <td>{product.sku}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              {onUpdateQuantity && (
                <td>
                  <button onClick={() => onUpdateQuantity(product)}>Update</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 