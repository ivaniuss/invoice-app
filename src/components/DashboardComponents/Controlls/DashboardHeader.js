import React from 'react'
import Heading from './DashboardHeading';
import InvoiceButton from './NewInvoiceButton';

const DashboardHeader = () => {
    return (
        <div id="dashboard__header">
            <Heading></Heading>
            <InvoiceButton />
        </div>
    )
}

export default DashboardHeader
