import React from 'react'
import { mockProvider } from '../../test-base'
import Counter from './Counter'

describe('Counter', () => {

  describe('Snapshot', () => {
    test('renders Counter', () => {
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
      const component = mockProvider( <Counter minColor={minColor} maxColor={maxColor}/> , initialState)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })


})
