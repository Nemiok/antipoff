import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, SLICES_NAMES } from '../../../utils/objects';
import { fetchSingleTeamMemberAction, fetchTeamMembersAction } from '../../actions/members';

const initialState =
{
  loading_status: LoadingStatus.idle,
  email: '',
  id: NaN,
  first_name: '',
  last_name: '',
  avatar: ''
}


const singleUserReducer = createSlice({
  name: SLICES_NAMES.TEAM,
  initialState,
  reducers: {
    setSingleUserPageLoadingState(state, action: PayloadAction<LoadingStatus>) {
      state.loading_status = action.payload
    },

    clearSingleUser(state) {
      state.avatar = ''
      state.email = ''
      state.id = NaN
      state.first_name = ''
      state.last_name = ''
    }

  },
  extraReducers(builder) {
    builder
      .addCase(fetchSingleTeamMemberAction.fulfilled, (state, action) => {
        state.loading_status = LoadingStatus.idle
        state.avatar = action.payload.data.avatar
        state.email = action.payload.data.email
        state.id = action.payload.data.id
        state.first_name = action.payload.data.first_name
        state.last_name = action.payload.data.last_name
      })
      .addCase(fetchSingleTeamMemberAction.pending, state => {
        state.loading_status = LoadingStatus.loading;
      })
      .addCase(fetchSingleTeamMemberAction.rejected, state => {
        state.loading_status = LoadingStatus.idle
      })

  },
});

export const { setSingleUserPageLoadingState, clearSingleUser } = singleUserReducer.actions;

export default singleUserReducer.reducer
