import styled from 'styled-components'

type DividerProps = {
  thickness?: string
  orientation?: 'horizontal' | 'vertical'
  width?: string
}

type Props = {
  className?: string
} & DividerProps

const Component = ({ className }: Props) => {
  return <hr className={className} />
}

const StyledComponent = styled(Component)`
  background-color: ${({ theme }) => theme.color.gray};
  width: ${({ orientation, thickness, width }) =>
    width ? width : orientation === 'vertical' ? thickness : '100%'};
  height: ${({ orientation, thickness }) => (orientation === 'horizontal' ? thickness : '100%')};
`

const Divider = ({ orientation = 'horizontal', thickness = '1px', width }: DividerProps) => {
  return <StyledComponent {...{ orientation, thickness, width }} />
}

export { Divider }
