import { createContext, useState, ReactNode } from 'react'
import { ThemeSettings, ThemeContextValue } from 'types/context/theme'
import themeConfig from 'styles/theme/config'

const initialTheme: ThemeSettings = {
    themeColor: 'primary',
    mode: themeConfig.mode
}

export const ThemeContext = createContext<ThemeContextValue>({
    saveThemeSettings: () => null,
    themeSettings: initialTheme
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [themeSettings, setThemeSettings] = useState<ThemeSettings>(initialTheme)

    const saveThemeSettings = (updatedTheme: ThemeSettings) => {
        setThemeSettings(updatedTheme)
    }

    return <ThemeContext.Provider value={{ themeSettings, saveThemeSettings }}>{children}</ThemeContext.Provider>
}

export const ThemeConsumer = ThemeContext.Consumer
