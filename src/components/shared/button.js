import React from 'react'

const button = ({ type, children }) => {
    // Button type can be edit, delete or mark as paid
    const classList = `invoice__btn invoice__btn--${type}`;

    return (
        <button className={classList}>{children}</button>
    )
}

export default button
