import React from 'react';
import { useHistory } from 'react-router-dom';
import InvoiceStatus from './InvoiceStatus';
import usePriceFormatter from '../../../hooks/usePriceFormatter';

const InvoiceCard = ({ invoice }) => {
    // Use custom hook to format the price
    const formattedPrice = usePriceFormatter(invoice.total);

    const history = useHistory();

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
            <p className="price">{formattedPrice}</p>
            <InvoiceStatus invoice={invoice} />
        </div>
    )
}

export default InvoiceCard;
