// src/components/SalesDashboard.tsx

import React, { useEffect, useState } from 'react';
import VendedorInfo from './VendedorInfo';
import EmpresaInfo from './EmpresaInfo';
import VendasPieChart from './VendasPieChart';
import MesSelector from './MesSelector';
// Importando os componentes necessários do Chart.js e registrando-os
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'; 

// Registrar os componentes necessários do Chart.js
Chart.register(ArcElement, Tooltip, Legend); // Adicionando registro correto

const SalesDashboard: React.FC = () => {
    const [data, setData] = useState<{ id: number; name: string; sales: number; target: number; clients: number }[]>([]);
    const [loading, setLoading] = useState(true);
    const [month, setMonth] = useState<string>('Setembro 2024'); // Mês selecionado
    const totalSales = data.reduce((acc, curr) => acc + curr.sales, 0); // Soma das vendas

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/sales-data'); // Exemplo de endpoint
                const result = await response.json();
                console.log(result); // Verifique se os dados estão corretos
                setData(result);
            } catch (error) {
                console.error('Erro ao carregar dados', error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    const pieChartData = {
        labels: data.map(v => v.name),
        datasets: [{
            label: 'Vendas do Mês',
            data: data.map(v => v.sales),
            backgroundColor: [
                'rgba(75,192,192,0.6)',
                'rgba(255,99,132,0.6)',
                'rgba(255,206,86,0.6)',
            ],
        }],
    };

    if (loading) return <div className="spinner">Carregando...</div>;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
            {/* Cabeçalho */}
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1>Dashboard de Vendas - Equipe</h1>
                <MesSelector month={month} setMonth={setMonth} />
            </header>

            <div style={{ display: 'flex' }}>
                {/* Coluna da Esquerda - Indicadores de Vendedores */}
                <div style={{ flex: 1, marginRight: '20px' }}>
                    <h2>Indicadores de Vendedores</h2>
                    {data.map(vendedor => (
                        <VendedorInfo key={vendedor.id} vendedor={vendedor} />
                    ))}
                </div>

                {/* Coluna da Direita - Gráfico Circular */}
                <div style={{ width: '400px', height: '400px' }}> {/* Definindo altura e largura */}
                    <VendasPieChart data={pieChartData} />
                </div>
            </div>

            {/* Indicadores Gerais da Empresa */}
            <EmpresaInfo totalSales={totalSales} companyTarget={640000} superTarget={800000} />
        </div>
    );
};

export default SalesDashboard;
