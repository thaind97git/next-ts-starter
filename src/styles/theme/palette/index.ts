import { PaletteMode } from '@mui/material'
import { ThemeColor } from 'types/theme'

const DefaultPalette = (mode: PaletteMode, themeColor: ThemeColor) => {
    const lightColor = '58, 53, 65'
    const darkColor = '231, 227, 252'
    const mainColor = mode === 'light' ? lightColor : darkColor

    const primaryGradient = () => {
        if (themeColor === 'primary') {
            return '#C6A7FE'
        } else if (themeColor === 'secondary') {
            return '#9C9FA4'
        } else if (themeColor === 'success') {
            return '#93DD5C'
        } else if (themeColor === 'error') {
            return '#FF8C90'
        } else if (themeColor === 'warning') {
            return '#FFCF5C'
        } else {
            return '#6ACDFF'
        }
    }

    return {
        customColors: {
            main: mainColor,
            primaryGradient: primaryGradient(),
            tableHeaderBg: mode === 'light' ? '#F9FAFC' : '#3D3759'
        },
        common: {
            black: '#000',
            white: '#FFF'
        },
        mode: mode,
        primary: {
            light: '#666CFF',
            main: '#666CFF',
            dark: '#666CFF',
            contrastText: '#FFF'
        },
        secondary: {
            light: '#6D788D',
            main: '#6D788D',
            dark: '#6D788D',
            contrastText: '#FFF'
        },
        success: {
            light: '#72E128',
            main: '#72E128',
            dark: '#72E128',
            contrastText: '#FFF'
        },
        error: {
            light: '#FF4D49',
            main: '#FF4D49',
            dark: '#FF4D49',
            contrastText: '#FFF'
        },
        warning: {
            light: '#FDB528',
            main: '#FDB528',
            dark: '#FDB528',
            contrastText: '#FFF'
        },
        info: {
            light: '#26C6F9',
            main: '#26C6F9',
            dark: '#26C6F9',
            contrastText: '#FFF'
        },
        grey: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#D5D5D5',
            A200: '#AAAAAA',
            A400: '#616161',
            A700: '#303030'
        },
        text: {
            primary: `rgba(${mainColor}, 0.87)`,
            secondary: `rgba(${mainColor}, 0.68)`,
            disabled: `rgba(${mainColor}, 0.38)`
        },
        divider: `rgba(${mainColor}, 0.12)`,
        background: {
            paper: mode === 'light' ? '#FFF' : '#30334E',
            default: mode === 'light' ? '#F4F5FA' : '#282A42'
        },
        action: {
            active: `rgba(${mainColor}, 0.54)`,
            hover: `rgba(${mainColor}, 0.04)`,
            selected: `rgba(${mainColor}, 0.08)`,
            disabled: `rgba(${mainColor}, 0.3)`,
            disabledBackground: `rgba(${mainColor}, 0.18)`,
            focus: `rgba(${mainColor}, 0.12)`
        }
    }
}

export default DefaultPalette
