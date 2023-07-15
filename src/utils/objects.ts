export const PAGES_NAMES = {
  TEAM_PAGE: 'TEAM_PAGE',
  SINGLE_USER_PAGE: 'SINGLE_USER_PAGE'
} as const

export const SLICES_NAMES = {
  TEAM: 'TEAM'
} as const

export const PAGE_ROUTES = {
  TEAM: '/team',
  LOGIN: '/login',
  REGISTRATION: '/registration'
} as const

export const API_ROUTES = {
  LOGIN: 'login',
  USERS: 'users',
  REGISTER: 'register'
} as const

export enum LoadingStatus {
  loading = 'loading',
  idle = 'idle'
}

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}