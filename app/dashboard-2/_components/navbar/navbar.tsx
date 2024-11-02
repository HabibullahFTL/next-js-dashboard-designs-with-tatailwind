import ThemeToggle from '@/components/theme-provider/theme-toggler';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTitle } from '@/components/ui/drawer';
import { useState } from 'react';
import { SlMenu } from 'react-icons/sl';
import { useMediaQuery } from 'usehooks-ts';
import Sidebar from '../sidebar/sidebar';
import SiteLogo from '../site-logo';
import NotificationsButton from './notifications-button';
import UserProfileButton from './user-profile-button';

const Navbar = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const [open, setOpen] = useState(false);

  const onOpenDrawer = () => {
    setOpen(true);
  };

  const onCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 gap-x-2 left-0 h-16 bg-background transition-all flex items-center justify-between px-3 shadow-md dark:border-b dark:border-border">
      <div className="w-0 h-full hidden lg:block" />
      <Button
        variant="outline"
        className="lg:hidden px-3"
        onClick={onOpenDrawer}
      >
        <SlMenu className="text-xl" />
      </Button>
      <SiteLogo className="lg:hidden" />
      <div className="flex gap-x-2.5 items-center shrink-0 cursor-pointer">
        <ThemeToggle variant="lg" className="hidden lg:block" />
        <NotificationsButton />
        <UserProfileButton />
      </div>
      <Drawer
        direction="left"
        open={!isDesktop && open}
        onClose={onCloseDrawer}
      >
        <DrawerContent className="h-full w-72 rounded-none">
          <DrawerTitle className="hidden" />
          <Sidebar showAlways onClose={onCloseDrawer} />
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
