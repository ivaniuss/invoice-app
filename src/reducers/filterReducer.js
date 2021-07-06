import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
    pending: false,
    paid: false,
    draft: false
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilter(state, action) {
            console.log(action.payload);
          action.payload = !action.payload
        },
        toggleDropdown(state, action) {
           state.open = !state.open
        }
    }
});
export const filterActions = filterSlice.actions;
export default filterSlice;