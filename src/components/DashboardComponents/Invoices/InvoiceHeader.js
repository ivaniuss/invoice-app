import React from 'react'
import InvoiceStatus from './InvoiceStatus'

const InvoiceHeader = () => {
    return (
        <div className='invoice-header'>
            <h6>Status</h6>
            <InvoiceStatus invoice={({ status: 'paid' })} />
        </div>
    )
}

export default InvoiceHeader
