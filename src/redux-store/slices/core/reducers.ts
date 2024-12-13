import { type SliceCaseReducers } from '@reduxjs/toolkit'
import { ICoreSliceState } from 'redux-store/types/core'

const createReducer = <T extends SliceCaseReducers<ICoreSliceState>>(
  reducer: T,
) => ({ ...reducer })

const reducers = createReducer({})

export default reducers
