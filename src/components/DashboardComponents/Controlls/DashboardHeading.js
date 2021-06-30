import React from 'react'

const DashboardHeading = ({ dataLength }) => {
    return (
        <div className="heading__container">
            <h1>Invoices</h1>
            <p>There are <span className="invoice-number">{dataLength}</span> total invoices.</p>
        </div>
    )
}

export default DashboardHeading
