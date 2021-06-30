import React from 'react';

const InvoiceCard = ({ invoice }) => {
    const statusClasses = `status__container invoice--${invoice.status}`;

    // Format invoice total price
    var formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });

    return (
        <div className="invoice-item" role="invoice-item">
            <h2>
                <span>#</span>
                {invoice.id}
            </h2>
            <p className="name">{invoice.clientName}</p>
            <p className="date">Due {invoice.createdAt}</p>
            <p className="price">{formatter.format(invoice.total)}</p>
            <div className={statusClasses}>
                <div className="invoice-status__circle"></div>
                <div className="invoice-status">{invoice.status}</div>
            </div>
        </div>
    )
}

export default InvoiceCard;
