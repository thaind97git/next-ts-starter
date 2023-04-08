// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Util Import
import { hexToRGBA } from 'styles/theme/utils/hex-to-rgba'

const Backdrop = (theme: Theme) => {
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor:
                        theme.palette.mode === 'light'
                            ? `rgba(${theme.palette.background.default}, 0.7)`
                            : hexToRGBA(theme.palette.background.default, 0.7),
                    borderRadius: 0
                },
                invisible: {
                    backgroundColor: 'transparent'
                }
            }
        }
    }
}

export default Backdrop
