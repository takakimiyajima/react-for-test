import styled from 'styled-components'

type ContainerProps = {
  label: string
  name: string
  defaultValue?: string
  value?: string
  options: {
    label: string
    value: string
  }[]
  setValue: (value: string) => void
  width?: number | string
}

type Props = {
  className?: string
} & ContainerProps

const Component = ({ className, name, label, value = '', options = [], setValue }: Props) => {
  return (
    <div className={className}>
      <label className='label'>{label}</label>
      <select className='dropdown' value={value} onChange={(e) => setValue(e.target.value)}>
        <option value={''}>Non-selected</option>
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
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 16px;

  .label {
    font-weight: bold;
    font-size: 16px;
  }
  .dropdown {
    width: ${(props) => props.width ?? '200px'};
    margin-left: 8px;
    padding: 8px 4px;
    border: solid 1px ${(props) => props.theme.gray};
    border-radius: 4px;
  }
`

const Dropdown = (props: ContainerProps) => {
  return <StyledComponent {...props} />
}

export { Dropdown }
