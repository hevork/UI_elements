import { ChangeEvent, FC } from 'react'
import cn from 'classnames'
import style from './style.module.scss'

interface Props {
  id?: string
  className?: string
  type?: 'number'
  placeholder: string
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  min?: number
  max?: number
  styleType?: string
  isCanBeEmpty?: boolean
}

export const InputNumber: FC<Props> = ({
  id,
  className,
  type = 'number',
  placeholder,
  value,
  onChange,
  min = 1,
  max,
  styleType,
  isCanBeEmpty,
}) => {
  const changeHandler = (e: any) => {
    if (max && +e.target.value > max) {
      e.target.value = String(max)
    }
    if (e.target.value.length >= 2 && +e.target.value[0] === 0) {
      e.target.value = e.target.value.slice(1)
    }
    if (!isCanBeEmpty && e.target.value === '') {
      e.target.value = min
    }
    onChange(e)
  }
  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key === '+' || e.key === '-' || e.key === 'e') {
      e.preventDefault()
    }
  }

  return (
    <input
      id={id}
      className={cn(style.input, className, { [style.small]: styleType === 'small' })}
      type={type}
      min={min}
      max={max}
      placeholder={placeholder}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e)}
      onKeyDown={(e: any) => onKeyPress(e)}
    />
  )
}
