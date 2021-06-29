import React from 'react'
import DashboardHeader from '../components/DashboardComponents/Controlls/DashboardHeader'
import Invoices from '../components/DashboardComponents/Invoices/Invoices'

const Dashboard = () => {
    return (
        <div className="dashboard__container">
            <DashboardHeader />
            <Invoices />
        </div>
    )
}

export default Dashboard
