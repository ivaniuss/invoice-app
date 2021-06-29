import React from 'react'

const DashboardHeading = () => {
    return (
        <div className="heading__container">
            <h1>Invoices</h1>
            <p>There are <span className="invoice-number">6</span> total invoices.</p>
        </div>
    )
}

export default DashboardHeading
