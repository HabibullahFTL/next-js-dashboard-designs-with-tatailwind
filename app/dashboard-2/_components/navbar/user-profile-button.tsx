import ThemeToggle from '@/components/theme-provider/theme-toggler';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import LanguageDropdown from '../language-dropdown';

const UserProfileButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none focus-visible:ring-offset-0">
        {/* User profile button  */}
        <div className="flex gap-x-2.5 items-center">
          <div className="hidden md:block text-right">
            <p className="font-medium text-secondary-foreground/80 text-sm">
              Habibullah Bahar
            </p>
            <p className="text-[11px] text-muted-foreground">Web Developer</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <div className="relative w-10 aspect-square rounded-full overflow-hidden border border-border bg-secondary">
              <Image
                fill
                src="https://www.habibullahftl.com/images/hero-bg-cutout.png"
                className="object-cover"
                alt={''}
              />
            </div>
            <div className="hidden md:block">
              <MdOutlineKeyboardArrowDown className="text-2xl text-muted-foreground" />
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuItem className="px-3 py-2 flex justify-between">
          View Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="px-3 py-2 flex justify-between">
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="px-3 flex justify-between">
          Theme <ThemeToggle variant="default" />
        </DropdownMenuItem>
        <DropdownMenuLabel className="py-1">
          <LanguageDropdown className="py-1 h-8" dropdownClassName="!w-56" />
        </DropdownMenuLabel>
        <DropdownMenuItem className="px-3 flex justify-between">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileButton;
