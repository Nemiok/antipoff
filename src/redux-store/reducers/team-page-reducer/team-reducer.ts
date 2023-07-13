import { ILoadingStatus } from '../../../types/team-page';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SLICES_NAMES } from '../../../utils/objects';
import { AxiosError } from 'axios';

const initialState =
{
  results: [],
  loading_status: ILoadingStatus.idle
}


const callsReducer = createSlice({
  name: SLICES_NAMES.TEAM,
  initialState,
  reducers: {
    setLoadingState(state, action: PayloadAction<ILoadingStatus>) {
      state.loading_status = action.payload
    },

  },
  extraReducers(builder) {


  },
});

export const { setLoadingState } = callsReducer.actions;

export default callsReducer.reducer
