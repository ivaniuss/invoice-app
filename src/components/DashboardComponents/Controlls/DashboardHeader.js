import React from 'react'
import Heading from './DashboardHeading';
import InvoiceButton from './NewInvoiceButton';

const DashboardHeader = (dataLength) => {
    return (
        <div id="dashboard__header">
            <Heading dataLength={dataLength}></Heading>
            <InvoiceButton />
        </div>
    )
}

export default DashboardHeader
