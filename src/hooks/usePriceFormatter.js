import React from 'react';

const usePriceFormatter = (amount) => {

    // Format invoice total price
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });

    const formattedAmount = formatter.format(amount);

    return formattedAmount;

}

export default usePriceFormatter;
