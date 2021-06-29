import React from 'react'
import InvoiceCard from './InvoiceCard';

const Invoices = () => {
    return (
        <div className="invoice__container">
            <InvoiceCard></InvoiceCard>
            <InvoiceCard></InvoiceCard>
            <InvoiceCard></InvoiceCard>
        </div>
    )
}

export default Invoices
