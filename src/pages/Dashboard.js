import React from 'react';
import DashboardHeader from '../components/DashboardComponents/Controlls/DashboardHeader';
import Invoices from '../components/DashboardComponents/Invoices/Invoices';

const Dashboard = ({dataLength}) => {
    return (
        <div className="dashboard__container">
            <DashboardHeader dataLength={dataLength}/>
            <Invoices />
        </div>
    )
}

export default Dashboard;
