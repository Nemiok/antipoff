import { createCoreAPI } from './../services/api';
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from './reducers/root-reducer';

const coreAPI = createCoreAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          coreAPI
        }
      }
    })
})

export default store