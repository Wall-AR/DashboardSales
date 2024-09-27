// src/components/EmpresaMetaChart.tsx

import React from 'react';
import { Bar } from 'react-chartjs-2';

interface EmpresaMetaProps {
  totalSales: number;
  target: number;
}

const EmpresaMetaChart = ({ totalSales, target }: EmpresaMetaProps) => {
  const data = {
    labels: ['Meta da Empresa'],
    datasets: [
      {
        label: 'Vendas Totais',
        data: [totalSales],
        backgroundColor: '#4BC0C0',
      },
      {
        label: 'Meta',
        data: [target],
        backgroundColor: '#FF6384',
      },
    ],
  };

  return <Bar data={data} />;
};

export default EmpresaMetaChart;
