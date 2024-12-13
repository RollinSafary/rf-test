import { combineReducers } from 'redux'

import { coreSlice } from './slices/core'
import { viewsSlice } from './slices/views'

const reducer = combineReducers({
  core: coreSlice.reducer,
  views: viewsSlice.reducer,
})

export default reducer
