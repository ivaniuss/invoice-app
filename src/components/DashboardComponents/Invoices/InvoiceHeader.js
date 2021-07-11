import React from 'react'
import InvoiceStatus from './InvoiceStatus'
import Button from '../../shared/button';

const InvoiceHeader = ({ invoice }) => {
    return (
        <div className='invoice-header'>
            <div className="header-status">
                <h3>Status</h3>
                <InvoiceStatus invoice={invoice} />
            </div>
            <div className="footer">
                <Button type="edit">Edit</Button>
                <Button type="delete">Delete</Button>
                {invoice.status !== 'paid' ? (
                    <Button type="mark-as-paid">Mark As Paid</Button>
                ) : ''}
            </div>
        </div>
    )
}

export default InvoiceHeader
