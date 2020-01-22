import reducer from './reducer'
import { ActionsTypes } from './actions'

describe ('reducer', () => {

  describe ( `${ActionsTypes.USER_PUSH}`, () => {
    test('returns updated count', () => {
      const params = {
        state: {
          count: 0
        } ,
        action: {
          type: ActionsTypes.USER_PUSH
        }
      }
      const result = reducer(params.state, params.action)
      const expected = {
        count: params.state.count + 10
      }
      expect(result).toStrictEqual(expected)
    })

  })

  describe ( `${ActionsTypes.TIMEOUT}`, () => {
    test('returns updated count', () => {
      const params = {
        state: {
          count: 0
        } ,
        action: {
          type: ActionsTypes.TIMEOUT
        }
      }
      const result = reducer(params.state, params.action)
      const expected = {
        count: params.state.count - 10
      }
      expect(result).toStrictEqual(expected)
    })

  })

  describe ( 'default', () => {
    test('returns updated state', () => {
      const params = {
        state: {
          count: 5
        } ,
        action: {
          type: null
        }
      }
      const result = reducer(params.state, params.action)
      const expected = {
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
        count: 0
      }
      expect(result).toStrictEqual(expected)
    })

  })


})