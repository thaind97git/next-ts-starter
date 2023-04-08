import { PaletteMode } from '@mui/material'

export type ThemeConfig = {
    mode: PaletteMode
    disableRipple: boolean
    responsiveFontSizes: boolean
    navigationSize: number
}

export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

declare module '@mui/material/styles' {
    interface Palette {
        customColors: {
            main: string
            tableHeaderBg: string
            primaryGradient: string
        }
    }
    interface PaletteOptions {
        customColors?: {
            main?: string
            tableHeaderBg?: string
            primaryGradient?: string
        }
    }
}

export {}
