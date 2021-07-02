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
                {/* <div> */}
                <h6>Status</h6>
                <InvoiceStatus  invoice={({status:'paid'})}/>
                {/* </div> */}
                {/* <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div> */}
            </div>
            <div>
                content
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