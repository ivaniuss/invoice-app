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

    // Transform string to date 
    const dateCreated = new Date(currentInvoice.createdAt);
    const dateDue = new Date(currentInvoice.paymentDue);

    // Get shortened month for each date
    const createdMonth = dateCreated.toLocaleString('default', { month: 'short' });
    const dueMonth = dateDue.toLocaleString('default', { month: 'short' });

    // Format date according to design
    const dateCreatedFormat = `${dateCreated.getDate()} ${createdMonth} ${dateCreated.getFullYear()}`;
    const dateDueFormat = `${dateCreated.getDate()} ${dueMonth} ${dateCreated.getFullYear()}`;

    // Format invoice total price
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });

    return (
        <div className="wrapper invoice-view">
            <GoBack />
            <InvoiceHeader invoice={currentInvoice} />
            <div className="invoice-body">
                <div className="description">
                    <h1 style={{ color: "rgb(255, 255, 255)", fontWeight: "bold" }}><span className="hash">#</span>{currentInvoice.id}</h1>
                    <p>Graphic Design</p>
                </div>
                <address className="sender-address">
                    <p>{currentInvoice.senderAddress.street}</p>
                    <p>{currentInvoice.senderAddress.city}</p>
                    <p>{currentInvoice.senderAddress.postCode}</p>
                    <p>{currentInvoice.senderAddress.country}</p>
                </address>
                <div className="dates">
                    <div className="">
                        <h3>Invoice Date</h3>
                        <h2 className="emphasized" style={{ color: "rgb(255, 255, 255)", fontWeight: "bold" }}><time dateTime={currentInvoice.createdAt}>{dateCreatedFormat}</time></h2>
                    </div>
                    <div>
                        <h3>Payment Due</h3>
                        <h2 className="emphasized" style={{ color: "rgb(255, 255, 255)", fontWeight: "bold" }}><time dateTime={currentInvoice.paymentDue}>{dateDueFormat}</time></h2>
                    </div>
                </div>
                <address className="client-address">
                    <h3>Bill To</h3>
                    <h4 className="emphasized client-name" style={{ color: "rgb(255, 255, 255)", fontWeight: "bold" }}>{currentInvoice.clientName}</h4>
                    <p>{currentInvoice.clientAddress.street}</p>
                    <p>{currentInvoice.clientAddress.city}</p>
                    <p>{currentInvoice.clientAddress.postCode}</p>
                    <p>{currentInvoice.clientAddress.country}</p>
                </address>
                <div className="email">
                    <h3>Sent to</h3>
                    <p className="emphasized" style={{ color: "rgb(255, 255, 255)", fontWeight: "bold" }}>{currentInvoice.clientEmail}</p>
                </div>

                <table className="invoice-service-pricelist">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th className="quantity">QTY</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>

                        {currentInvoice.items.map((item, key) => {
                            return (
                                <tr key={key} className="items">
                                    <td>{item.name}</td>
                                    <td className="hidden quantity">{item.quantity}</td>
                                    <td className="hidden">{formatter.format(item.price)}</td>
                                    <td>{formatter.format(item.price * item.quantity)}</td>
                                </tr>

                            )
                        })}
                    </tbody>
                    <tfoot className="amount-due">
                        <tr>
                            <td>Amount Due</td>
                            <td className="amount-due-price">{formatter.format(currentInvoice.total)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default Invoice;