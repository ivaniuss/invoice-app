import React from 'react';

const InvoiceStatus = ({ invoice }) => {
    const statusClasses = `status__container invoice--${invoice.status}`;

    return (
        <div className={statusClasses}>
            <div className="invoice-status__circle"></div>
            <div className="invoice-status">{invoice.status}</div>
        </div>
    )
}

export default InvoiceStatus;

