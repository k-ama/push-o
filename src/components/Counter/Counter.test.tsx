import React from 'react';
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Counter from './Counter'

describe('Counter', () => {

  describe('Snapshot', () => {
    test('renders Counter', () => {
      const mockStore = configureStore()
      const minColor = {
        r:0,
        g:0,
        b:0
      }
      const maxColor = {
        r:100,
        g:100,
        b:100
      }
      const initialState = {
        count:0
      }
      let store = mockStore(initialState)
      const component = renderer.create(<Provider store={store}><Counter minColor={minColor} maxColor={maxColor}/></Provider>)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })


})
