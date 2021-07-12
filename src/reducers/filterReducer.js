import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
    inputs: '',
    pending: true,
    paid: true,
    draft: true
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilter(state, action) {
            console.log(action.payload);
          state[action.payload] = !state[action.payload]
        },
        toggleDropdown(state, action) {
           state.open = !state.open
        },
        updateInputs(state, action) {
           state.inputs = action.payload
        }
    }
});
export const filterActions = filterSlice.actions;
export default filterSlice;