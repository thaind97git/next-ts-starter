const ACCESS_TOKEN_KEY = '_next-ts_access_token'
const REFRESH_TOKEN_KEY = '_next-ts_refresh_token'

export const setAccessToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export const removeAccessToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
}

export const setRefreshToken = (token: string) => {
    localStorage.setItem(REFRESH_TOKEN_KEY, token)
}

export const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN_KEY)
}

export const removeRefreshToken = () => {
    localStorage.removeItem(REFRESH_TOKEN_KEY)
}
