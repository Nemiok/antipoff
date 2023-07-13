export const PAGES_NAMES = {
  TEAM_PAGE: 'TEAM_PAGE'
} as const

export const SLICES_NAMES = {
  TEAM: 'TEAM'
} as const

export const PAGE_ROUTES = {
  TEAM: '/team',
  LOGIN: '/login'
} as const

export const API_ROUTES = {
  LOGIN: 'login',
  USERS: 'users'
} as const

export const LOADING_STATUS = {
  LOADING: 'LOADING',
  IDLE: 'IDLE'
}

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}