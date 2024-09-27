// src/services/salesService.ts

export interface Sale {
  name: string;
  amount: number;  // Quantidade de vendas
  clients: number; // Número de clientes
  target: number;  // Meta de vendas individual
}

export const fetchSalesData = async (): Promise<Sale[]> => {
  return [
    { name: 'Wallace', amount: 120000, clients: 50, target: 150000 },
    { name: 'Thaynan', amount: 95000, clients: 40, target: 100000 },
    { name: 'Kamila', amount: 80000, clients: 30, target: 90000 },
    { name: 'Áquila', amount: 70000, clients: 25, target: 85000 },
  ];
};

// Simulação de meta da empresa
export const fetchEmpresaMeta = async (): Promise<number> => {
  return 500000; // Meta de vendas total da empresa
};
