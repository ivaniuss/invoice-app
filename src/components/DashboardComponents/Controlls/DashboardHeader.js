import React from 'react';
import Heading from './DashboardHeading';
import InvoiceButton from './NewInvoiceButton';
import Filter from './Filter';

const DashboardHeader = ({ dataLength }) => {
    return (
        <div id="dashboard__header">
            <Heading dataLength={dataLength}></Heading>
            <div className="right">
                <Filter />
                <InvoiceButton />
            </div>
        </div>
    )
}

export default DashboardHeader;
