import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISingleTeamMemberResponse, ITeamResponse } from "../../types/team-page";
import { AppDispatchType, StateType } from "../../types/state-type";
import { AxiosInstance } from "axios";
import { API_ROUTES } from "../../utils/objects";

// thunk для получения списка пользователей
export const fetchTeamMembersAction = createAsyncThunk<
  ITeamResponse,
  undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('app/fetchTeamMembersAction', async (token, { extra: api }) => {

  const { data } = await api.post<ITeamResponse>(API_ROUTES.USERS);
  console.log(data)
  return data;
});

// thunk для получения одного пользователя
export const fetchSingleTeamMemberAction = createAsyncThunk<
  ISingleTeamMemberResponse,
  undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('app/fetchSingleTeamMemberAction', async (id, { extra: api }) => {

  const { data } = await api.post<ISingleTeamMemberResponse>(`${API_ROUTES.USERS}/${id}`);
  console.log(data)
  return data;
});