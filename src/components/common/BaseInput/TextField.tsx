import styled from 'styled-components'

type ContainerProps = {
  label: string
  name: string
  type?: 'text' | 'number'
  placeholder?: string
  setValue: (value: string) => void
}

type Props = {
  className?: string
} & ContainerProps

const Component = ({
  className,
  label,
  name,
  type = 'text',
  placeholder = '',
  setValue,
}: Props) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        className='input'
        type={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
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

const TextField = (props: ContainerProps) => {
  return <StyledComponent {...props} />
}

export { TextField }
