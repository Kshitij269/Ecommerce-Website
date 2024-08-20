import { createSlice } from '@reduxjs/toolkit';

const yourSlice = createSlice({
  name: 'yourSliceName',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setData, setError } = yourSlice.actions;
export default yourSlice.reducer;
