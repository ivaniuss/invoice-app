import React from 'react'
import { useSelector } from 'react-redux';

const DashboardHeading = ({ dataLength }) => {
    const filter = useSelector(state => state.filter)

    return (
        <div className="heading__container">
            <h1>Invoices</h1>
            <p>There are <span className="invoice-number">{dataLength}</span> total invoices.</p>
        </div>
    )
}

export default DashboardHeading
