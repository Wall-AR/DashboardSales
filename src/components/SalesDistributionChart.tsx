// src/components/SalesDistributionChart.tsx

import React from 'react';
import { Pie } from 'react-chartjs-2';

interface Vendedor {
  name: string;
  sales: number;
}

const SalesDistributionChart = ({ salesData }: { salesData: Vendedor[] }) => {
  const data = {
    labels: salesData.map((vendedor) => vendedor.name),
    datasets: [
      {
        label: 'Distribuição de Vendas',
        data: salesData.map((vendedor) => vendedor.sales),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default SalesDistributionChart;
