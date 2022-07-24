import { ReactNode } from 'react'
import styled from 'styled-components'

export type SvgIconProps = {
  children?: ReactNode
  className?: string
  color?: string
  height?: string | number
  onClick?: (event?: React.SyntheticEvent) => void
  small?: boolean
  large?: boolean
  viewBox?: string
  width?: string | number
}

const Component = ({
  children,
  className,
  onClick,
  small = false,
  large = false,
  height = large ? 40 : small ? 16 : 24,
  width = large ? 40 : small ? 16 : 24,
  viewBox = `0 0 ${width} ${height}`,
}: SvgIconProps) => {
  return (
    <svg
      className={className}
      width={`${width}`}
      height={`${height}`}
      viewBox={viewBox}
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      fill='none'
    >
      {children}
    </svg>
  )
}

const StyledComponent = styled(Component)`
  color: ${(props) => (props.color ? props.color : 'currentColor')};
  cursor: ${(props) => (props.onClick ? 'pointer' : 'inherit')};
`

const SvgIcon = (props: SvgIconProps) => {
  return <StyledComponent {...props} />
}

export { SvgIcon }
