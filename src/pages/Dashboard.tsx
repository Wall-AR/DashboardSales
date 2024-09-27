// src/pages/Dashboard.tsx

import React, { useEffect, useState } from 'react';
import VendedorInfo from '../components/VendedorInfo';
import SalesDistributionChart from '../components/SalesDistributionChart';
import EmpresaMetaChart from '../components/EmpresaMetaChart';
import { fetchSalesData, fetchEmpresaMeta, Sale } from '../services/salesService';

interface Vendedor {
  name: string;
  sales: number;
  clients: number;
  target: number;
}

const Dashboard = () => {
  const [salesData, setSalesData] = useState<Vendedor[]>([]);
  const [empresaMeta, setEmpresaMeta] = useState<number>(0);
  const [totalSales, setTotalSales] = useState<number>(0);

  useEffect(() => {
    const loadSalesData = async () => {
      const sales: Sale[] = await fetchSalesData();
      const vendedores: Vendedor[] = sales.map((sale) => ({
        name: sale.name,
        sales: sale.amount,
        clients: sale.clients,
        target: sale.target,
      }));

      setSalesData(vendedores);

      const total = vendedores.reduce((acc, vendedor) => acc + vendedor.sales, 0);
      setTotalSales(total);

      const meta = await fetchEmpresaMeta();
      setEmpresaMeta(meta);
    };

    loadSalesData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard de Vendas</h1>
      <div className="sales-cards">
        {salesData.map((vendedor) => (
          <VendedorInfo key={vendedor.name} vendedor={vendedor} />
        ))}
      </div>
      <div className="sales-chart">
        <SalesDistributionChart salesData={salesData} />
      </div>
      <div className="empresa-meta-chart">
        <EmpresaMetaChart totalSales={totalSales} target={empresaMeta} />
      </div>
    </div>
  );
};

export default Dashboard;
