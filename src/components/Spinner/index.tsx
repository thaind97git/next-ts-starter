import { CircularProgress, CircularProgressProps } from '@mui/material'

interface SpinnerProps extends CircularProgressProps {
    loading?: boolean
}

export const Spinner: React.FC<SpinnerProps> = ({ loading = false, ...rest }) => {
    return <CircularProgress variant={loading ? 'indeterminate' : 'determinate'} {...rest} />
}
