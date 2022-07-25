import { css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components'

export const THEME = {
  color: {
    black: '#000',
    darkGrey: '#52595f',
    gray: '#ccc',
    lightGrey: '#eee',
    white: '#fff',
    green: '#2fb09d',
    orange: '#fa6f45',
    beige: '#fdf5dc',
    red: '#ff5655',
    darkRed: '#e44c4c',
    yellow: '#E8CA64',
  },
  media: {
    sm: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (max-width: 640px) {
        ${css(first, ...interpolations)}
      }
    `,
  },
}
