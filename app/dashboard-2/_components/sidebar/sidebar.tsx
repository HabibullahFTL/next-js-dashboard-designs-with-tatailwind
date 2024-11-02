'use client';
import { Button } from '@/components/ui/button';
import { dashboardRoutes } from '@/lib/routes/dashboard-2';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { AiOutlineTransaction } from 'react-icons/ai';
import { GoArrowLeft } from 'react-icons/go';
import { GrTransaction } from 'react-icons/gr';
import { IoWalletOutline } from 'react-icons/io5';
import { LuCalculator } from 'react-icons/lu';
import { RxDashboard } from 'react-icons/rx';
import SiteLogo from '../site-logo';
import SidebarItem from './sidebar-item';

interface IProps {
  showAlways?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ showAlways, onClose }: IProps) => {
  const pathname = usePathname();

  const sidebarMenuList = [
    {
      label: 'Dashboard',
      href: dashboardRoutes?.home,
      icon: RxDashboard,
      className: 'text-orange-500',
    },
    {
      label: 'Transactions',
      href: dashboardRoutes?.transactions,
      icon: AiOutlineTransaction,
      className: 'text-blue-600',
    },
    {
      label: 'My Wallets',
      href: dashboardRoutes?.myWallets,
      icon: IoWalletOutline,
      className: 'text-green-500',
    },
    {
      label: 'Budgets',
      href: dashboardRoutes?.budgets,
      icon: LuCalculator,
      className: 'text-cyan-500',
    },
    {
      label: 'Manage Loans',
      href: dashboardRoutes?.manageLoans,
      icon: GrTransaction,
      className: 'text-purple-700',
    },
  ];

  return (
    <aside
      className={cn(
        'w-72 h-full shrink-0 bg-background border-r-border border-r transition-all',
        !showAlways && 'absolute -left-96 top-0 lg:left-0 lg:relative'
      )}
    >
      {/* Sidebar Logo */}
      <div className="w-full h-20 p-6 flex items-center justify-between">
        <SiteLogo />
        <Button variant={'ghost'} className="px-2 lg:hidden" onClick={onClose}>
          <GoArrowLeft className="text-xl text-secondary-foreground/80" />
        </Button>
      </div>

      {/* Sidebar Menu Items  */}
      <div className="my-8 px-2 space-y-1">
        {sidebarMenuList?.map((item) => (
          <SidebarItem
            isActive={pathname === item?.href}
            key={item?.label}
            label={item?.label}
            href={item?.href}
            icon={item?.icon}
            className={item?.className}
            onClose={onClose}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
