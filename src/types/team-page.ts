export const enum ILoadingStatus {
  loading = 'loading',
  idle = 'idle'
}

export interface ITeamResponse {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: ITeamMemberInfo[]
  support: Support
}

export interface ITeamMemberInfo {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface Support {
  url: string
  text: string
}

export interface ISingleTeamMemberResponse {
  data: ISingleTeamMemberInfo
  support: Support
}

export interface ISingleTeamMemberInfo {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}
