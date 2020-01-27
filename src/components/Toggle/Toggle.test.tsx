import React from 'react'
import Toggle from './Toggle'
import renderer from 'react-test-renderer'

describe('Toggle', () => {

  describe('Snapshot', () => {
    test('renders Toggle', () => {
      const component = renderer.create(<Toggle/>)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })

})
