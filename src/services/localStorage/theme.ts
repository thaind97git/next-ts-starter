import { LocalStorageEnum } from "./enum"

export const setTheme = (theme: string) => {
    localStorage.setItem(LocalStorageEnum.THEME_KEY, theme)
}

export const getTheme = () => {
    return localStorage.getItem(LocalStorageEnum.THEME_KEY)
}

export const removeTheme = () => {
    localStorage.removeItem(LocalStorageEnum.THEME_KEY)
}
