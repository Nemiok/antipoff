import { ILoadingStatus } from '../../../types/team-page';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, SLICES_NAMES } from '../../../utils/objects';

const initialState =
{
  authorization_status: AuthorizationStatus.Unknown,
  error: null,
  loading_status: ILoadingStatus.idle
}

const commonReducer = createSlice({
  name: SLICES_NAMES.TEAM,
  initialState,
  reducers: {
    setLoadingState(state, action: PayloadAction<ILoadingStatus>) {
      state.loading_status = action.payload
    },

    setErrorNull(state, _) {
      state.error = null
    },

  },
  extraReducers(builder) {


  },
});

export const { setLoadingState, setErrorNull } = commonReducer.actions;

export default commonReducer.reducer
