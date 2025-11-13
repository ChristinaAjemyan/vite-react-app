import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '..';
import request, { ERequestStatus } from '../../common/request';

export interface IUser {
  id: string;
  name: string;
  createdAt: string;
}

export interface IUserState {
  users: IUser[];
  status: ERequestStatus;
}

const initialState: IUserState = {
  users: [],
  status: ERequestStatus.IDLE,
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await request.get<IUser[]>('users');
  return response;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (_state) => {
        const state = _state;
        state.status = ERequestStatus.LOADING;
      })
      .addCase(fetchUsers.fulfilled, (_state, action) => {
        const state = _state;
        state.status = ERequestStatus.SUCCEEDED;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (_state) => {
        const state = _state;
        state.status = ERequestStatus.FAILED;
      })
  },
});

export const selectUsers = (state: RootState) => state.users.users;
export const selectStatus = (state: RootState) => state.users.status;

export default userSlice.reducer;
