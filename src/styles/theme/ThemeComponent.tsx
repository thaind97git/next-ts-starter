import React, { ReactNode } from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { GlobalStyles } from '@mui/material'
import { ThemeSettings } from 'types/context/theme'

import themeConfig from './config'
import themeOptions from './options'

import overrides from './overrides'
import typography from './typography'

import GlobalStyling from './globalStyles'

interface Props {
    themeSettings: ThemeSettings
    children: ReactNode
}

const ThemeComponent = ({ themeSettings, children }: Props) => {
    // ** Merged ThemeOptions of Core and User
    const coreThemeConfig = themeOptions(themeSettings)

    // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
    let theme = createTheme(coreThemeConfig)

    // ** Continue theme creation and pass merged component overrides to CreateTheme function
    theme = createTheme(theme, {
        components: { ...overrides(theme) },
        typography: { ...typography(theme) }
    })

    // ** Set responsive font sizes to true
    if (themeConfig.responsiveFontSizes) {
        theme = responsiveFontSizes(theme)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles styles={() => GlobalStyling(theme) as any} />
            {children}
        </ThemeProvider>
    )
}

export default ThemeComponent
