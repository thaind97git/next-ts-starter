import { createSelector } from '@reduxjs/toolkit'
import { rootSlice } from './slice'
import { RootState } from './type'

export const rootSelector = (state: { [rootSlice.name]: RootState }) => state.root

export const loadingSelector = createSelector(rootSelector, (root) => root.loading)
