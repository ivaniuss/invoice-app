import React from 'react'
import InvoiceStatus from './InvoiceStatus'

const InvoiceHeader = () => {
    return (
        <div className='invoice-header'>
            <div>
                <h3>Status</h3>
                <InvoiceStatus invoice={({ status: 'paid' })} />
            </div>
            <div className="footer">
                <button className="invoice__btn">Edit</button>
                <button className="invoice__btn">Delete</button>
                {/* <button className="invoice__btn">Mark As Paid</button> */}
            </div>
        </div>
    )
}

export default InvoiceHeader
