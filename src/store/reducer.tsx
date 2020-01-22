import { Reducer } from 'redux'
import { ActionsTypes } from './actions'

export interface AppState {
  readonly count: number
}

// Type-safe initialState!
const initialState: AppState = {
  count: 0
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<AppState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.USER_PUSH: {
      return { ...state, count: state.count + 10 }
    }
    case ActionsTypes.TIMEOUT: {
      return { ...state, count: state.count - 10 }
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export default reducer