import { AxiosError } from "axios";
import { ILoadingStatus } from "../../../types/team-page";
import { StateType } from "../../../types/state-type";

export const getPageLoadingStatus = (state: StateType): ILoadingStatus => state.TEAM_PAGE.loading_status
export const getPageErrorStatus = (state: StateType): AxiosError | null => state.TEAM_PAGE.error





