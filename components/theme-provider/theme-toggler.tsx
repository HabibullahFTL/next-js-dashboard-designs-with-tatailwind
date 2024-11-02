'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { CustomSwitch } from '@/components/ui/custom-switch';
import { cn } from '@/lib/utils';

interface IProps {
  className?: string;
  variant?: 'sm' | 'default' | 'lg';
}

const ThemeToggle = ({ className, variant = 'default' }: IProps) => {
  const { theme, setTheme } = useTheme();

  const variantClassNames = {
    sm: 'size-2',
    default: 'size-3.5',
    lg: 'size-4',
  };

  return (
    <CustomSwitch
      variant={variant}
      className={className}
      checked={theme === 'dark'}
      onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      icons={{
        enable: (
          <MoonIcon
            className={cn(
              'absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100',
              variantClassNames?.[variant]
            )}
          />
        ),
        disable: (
          <SunIcon
            className={cn(
              'rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0',
              variantClassNames?.[variant]
            )}
          />
        ),
      }}
    />
  );
};

export default ThemeToggle;
