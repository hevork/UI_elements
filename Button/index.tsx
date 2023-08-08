import { FC, ReactNode } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

interface Props {
  className?: string
  children: ReactNode
  type?: 'button' | 'reset' | 'submit'
  styleType?: 'primary' | 'transparentWithIcon' | 'transparentRed'
  onClick?: () => void
  to?: string
}

export const Button: FC<Props> = ({
  className,
  children,
  type = 'button',
  styleType = 'primary',
  onClick = () => null,
  to,
}) => {
  if (to) {
    return (
      <Link to={to} className={cn(styles.button, styles[styleType], className)}>
        {children}
      </Link>
    )
  }
  return (
    <button
      className={cn(styles.button, styles[styleType], className)}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}
