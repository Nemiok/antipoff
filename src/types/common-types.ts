export interface ILoginResponse {
  token: string
  error?: string
}

export interface ILoginRequestBody {
  email: string
  password: string
}

export interface IRegistrationRequestBody {
  email: string
  password: string
}

export interface IRegistrationResponse {
  id: number
  token: string
  error?: string
}


