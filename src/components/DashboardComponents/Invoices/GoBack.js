import React from 'react';
import { useHistory } from 'react-router-dom';
import arrow from '../../../assets/images/icon-arrow-down.svg';

const GoBack = () => {
    const history = useHistory();

    const handleBack = () => {
        history.push('/invoice-app');
    }

    return (
        <div className='go-back' onClick={handleBack}>
            <img src={arrow} alt="Left arrow icon indicating going back to the previous page." className="arrow-left" />
            <span>Go back</span>
        </div>
    )
}

export default GoBack;
