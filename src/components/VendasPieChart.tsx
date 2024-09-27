// src/components/VendasPieChart.tsx

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar os componentes necessários do Chart.js
Chart.register(ArcElement, Tooltip, Legend);

const VendasPieChart: React.FC<{ data: any }> = ({ data }) => {
    return (
        <div style={{ flexBasis: '300px' }}>
            <h2>Gráfico Circular de Vendas do Mês</h2>
            <Pie data={data} />
        </div>
    );
};

export default VendasPieChart;