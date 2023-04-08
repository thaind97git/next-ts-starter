import { enqueueSnackbar, SnackbarProviderProps } from 'notistack'

export const toastDefaultOptions: SnackbarProviderProps = {
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
    }
}

export const toastSuccess = (msg: string, options?: SnackbarProviderProps) => {
    enqueueSnackbar(msg, { variant: 'success', ...options })
}

export const toastError = (msg: string, options?: SnackbarProviderProps) => {
    enqueueSnackbar(msg, { variant: 'error', ...options })
}

export const toastWarning = (msg: string, options?: SnackbarProviderProps) => {
    enqueueSnackbar(msg, { variant: 'warning', ...options })
}

export const toastInfo = (msg: string, options?: SnackbarProviderProps) => {
    enqueueSnackbar(msg, { variant: 'info', ...options })
}
