import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, LoadingStatus } from '../../../utils/objects';
import { loginAction, registrationAction } from '../../actions/auth';

const initialState =
{
  authorization_status: AuthorizationStatus.Unknown,
  error: [] as string[],
  loading_status: LoadingStatus.idle
}

const commonReducer = createSlice({
  name: 'APP',
  initialState,
  reducers: {
    setLoadingState(state, action: PayloadAction<LoadingStatus>) {
      state.loading_status = action.payload
    },

    setErrorNull(state, _) {
      state.error = []
    },

    setError(state, action: PayloadAction<string[]>) {
      state.error.length = 0
      state.error = state.error.concat(action.payload)
    },

    setAuthorizationStatus: (state, action) => {
      state.authorization_status = action.payload
    }

  },
  extraReducers(builder) {
    builder
      .addCase(loginAction.fulfilled, state => {
        state.authorization_status = AuthorizationStatus.Auth;
        state.loading_status = LoadingStatus.idle
        state.error = []

      })
      .addCase(loginAction.pending, state => {
        state.loading_status = LoadingStatus.loading;
      })
      .addCase(loginAction.rejected, state => {
        state.authorization_status = AuthorizationStatus.NoAuth;
        state.loading_status = LoadingStatus.idle
        state.error = ['Неверный логин или пароль']
      })

      .addCase(registrationAction.fulfilled, state => {
        state.authorization_status = AuthorizationStatus.Auth;
        state.loading_status = LoadingStatus.idle
        state.error = []

      })
      .addCase(registrationAction.pending, state => {
        state.loading_status = LoadingStatus.loading;
      })
      .addCase(registrationAction.rejected, state => {
        state.loading_status = LoadingStatus.idle
        state.error = ['Проверьте правильность заполнения и попробуйте позже']
      })

  },
});

export const { setLoadingState, setErrorNull, setError, setAuthorizationStatus } = commonReducer.actions;

export default commonReducer.reducer
