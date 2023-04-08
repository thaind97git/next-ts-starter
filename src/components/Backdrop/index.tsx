import React from 'react'
import { Backdrop as MBackdrop, BackdropProps } from '@mui/material'
import { Spinner } from 'components/Spinner'

interface Props extends BackdropProps {}

export const Backdrop: React.FC<Props> = ({ sx, ...rest }) => {
    return (
        <MBackdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, ...sx }} {...rest}>
            <Spinner color="inherit" loading />
        </MBackdrop>
    )
}
