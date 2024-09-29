import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ElementType } from 'react';
import { Button } from '../ui/button';

interface IProps {
  isActive?: boolean;
  variant?: 'button' | 'link';
  href?: string;
  pathname: string;
  label: string;
  icon: ElementType;
  className?: string;
  onClick?: () => void;
}

const SidebarItem = ({
  isActive,
  variant = 'link',
  href,
  pathname,
  label,
  icon: Icon,
  className,
  onClick,
}: IProps) => {
  const isItemActive =
    typeof isActive === 'boolean' ? isActive : pathname === href;

  // Shared styles
  const containerClassName = cn(
    'flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
    isItemActive &&
      'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50',
    variant === 'button' ? 'justify-start' : '',
    className
  );

  const innerAreaClassName = cn(
    'border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white'
  );

  // Icon
  const IconComponent = <Icon className="h-3 w-3" />;

  if (variant === 'link') {
    return (
      <Link href={href || '#'} className={containerClassName} onClick={onClick}>
        <div className={innerAreaClassName}>{IconComponent}</div>
        {label}
      </Link>
    );
  }

  return (
    <Button variant="ghost" className={containerClassName} onClick={onClick}>
      <div className={innerAreaClassName}>{IconComponent}</div>
      {label}
    </Button>
  );
};

export default SidebarItem;
