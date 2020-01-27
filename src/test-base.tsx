import React from 'react';
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

export const mockProvider = (component: any, initialState:any ) => {
  const mockStore = configureStore()
  let store = mockStore(initialState)
  return renderer.create(<Provider store={store}>{component}</Provider>)
}