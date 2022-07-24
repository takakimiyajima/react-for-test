import styled from 'styled-components'

type ContainerProps = {
  name: string
  defaultValue?: string
  value?: string
  options: {
    label: string
    value: string
  }[]
}

type Props = {
  className?: string
} & ContainerProps

const Component = ({
  className,
  name,
  defaultValue = '',
  value = '',
  options = [],
}: Props) => {
  return (
    <div className={className}>
      <select className='' defaultValue={defaultValue} value={value}>
        {options.map(({ label, value }, index) => (
          <option key={`${name}-${index}`} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}

const StyledComponent = styled(Component)`
  width: 100%;
  padding: 4px 16px;

  .title {
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }
  .input {
    margin-left: 8px;
    padding: 4px;
    border: solid 1px ${(props) => props.theme.gray};
    border-radius: 4px;
  }
`

const Dropdown = (props: ContainerProps) => {
  return <StyledComponent {...props} />
}

export { Dropdown }
