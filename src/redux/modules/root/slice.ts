import { createSlice } from '@reduxjs/toolkit'
import { handleSetLoading } from './reducer'
import { RootState } from './type'

const initialState: RootState = {
    loading: 0
}

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        onSetLoading: handleSetLoading
    }
})

export const { onSetLoading } = rootSlice.actions

export default rootSlice.reducer
