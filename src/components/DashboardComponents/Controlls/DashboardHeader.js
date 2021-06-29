import React from 'react'
import Heading from './DashboardHeading';
import Filter from './Filter';
import InvoiceButton from './NewInvoiceButton';

const DashboardHeader = () => {
    return (
        <div id="dashboard__header">
            <Heading></Heading>
            <Filter />
            <InvoiceButton />
        </div>
    )
}

export default DashboardHeader
