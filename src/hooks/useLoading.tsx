import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { onSetLoading } from 'redux/modules/root/slice'

const useLoading = () => {
    const dispatch = useDispatch()

    const startLoading = useCallback(() => {
        dispatch(onSetLoading(true))
    }, [])

    const endLoading = useCallback(() => {
        dispatch(onSetLoading(false))
    }, [])

    return {
        startLoading,
        endLoading
    }
}

export default useLoading
