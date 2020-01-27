import React from 'react';
import { mockProvider } from '../../test-base'
import App from './App';

jest.mock("../Counter/Counter")
jest.mock("../Toggle/Toggle")

describe('App', () => {

  describe('Snapshot', () => {
    test('renders App with no props', () => {

      const component = mockProvider(<App />, {})
      expect(component.toJSON()).toMatchSnapshot()
    })
  })

})
