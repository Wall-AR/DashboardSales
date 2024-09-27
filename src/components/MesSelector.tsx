// src/components/MesSelector.tsx

import React from 'react';

const MesSelector: React.FC<{ month: string; setMonth: (month: string) => void }> = ({ month, setMonth }) => {
    return (
        <div>
            <label htmlFor="monthSelect">Selecionar Mês:</label>
            <select id="monthSelect" value={month} onChange={(e) => setMonth(e.target.value)}>
                {/* Opções de meses */}
                {['Setembro 2024', 'Outubro 2024', 'Novembro 2024'].map((mes, index) => (
                    <option key={index} value={mes}>{mes}</option>
                ))}
            </select>
        </div>
    );
};

export default MesSelector;