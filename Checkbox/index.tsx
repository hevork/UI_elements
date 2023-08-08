import cn from 'classnames'
import { ChangeEvent, FC, ReactNode } from 'react'
import styles from './Checkbox.module.scss'
import { CheckIcon } from '../Icon'

interface Props {
  className?: string
  children: ReactNode
  value: string
  checked: boolean
  disabled: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: FC<Props> = ({
  className,
  children,
  value,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <label className={cn(styles.label, className)}>
      <input
        className={styles.nativeCheckbox}
        type="checkbox"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
      <span
        className={cn(
          styles.checkbox,
          { [styles.checked]: checked },
          { [styles.disabled]: disabled },
        )}
      >
        <CheckIcon className={styles.check} />
      </span>
      <span className={styles.text}>{children}</span>
    </label>
  )
}
