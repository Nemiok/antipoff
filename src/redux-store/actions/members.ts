import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISingleTeamMemberResponse, ITeamResponse } from "../../types/team-page";
import { AppDispatchType, StateType } from "../../types/state-type";
import { API_ROUTES } from "../../utils/objects";
import { IThunkExtraField } from "../../types/thunk-related";

// thunk для получения списка пользователей
export const fetchTeamMembersAction = createAsyncThunk<
  ITeamResponse,
  number | undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: IThunkExtraField;
  }
>('app/fetchTeamMembersAction', async (page = 1, { extra: { coreAPI } }) => {

  const { data } = await coreAPI.get<ITeamResponse>(`${API_ROUTES.USERS}?delay=0.5&page=${page}`);
  console.log(data)
  return data;
});

// thunk для получения одного пользователя
export const fetchSingleTeamMemberAction = createAsyncThunk<
  ISingleTeamMemberResponse,
  number,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: IThunkExtraField;
  }
>('app/fetchSingleTeamMemberAction', async (id, { extra: { coreAPI } }) => {

  const { data } = await coreAPI.get<ISingleTeamMemberResponse>(`${API_ROUTES.USERS}/${id}?delay=0.5`);
  console.log(data)
  return data;
});

/* export const likeTeamMemberAction = createAsyncThunk<
  ISingleTeamMemberResponse,
  {
    id: number,
    liked: boolean
  },
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: IThunkExtraField;
  }
>('app/likeTeamMemberAction', async ({ id, liked }, { extra: { coreAPI } }) => {

  const { data } = await coreAPI.patch<ISingleTeamMemberResponse>(`${API_ROUTES.USERS}/${id}`, {
    liked
  });
  console.log(data)
  return data;
}); */