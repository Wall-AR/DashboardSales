// src/components/VendedorInfo.tsx

import React from 'react';

interface Vendedor {
    id: number;
    name: string;
    sales: number;
    target: number;
    clients: number; // Número de clientes atendidos
}

const VendedorInfo: React.FC<{ vendedor: Vendedor }> = ({ vendedor }) => {
    const progressColor = vendedor.sales >= vendedor.target ? '#4caf50' : '#f44336';
    
    return (
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
            <h3>{vendedor.name}</h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`https://via.placeholder.com/50`} alt={vendedor.name} style={{ borderRadius: '50%', marginRight: '10px' }} />
                <div style={{ flexGrow: 1 }}>
                    <div style={{ backgroundColor: '#f3f3f3', borderRadius: '5px', overflow: 'hidden', height: '20px' }}>
                        <div style={{
                            width: `${(vendedor.sales / vendedor.target) * 100}%`,
                            backgroundColor: progressColor,
                            height: '100%',
                        }} />
                    </div>
                    <p>R$ {vendedor.sales} / R$ {vendedor.target}</p>
                    <p>Faltante para Meta R$ {vendedor.target - vendedor.sales}</p>
                    <p>Ticket Médio R$ {(vendedor.sales / vendedor.clients).toFixed(2)}</p>
                    <p>{vendedor.clients} Clientes</p>
                </div>
            </div>
        </div>
    );
};

export default VendedorInfo;