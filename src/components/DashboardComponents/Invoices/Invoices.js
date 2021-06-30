import React from 'react'
import InvoiceCard from './InvoiceCard';
import { invoicesData } from '../../../assets/data/data';

const Invoices = () => {
    return (
        <div className="invoice__container"  role="invoices">
            {invoicesData.map(invoice => {
                return (
                    <InvoiceCard invoice={invoice} key={invoice.id} />
                );
            })}
        </div>
    )
}

export default Invoices
