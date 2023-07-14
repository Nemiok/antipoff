import { LoadingStatus } from './../../../utils/objects';
import { AxiosError } from "axios";
import { StateType } from "../../../types/state-type";
import { AuthorizationStatus } from "../../../utils/objects";

export const getErrorStatus = (state: StateType): string[] => state.commonReducer.error
export const getLoadingStatus = (state: StateType): LoadingStatus => state.commonReducer.loading_status
export const getAuthorizationStatus = (state: StateType): AuthorizationStatus => state.commonReducer.authorization_status;

