import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, SLICES_NAMES } from '../../../utils/objects';
import { AxiosError } from 'axios';
import { fetchTeamMembersAction } from '../../actions/members';
import { ITeamMemberInfo } from '../../../types/team-page';

const initialState =
{
  results: [] as ITeamMemberInfo[],
  loading_status: LoadingStatus.idle,
  per_page: 0,
  total_members: 0,
  page: 0,
  total_pages: 0
}


const callsReducer = createSlice({
  name: SLICES_NAMES.TEAM,
  initialState,
  reducers: {
    setTeamPageLoadingState(state, action: PayloadAction<LoadingStatus>) {
      state.loading_status = action.payload
    },

  },
  extraReducers(builder) {
    builder
      .addCase(fetchTeamMembersAction.fulfilled, (state, action) => {
        state.loading_status = LoadingStatus.idle
        state.results = action.payload.data

        state.page = action.payload.page
        state.total_pages = action.payload.total_pages
        state.per_page = action.payload.per_page
        state.total_members = action.payload.total

      })
      .addCase(fetchTeamMembersAction.pending, state => {
        state.loading_status = LoadingStatus.loading;
      })
      .addCase(fetchTeamMembersAction.rejected, state => {
        state.loading_status = LoadingStatus.idle
      })

  },
});

export const { setTeamPageLoadingState } = callsReducer.actions;

export default callsReducer.reducer
