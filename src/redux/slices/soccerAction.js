import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../../api';

export const fetchUsersAsync = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetchData();
  
  return response.data;
});