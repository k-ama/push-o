import { computeTarget, computeRBGTarget } from './utils'
describe ('utils', () => {
  describe ('computeRGB', () => {

    test('zero', () => {
      const params = {
        min: 0,
        max: 0,
        target: 0
      }
      const result = computeTarget(params.min, params.max, params.target)
      const expected = 0
      expect(result).toBe(expected)
    })

  })
  describe ('computeRBGTarget', () => {

    test('', () => {
      const params = {
        minColor: {
          r: 0,
          g: 0,
          b: 0
        },
        maxColor: {
          r: 100,
          g: 100,
          b: 100
        },
        target: 50
      }
      const result = computeRBGTarget(params.minColor, params.maxColor, params.target)
      const expected = {
        r: 50,
        g: 50,
        b: 50
      }
      expect(result).toStrictEqual(expected)
    })
  })

})
