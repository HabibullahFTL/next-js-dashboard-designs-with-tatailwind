'use client';

import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface CustomSwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  variant?: 'sm' | 'default' | 'lg';
  icons?: {
    enable: React.ReactNode;
    disable: React.ReactNode;
  };
}

const CustomSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  CustomSwitchProps
>(({ className, variant = 'default', icons, ...props }, ref) => {
  const variantClassNames = {
    sm: {
      root: 'h-5 w-9',
      thumb: 'size-4 data-[state=checked]:translate-x-4',
    },
    default: {
      root: 'h-6 w-11',
      thumb: 'size-5 data-[state=checked]:translate-x-5',
    },
    lg: {
      root: 'h-7 w-12',
      thumb: 'size-6 data-[state=checked]:translate-x-5',
    },
  };
  return (
    <SwitchPrimitives.Root
      className={cn(
        'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand data-[state=unchecked]:bg-input',
        variantClassNames?.[variant]?.root,
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none flex items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0',
          variantClassNames?.[variant]?.thumb
        )}
      >
        {props.checked ? icons?.enable : icons?.disable}{' '}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});
CustomSwitch.displayName = SwitchPrimitives.Root.displayName;

export { CustomSwitch };
