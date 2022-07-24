import styled from 'styled-components'
import Select from 'react-select'

type ContainerProps = {
  label: string
  name: string
  value: string
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

const Component = ({ className, name, label, value, options, setValue }: Props) => {
  const defaultValue = options.find((option) => option.value === value)

  return (
    <div className={className}>
      <div className='label'>{label}</div>
      <Select
        className='select'
        name={name}
        options={options}
        onChange={(e) => setValue(e?.value ?? '')}
        defaultValue={defaultValue}
      />
    </div>
  )
}

const StyledComponent = styled(Component)`
  width: 100%;
  padding: 4px 16px;

  > .label {
    width: 60px;
    font-weight: bold;
    font-size: 16px;
  }

  > .select {
    width: ${(props) => props.width ?? '200px'};
  }
`

const Dropdown = (props: ContainerProps) => {
  return <StyledComponent {...props} />
}

export { Dropdown }
