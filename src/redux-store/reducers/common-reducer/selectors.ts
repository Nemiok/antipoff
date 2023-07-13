import { AxiosError } from "axios";
import { StateType } from "../../../types/state-type";
import { AuthorizationStatus } from "../../../utils/objects";

export const getErrorStatus = (state: StateType): AxiosError | null => state.commonReducer.error

export const getAuthorizationStatus = (state: StateType): AuthorizationStatus => state.commonReducer.authorization_status;

