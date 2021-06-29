import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../reducers/filterReducer';

const store = configureStore({
    reducer: {
        filter: filterSlice.reducer
    }
});

export default store;
