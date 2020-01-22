import Color from '../types/Color'

export const computeTarget = (min: number, max: number, target: number) => {
  return target * (max-min) /100 + min
}

export const computeRBGTarget = (minColor: Color, maxColor: Color, target: number) => {
  return {
    r: computeTarget(minColor.r, maxColor.r, target),
    g: computeTarget(minColor.g, maxColor.g, target),
    b: computeTarget(minColor.b, maxColor.b, target),
  }

}