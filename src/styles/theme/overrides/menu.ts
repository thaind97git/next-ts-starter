// ** MUI Imports
import { Theme } from '@mui/material/styles'

const Menu = (theme: Theme) => {
    return {
        MuiMenu: {
            styleOverrides: {
                root: {
                    '& .MuiMenu-paper': {
                        borderRadius: 5,
                        boxShadow: theme.palette.mode === 'light' ? theme.shadows[1] : theme.shadows[1]
                    }
                }
            }
        }
    }
}

export default Menu
