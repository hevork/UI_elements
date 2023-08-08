import { FC } from 'react'

import { ReactComponent as Arrow } from '@/assets/icons/arrow.svg'
import { ReactComponent as Blog } from '@/assets/icons/blog.svg'
import { ReactComponent as Close } from '@/assets/icons/close.svg'
import { ReactComponent as DeleteModal } from '@/assets/icons/delete-modal.svg'
import { ReactComponent as Edit } from '@/assets/icons/edit.svg'
import { ReactComponent as Eye } from '@/assets/icons/eye-icon.svg'
import { ReactComponent as Logo } from '@/assets/icons/logo.svg'
import { ReactComponent as LogoBlack } from '@/assets/icons/logo-black.svg'
import { ReactComponent as Logout } from '@/assets/icons/logout.svg'
import { ReactComponent as PaginationArrow } from '@/assets/icons/pagination-arrow.svg'
import { ReactComponent as Refresh } from '@/assets/icons/refresh.svg'
import { ReactComponent as Upload } from '@/assets/icons/upload.svg'

interface IconProps {
  name: keyof typeof components
  className?: string
  onClick?: () => void
}

const components = {
  close: Close,
  blog: Blog,
  upload: Upload,
  edit: Edit,
  refresh: Refresh,
  paginationArrow: PaginationArrow,
  arrow: Arrow,
  logout: Logout,
  eye: Eye,
  logo: Logo,
  logoBlack: LogoBlack,
  deleteModal: DeleteModal,
}

const Icon: FC<IconProps> = ({ className, name, onClick }) => {
  const DynamicIcon = components[name]
  return <DynamicIcon className={className} onClick={onClick} />
}

export default Icon
