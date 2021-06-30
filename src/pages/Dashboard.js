import React, { useEffect } from 'react';
import DashboardHeader from '../components/DashboardComponents/Controlls/DashboardHeader';
import Invoices from '../components/DashboardComponents/Invoices/Invoices';
import { invoicesData } from '../assets/data/data';

const Dashboard = ({ dataLength }) => {
    const changeTabTitle = () => {
        document.title = `Invoice (${invoicesData.length}) | Invoice App`;
    }

    useEffect(() => {
        changeTabTitle();
    }, []);

    return (
        <div className="dashboard__container">
            <DashboardHeader dataLength={invoicesData.length} />
            <Invoices />
        </div>
    )
}

export default Dashboard;
