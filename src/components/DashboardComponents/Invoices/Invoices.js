import React, { useEffect } from 'react'
import InvoiceCard from './InvoiceCard';
import { invoicesData } from '../../../assets/data/data';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../../reducers/filterReducer';

const Invoices = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const open = useSelector(state => state.filter.open);
    const inputs = useSelector(state => state.filter.inputs)
    
    useEffect(() => {
        dispatch(filterActions.updateInputs(document.querySelectorAll('.input-filter')));
    }, [])

    useEffect(() => {
    }, [open, filter])

    const previewInvoice = () => {
        if (filter.pending && filter.draft && filter.paid || !filter.pending && !filter.draft && !filter.paid) {
            {
                return invoicesData.map(invoice => {
                    return <InvoiceCard invoice={invoice} key={invoice.id} />

                })
            }
        } else {
            return Array.from(inputs).map(input => {
                if (input.checked) {
                    return invoicesData.map(invoice => {
                        if (invoice.status === input.value) {
                            return <InvoiceCard invoice={invoice} key={invoice.id} />
                        }

                    })
                }
            })
        }
    }

    return (
        <div className="invoice__container" role="invoices">
            {previewInvoice()}
        </div>
    )
}

export default Invoices
