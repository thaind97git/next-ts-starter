// ** MUI Imports
import { Theme } from '@mui/material/styles'

const GlobalStyles = (theme: Theme) => {
    return {
        '*::-webkit-scrollbar': {
            width: '6px',
            height: '6px'
        },
        '*::-webkit-scrollbar-track': {
            WebkitBoxShadow: `inset 0 0 6px ${theme.palette.mode === 'light' ? theme.palette.divider : theme.palette.background.default}`,
            backgroundColor: '#F5F5F5'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.mode === 'light' ? theme.palette.divider : theme.palette.background.default
        }
    }
}

export default GlobalStyles
