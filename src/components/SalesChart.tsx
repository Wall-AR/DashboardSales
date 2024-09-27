// components/SalesChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';

interface Sale {
  date: string;
  amount: number;
}

interface SalesChartProps {
  salesData: Sale[];
}

const SalesChart: React.FC<SalesChartProps> = ({ salesData }) => {
  const data = {
    labels: salesData.map((sale) => sale.date),
    datasets: [
      {
        label: 'Vendas',
        data: salesData.map((sale) => sale.amount),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return <Line data={data} />;
};

export default SalesChart;
