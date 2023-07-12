import { AppDispatchType, StateType } from '../../types/state-type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkExtraField } from '../../types/thunk-related';

const config = {
  headers: {
    authorization: 'Bearer testtoken'
  },
}

