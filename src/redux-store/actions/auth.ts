import { AppDispatchType, StateType } from '../../types/state-type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginRequestBody, ILoginResponse, IRegistrationRequestBody, IRegistrationResponse } from '../../types/common-types';
import { saveToken } from '../../services/token';
import { API_ROUTES } from '../../utils/objects';
import { IThunkExtraField } from '../../types/thunk-related';

// thunk для авторизации
export const loginAction = createAsyncThunk<
  ILoginResponse,
  ILoginRequestBody,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: IThunkExtraField;
  }>('user/logIn', async ({ email, password }, { extra: { coreAPI } }) => {
    const { data } = await coreAPI.post<ILoginResponse>(API_ROUTES.LOGIN, {
      email,
      password
    })

    if (data?.error) {
      throw new Error(data.error)
    }

    console.log(data)
    saveToken(data.token)
    return data
  })

// thunk для регистрации
export const registrationAction = createAsyncThunk<
  IRegistrationResponse,
  IRegistrationRequestBody,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: IThunkExtraField;
  }>('user/register', async ({ email, password }, { extra: { coreAPI } }) => {
    const { data } = await coreAPI.post<IRegistrationResponse>(API_ROUTES.REGISTER, {
      email,
      password
    })

    if (data?.error) {
      throw new Error(data.error)
    }

    console.log(data)
    saveToken(data.token)
    return data
  })

