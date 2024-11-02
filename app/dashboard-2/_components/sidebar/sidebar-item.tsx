import { cn } from '@/lib/utils';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface IProps {
  isActive?: boolean;
  label: string;
  icon: IconType;
  href: string;
  className: string;
  onClose?: () => void;
}

const SidebarItem = ({
  isActive,
  label,
  icon: Icon,
  href,
  className,
  onClose,
}: IProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'group/sidebar-item w-full px-4 rounded-lg py-2 hover:bg-secondary transition flex font-medium text-base gap-2.5 items-center text-secondary-foreground/80',
        isActive ? 'bg-secondary' : ''
      )}
      onClick={onClose}
    >
      <span
        className={cn(
          'group-hover/sidebar-item:bg-background inline-flex items-center justify-center size-10 rounded-full bg-accent p-1',
          isActive ? 'bg-background/50' : ''
        )}
      >
        <Icon className={cn('text-lg', className)} />
      </span>{' '}
      {label}
    </Link>
  );
};

export default SidebarItem;
