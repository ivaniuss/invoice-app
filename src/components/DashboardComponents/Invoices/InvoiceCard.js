import React from 'react'

const InvoiceCard = ({invoice}) => {
    return (
        <div className="invoice-item">
            <h2>
                <span>#</span>
                {invoice.id}
            </h2>
            <p className="name">{invoice.clientName}</p>
            <p className="date">{invoice.createdAt}</p>
            <p className="price">${invoice.total}</p>
            <div className="status">
                <div className="invoice-status__circle"></div>
                <div className="invoice-status">{invoice.status}</div>
            </div>
        </div>
    )
}

export default InvoiceCard
