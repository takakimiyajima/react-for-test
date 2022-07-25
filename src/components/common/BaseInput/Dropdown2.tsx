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
      <div className='selectWrap'>
        <select className='dropdown' value={value} onChange={(e) => setValue(e.target.value)}>
          <option value={''}>Non-selected</option>
          {options.map(({ label, value }, index) => (
            <option key={`${name}-${index}`} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 16px;

  .label {
    width: 60px;
    font-weight: bold;
    font-size: 16px;
  }

  .selectWrap {
    position: relative;
    &::after {
      position: absolute;
      width: 24px;
      height: 24px;
      background-image: url('/arrow-down.svg');
      top: 50%;
      right: 10px;
      pointer-events: none;
      content: '';
    }

    > .dropdown {
      width: ${({ width}) => width ?? '200px'};
      margin-left: 8px;
      padding: 8px 4px;
      border: solid 1px ${({ theme }) => theme.color.gray};
      border-radius: 4px;
    }
  }
`

const Dropdown = (props: ContainerProps) => {
  return <StyledComponent {...props} />
}

export { Dropdown }
