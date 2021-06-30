import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selected: false,
    options: []
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilter(state, action) {
            console.log(action);
        }
    }
});
export const filterActions = filterSlice.actions;
export default filterSlice;