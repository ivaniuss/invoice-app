import React from 'react'
import { useHistory } from 'react-router-dom'

const GoBack = () => {
    const history = useHistory();

    const handleBack = () => {
        history.push('/invoice-app');
    }

    return (
        <div className='go-back' onClick={handleBack}>
            <img src="" alt="" className="arrow-left" />
            <span>Go back</span>
        </div>
    )
}

export default GoBack
