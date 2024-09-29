'use client';

import { Separator } from '@/components/ui/separator';
import { Banknote, Folder, HomeIcon, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SidebarItem from './sidebar-item';

const DashboardSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="lg:block hidden border-r h-full">
      <div className="flex h-full max-h-screen flex-col gap-2 ">
        <div className="flex h-[55px] items-center justify-between border-b px-3 w-full">
          <Link className="flex items-center gap-2 font-semibold ml-1" href="/">
            <span className="">Nextjs Starter Kit</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2 ">
          <nav className="grid items-start px-4 text-sm font-medium">
            <SidebarItem
              pathname={pathname}
              href="/dashboard-1"
              label="Home"
              icon={HomeIcon}
            />
            <SidebarItem
              pathname={pathname}
              href="/dashboard-1/projects"
              label="Projects"
              icon={Folder}
            />
            <SidebarItem
              pathname={pathname}
              href="/dashboard-1/finance"
              label="Finance"
              icon={Banknote}
            />
            <Separator className="my-3" />
            <SidebarItem
              variant="button"
              pathname={pathname}
              href=""
              label="Logout"
              icon={LogOut}
            />
          </nav>
        </div>
      </div>
    </div>
  );
};
export default DashboardSideBar;
