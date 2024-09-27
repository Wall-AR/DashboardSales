// src/components/EmpresaInfo.tsx

import React from 'react';

const EmpresaInfo: React.FC<{ totalSales: number; companyTarget: number; superTarget: number }> = ({ totalSales, companyTarget, superTarget }) => {
    return (
        <section style={{ marginTop:'20px'}}>
            <h3>Meta da Empresa</h3>
            <p>Status Atual (Total Vendas): R$ {totalSales}</p>
            <p>Meta da Empresa: R$ {companyTarget}</p>
            <p>Super Meta: R$ {superTarget}</p>
        </section>
    );
};

export default EmpresaInfo;