import React from 'react'
import { useParams } from 'react-router-dom'

const Invoice = () => {

    const {id} = useParams()
 
    return (
        <div>
            <div>
                <div>{id}</div>
                <div>Go back</div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Invoice
