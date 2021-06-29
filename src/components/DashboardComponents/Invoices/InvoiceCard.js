import React from 'react'

const InvoiceCard = () => {
    return (
        <div className="invoice-item">
            <h2>
                <span>#</span>
                XM9141
            </h2>
            <p className="name">Alex Grim</p>
            <p className="date">Due 20 Sep 2021</p>
            <p className="price">556</p>
            <div className="status">
                <div className="invoice-status__circle"></div>
                <div className="invoice-status">Pending</div>
            </div>
        </div>
    )
}

export default InvoiceCard
