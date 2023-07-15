import { ILoadingStatus, ITeamMemberInfo } from "../../../types/team-page";
import { StateType } from "../../../types/state-type";
import { LoadingStatus } from "../../../utils/objects";

export const getTeamPageLoadingStatus = (state: StateType): LoadingStatus => state.TEAM_PAGE.loading_status

export const getTeamMembers = (state: StateType): ITeamMemberInfo[] => state.TEAM_PAGE.results;

export const getPerPage = (state: StateType): number => state.TEAM_PAGE.per_page;

export const getCurrentPage = (state: StateType): number => state.TEAM_PAGE.page;

export const getTotalMembers = (state: StateType): number => state.TEAM_PAGE.total_members;

export const getTotalPages = (state: StateType): number => state.TEAM_PAGE.total_pages;





