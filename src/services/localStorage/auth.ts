import { LocalStorageEnum } from './enum'

export const setAccessToken = (token: string) => {
    localStorage.setItem(LocalStorageEnum.ACCESS_TOKEN_KEY, token)
}

export const getAccessToken = () => {
    return localStorage.getItem(LocalStorageEnum.ACCESS_TOKEN_KEY)
}

export const removeAccessToken = () => {
    localStorage.removeItem(LocalStorageEnum.ACCESS_TOKEN_KEY)
}

export const setRefreshToken = (token: string) => {
    localStorage.setItem(LocalStorageEnum.REFRESH_TOKEN_KEY, token)
}

export const getRefreshToken = () => {
    return localStorage.getItem(LocalStorageEnum.REFRESH_TOKEN_KEY)
}

export const removeRefreshToken = () => {
    localStorage.removeItem(LocalStorageEnum.REFRESH_TOKEN_KEY)
}
