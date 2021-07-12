import React, { useEffect, useReducer } from 'react';
import FilterDropdown from './FilterDropdown';
import filterArrow from '../../../assets/images/icon-arrow-down.svg'
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../../reducers/filterReducer';

const Filter = () => {
    // const [state, dispatch] = useReducer(reducer, initialState);
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)
    const open = useSelector(state => state.filter.open)

    const classes = `invoice-filter ${open ? 'open' : ''}`;
    useEffect(() => {
    }, [open]);

    const toggleFilterHandler = () => {
        dispatch(filterActions.toggleDropdown());
    }

    const changed = (e) => {
        dispatch(filterActions.updateFilter(e.target.value));
    }

    return (
        <div className={classes}>
            <div className="filter__controller" onClick={toggleFilterHandler}>
                Filter
                <img src={filterArrow} alt="" className="filter-arrow" />
            </div>

            <FilterDropdown changed={changed} />
        </div>
    )
}

export default Filter;
