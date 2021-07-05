import React from 'react'
import { useHistory } from 'react-router-dom'
import InvoiceStatus from './InvoiceStatus';
const Invoice = () => {

    const history = useHistory();
    const handleBack = () =>{
        history.push('/invoice-app')
    }

    return (
        <div className = 'dashboard__container invoice-view'>
            <div className = 'go-back' onClick={handleBack}>
                <span className = 'invoice__arrow left-arrow'></span>
                <span>Go back</span>
            </div>
            <div className='invoice-header'>
                <h6>Status</h6>
                <InvoiceStatus  invoice={({status:'paid'})}/>
            </div>
            <div className='invoice-body'>
                <div className='description'>
                    <h2 style={{color:'rgb(255, 255, 255)', fontWeight:'bold'}}>#XM9141</h2>
                    <h6>Graphic Design</h6>
                </div>                
                <div className='address'>
                    <h6>19 Union Terrace</h6>
                    <h6>London</h6>
                    <h6>E1 3EZ</h6>
                    <h6>United Kingdom</h6>
                </div>                
                <div className='date'>
                    <div>
                        <h6>Invoice Date</h6>
                        <h2 style={{color:'rgb(255, 255, 255)', fontWeight:'bold'}}>21 Aug 2021</h2>
                    </div>
                    <div>
                        <h6>Payment Due</h6>
                        <h2 style={{color:'rgb(255, 255, 255)', fontWeight:'bold'}}>20 Sep 2021</h2>
                    </div>
                </div>                
                <div className='client-address'>
                    <h6>Bill To</h6>
                    <h2 style={{color:'rgb(255, 255, 255)', fontWeight:'bold'}}>Alex Grim</h2>
                    <h6>84 Church Way</h6>
                    <h6>Bradford</h6>
                    <h6>BD1 9PB</h6>
                    <h6>United Kingdom</h6>
                </div>                
                <div className='email'>
                    <h6>Sent to</h6>
                    <h2 style={{color:'rgb(255, 255, 255)', fontWeight:'bold'}}>alexgrim@mail.com</h2>
                </div>                
                <div className='table'>
                    <h2 className='item'>Banner Design</h2>
                    <h2 className='item'>£156</h2>
                    <h2 className='item'>Email Design</h2>
                    <h2 className='item'>£400</h2>
                    <h2 className='item2'>Amount Due</h2>
                    <h2 className='item2'>£556</h2>
                </div>                
            </div>
            <div className = 'footer'>
                <button className= 'invoice__btn'>Edit</button>
                <button className= 'invoice__btn'>Delete</button>
                <button className= 'invoice__btn'>Mark As Paid</button>
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