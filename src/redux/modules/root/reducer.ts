import { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './type'

export const handleSetLoading = (state: RootState, payload: PayloadAction<boolean>) => {
    state.loading = payload.payload ? state.loading + 1 : state.loading - 1
}
