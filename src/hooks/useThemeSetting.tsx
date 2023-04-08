import { useContext } from 'react'
import { ThemeContext } from 'context/themeContext'
import { ThemeContextValue } from 'types/context/theme'

export const useThemeSettings = (): ThemeContextValue => useContext(ThemeContext)
