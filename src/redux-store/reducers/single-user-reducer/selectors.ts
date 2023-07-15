import { StateType } from "../../../types/state-type";
import { LoadingStatus } from "../../../utils/objects";

export const getUserFirstName = (state: StateType): string => state.SINGLE_USER_PAGE.first_name;

export const getUserLastName = (state: StateType): string => state.SINGLE_USER_PAGE.last_name;

export const getUserAvatar = (state: StateType): string => state.SINGLE_USER_PAGE.avatar;

export const getUserEmail = (state: StateType): string => state.SINGLE_USER_PAGE.email;

export const getUserID = (state: StateType): number => state.SINGLE_USER_PAGE.id;

export const getSinglePageLoadingStatus = (state: StateType): LoadingStatus => state.SINGLE_USER_PAGE.loading_status;

