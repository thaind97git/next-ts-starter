import React from 'react'
import { AppProps } from 'next/app'
import { Provider, useSelector } from 'react-redux'
import { SnackbarProvider } from 'notistack'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { wrapper } from 'redux/store'
import { NextPage } from 'next'
import { EmotionCache } from '@emotion/cache'
import { createEmotionCache } from 'styles/theme/utils/create-emotion-cache'

import { loadingSelector } from 'redux/modules/root/selector'
import { Backdrop } from 'components/Backdrop'
import { toastDefaultOptions } from 'services/toast'

import { ThemeConsumer, ThemeProvider } from 'context/themeContext'
import ThemeComponent from 'styles/theme/ThemeComponent'
import { useThemeSettings } from 'hooks/useThemeSetting'
import { getTheme } from 'services/localStorage/theme'
import { CacheProvider } from '@emotion/react'
import { LocalizationProvider } from '@mui/x-date-pickers'

type ExtendedAppProps = AppProps & {
    Component: NextPage
    emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const AppBackdrop = () => {
    const appLoading: number = useSelector(loadingSelector)
    return (
        <Backdrop
            sx={{
                color: (theme) => theme.palette.text.primary
            }}
            open={!!appLoading}
        ></Backdrop>
    )
}

const AppTheme = () => {
    const { themeSettings, saveThemeSettings } = useThemeSettings()

    React.useEffect(() => {
        const theme = getTheme()
        if (theme) {
            saveThemeSettings({ ...themeSettings, ...JSON.parse(theme as string) })
        }
    }, [])
    return null
}

function MyApp({ Component, ...rest }: ExtendedAppProps) {
    const { store, props } = wrapper.useWrappedStore(rest)
    const { emotionCache = clientSideEmotionCache, pageProps } = props

    return (
        <Provider store={store}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider>
                    <ThemeConsumer>
                        {({ themeSettings }) => {
                            return (
                                <ThemeComponent themeSettings={themeSettings}>
                                    {
                                        <SnackbarProvider {...toastDefaultOptions}>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <AppBackdrop />
                                                <AppTheme />
                                                <Component {...pageProps} />
                                            </LocalizationProvider>
                                        </SnackbarProvider>
                                    }
                                </ThemeComponent>
                            )
                        }}
                    </ThemeConsumer>
                </ThemeProvider>
            </CacheProvider>
        </Provider>
    )
}

export default MyApp
