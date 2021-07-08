import React from 'react'
import InvoiceStatus from './InvoiceStatus'

const InvoiceHeader = () => {
    return (
        <div className='invoice-header'>
            <h3>Status</h3>
            <InvoiceStatus invoice={({ status: 'paid' })} />
        </div>
    )
}

export default InvoiceHeader
