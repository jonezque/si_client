import styled from 'styled-components'
import {
  space,
  layout,
  color,
  flexbox,
  LayoutProps,
  ColorProps,
  SpaceProps,
  FlexboxProps,
  GridProps,
  border,
  BorderProps,
  shadow,
  display,
  DisplayProps,
  grid,
  ShadowProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps
} from 'styled-system'

export const Box = styled.div<LayoutProps & ColorProps & SpaceProps & BorderProps & ShadowProps & DisplayProps>`
  ${space}
  ${layout}
  ${color}
  ${border}
  ${shadow}
  ${display}
`

export const Flex = styled(Box)<FlexboxProps>`
  ${flexbox}
  display: flex;
`

export const Grid = styled(Box)<GridProps>`
  ${grid}
  display: grid;
`

export const Text = styled(Box)<FontFamilyProps & FontSizeProps & FontWeightProps & FontSizeProps>`
  ${fontFamily}
  ${fontWeight}
  ${fontStyle}
  ${fontSize}
`
