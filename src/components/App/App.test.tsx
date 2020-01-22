import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

jest.mock("../Counter/Counter")
jest.mock("../Toggle/Toggle")

describe('App', () => {

  describe('Snapshot', () => {
    test('renders App with no props', () => {
      const component = renderer.create(<App />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })

})
