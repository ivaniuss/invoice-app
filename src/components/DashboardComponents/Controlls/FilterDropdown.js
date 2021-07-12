import React from 'react'
import iconCheck from '../../../assets/images/icon-check.svg';

const FilterDropdown = ({ changed }) => {
    return (
        <div className="dropdown-filter-options">
            <label className="input__container">Paid
            <input type="checkbox" value="paid" defaultChecked onChange={changed} className="input-filter" />
                <span className="checkmark">
                    <img src={iconCheck} alt="Check mark." className="checked" />
                </span>

            </label>
            <label className="input__container">Pending
            <input type="checkbox" value="pending" defaultChecked onChange={changed} className="input-filter" />
                <span className="checkmark">
                    <img src={iconCheck} alt="Check mark." className="checked" />
                </span>
            </label>
            <label className="input__container">Draft
            <input type="checkbox" value="draft" defaultChecked onChange={changed} className="input-filter" />
                <span className="checkmark">
                    <img src={iconCheck} alt="Check mark." className="checked" />
                </span>
            </label>
        </div>
    )
}

export default FilterDropdown
