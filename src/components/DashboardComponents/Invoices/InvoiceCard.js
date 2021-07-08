import React from 'react';
import { useHistory } from 'react-router-dom';
import InvoiceStatus from './InvoiceStatus';

const InvoiceCard = ({ invoice }) => {
    const history = useHistory();

    // Format invoice total price
    var formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });

    const handleChange = (invoiceId) => {
        history.push(`invoice-app/invoice/${invoiceId}`)
    }

    return (
        <div className="invoice-item" role="invoice-item" onClick={() => { handleChange(invoice.id) }}>
            <h2>
                <span className="hash">#</span>
                {invoice.id}
            </h2>
            <p className="name">{invoice.clientName}</p>
            <p className="date">Due {invoice.createdAt}</p>
            <p className="price">{formatter.format(invoice.total)}</p>
            <InvoiceStatus invoice={invoice} />
        </div>
    )
}

export default InvoiceCard;
