// src/components/VendedorInfo.tsx

import React from 'react';

interface Vendedor {
  name: string;
  sales: number;
  clients: number;
  target: number;
}

const VendedorInfo = ({ vendedor }: { vendedor: Vendedor }) => {
  const percentage = (vendedor.sales / vendedor.target) * 100;

  return (
    <div className="vendedor-card">
      <h3>{vendedor.name}</h3>
      <p>Vendas: R$ {vendedor.sales.toLocaleString()}</p>
      <p>Clientes: {vendedor.clients}</p>
      <p>Meta: R$ {vendedor.target.toLocaleString()}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}>
          {percentage.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default VendedorInfo;
