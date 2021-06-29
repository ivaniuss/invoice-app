import React from 'react';

const Filter = () => {
    return (
        <div className="invoice-filter">
            Filter
            <span className="filter-arrow">&#8249;</span>

            <div className="dropdown-filter-options">
                <label>
                    <input type="checkbox" value="paid"/>
                    Paid
                </label>
                <label>
                    <input type="checkbox" value="pending"/>
                    Pending
                </label>
                <label>
                    <input type="checkbox" value="draft" />
                    Draft
                </label>
            </div>
        </div>
    )
}

export default Filter;
