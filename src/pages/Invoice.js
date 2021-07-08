import React from 'react'
import { useParams } from 'react-router-dom'
import { invoicesData } from '../assets/data/data';
import GoBack from '../components/DashboardComponents/Invoices/GoBack';
import InvoiceHeader from '../components/DashboardComponents/Invoices/InvoiceHeader';

const Invoice = () => {
    // Get Invoice ID
    const { id } = useParams();
    // Find Invoice in Database
    const currentInvoice = invoicesData.find(invoice => invoice.id === id);

    return (
        <div className="dashboard__container invoice-view">
            <GoBack />
            <InvoiceHeader />
            <div className="invoice-body">
                <div className="description">
                    <h2 style={{ color: "rgb(255, 255, 255)", fontWeight: "bold" }}>#{currentInvoice.id}</h2>
                    <h2>Graphic Design</h2>
                </div>
                <div className="sender-address">
                    <p>{currentInvoice.senderAddress.street}</p>
                    <p>{currentInvoice.senderAddress.city}</p>
                    <p>{currentInvoice.senderAddress.postCode}</p>
                    <p>{currentInvoice.senderAddress.country}</p>
                </div>
                <div className="dates">
                    <div className="">
                        <h4>Invoice Date</h4>
                        <h2 style={{ color: "rgb(255, 255, 255)", fontWeight: "bold" }}>21 Aug 2021</h2>
                    </div>
                    <div>
                        <h4>Payment Due</h4>
                        <h2 style={{ color: "rgb(255, 255, 255)", fontWeight: "bold" }}>20 Sep 2021</h2>
                    </div>
                </div>
                <div className="client-address">
                    <h4>Bill To</h4>
                    <h2 style={{ color: "rgb(255, 255, 255)", fontWeight: "bold" }}>Alex Grim</h2>
                    <p>84 Church Way</p>
                    <p>Bradford</p>
                    <p>BD1 9PB</p>
                    <p>United Kingdom</p>
                </div>
                <div className="email">
                    <h4>Sent to</h4>
                    <p style={{ color: "rgb(255, 255, 255)", fontWeight: "bold" }}>alexgrim@mail.com</p>
                </div>
                <div className="table">
                    <p className="item">Banner Design</p>
                    <p className="item">£156</p>
                    <p className="item">Email Design</p>
                    <p className="item">£400</p>
                    <p className="item2">Amount Due</p>
                    <p className="item2">£556</p>
                </div>
            </div>
            <div className="footer">
                <button className="invoice__btn">Edit</button>
                <button className="invoice__btn">Delete</button>
                <button className="invoice__btn">Mark As Paid</button>
            </div>
        </div>
    )
}

export default Invoice


// <div className="invoice-preview__container">
//     <div className="go-back">
//         Your code. This is a separate component
//     </div>
//     <div className="invoice-preview__header">
//         <div className="left">
//             <p>Status</p>
//             <p>Status component goes here</p>
//         </div>
//         <div className="right">
//            Your buttons
//         </div>
//         <div>
//             The invoice data
//         </div>
//     </div>
// </div>