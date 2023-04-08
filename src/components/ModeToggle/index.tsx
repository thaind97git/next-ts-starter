import { PaletteMode } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { WeatherNight, WeatherSunny } from 'mdi-material-ui'

import { setTheme } from 'services/localStorage/theme'
import { ThemeSettings } from 'types/context/theme'

interface Props {
    theme: ThemeSettings
    saveTheme: (values: ThemeSettings) => void
    lightIcon?: React.ReactElement
    darkIcon?: React.ReactElement
}

export const ModeToggle = (props: Props) => {
    const { theme, saveTheme, lightIcon = <WeatherNight />, darkIcon = <WeatherSunny /> } = props

    const handleModeChange = (mode: PaletteMode) => {
        saveTheme({ ...theme, mode })
    }

    const setLocalStorageTheme = (theme: ThemeSettings) => {
        setTheme(JSON.stringify(theme))
    }

    const handleModeToggle = () => {
        const nextTheme = theme.mode === 'light' ? 'dark' : 'light'

        handleModeChange(nextTheme)
        setLocalStorageTheme({ ...theme, mode: nextTheme })
    }

    return (
        <IconButton color="inherit" aria-haspopup="true" onClick={handleModeToggle}>
            {theme.mode === 'dark' ? darkIcon : lightIcon}
        </IconButton>
    )
}
