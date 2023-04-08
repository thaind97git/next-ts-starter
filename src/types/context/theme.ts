import { PaletteMode } from '@mui/material'
import { ThemeColor } from 'types/theme'

export type ThemeSettings = {
    mode: PaletteMode
    themeColor: ThemeColor
}

export type ThemeContextValue = {
    themeSettings: ThemeSettings
    saveThemeSettings: (updatedTheme: ThemeSettings) => void
}
