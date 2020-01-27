import reducer from './reducer'
import { ActionsTypes } from './actions'
import { initialState } from './reducer'

describe ('reducer', () => {

  describe ( `${ActionsTypes.USER_PUSH}`, () => {
    test('returns updated count', () => {
      const params = {
        state: {
          ...initialState,
          count: 0
        } ,
        action: {
          type: ActionsTypes.USER_PUSH
        }
      }
      const result = reducer(params.state, params.action)
      const expected = {
        ...initialState,
        count: params.state.count + 10
      }
      expect(result).toStrictEqual(expected)
    })

  })

  describe ( `${ActionsTypes.TIMEOUT}`, () => {
    test('returns updated count', () => {
      const params = {
        state: {
          ...initialState,
          count: 0
        } ,
        action: {
          type: ActionsTypes.TIMEOUT
        }
      }
      const result = reducer(params.state, params.action)
      const expected = {
        ...initialState,
        count: params.state.count - 10
      }
      expect(result).toStrictEqual(expected)
    })

  })

  describe ( 'default', () => {
    test('returns updated state', () => {
      const params = {
        state: {
          ...initialState,
          count: 5
        } ,
        action: {
          type: null
        }
      }
      const result = reducer(params.state, params.action)
      const expected = {
        ...initialState,
        count: params.state.count
      }
      expect(result).toStrictEqual(expected)
    })

  })

  describe ( 'default', () => {
    test('returns updated state', () => {
      const params = {
        action: {
          type: null
        }
      }
      const result = reducer( undefined, params.action)
      const expected = {
        ...initialState
      }
      expect(result).toStrictEqual(expected)
    })

  })


})