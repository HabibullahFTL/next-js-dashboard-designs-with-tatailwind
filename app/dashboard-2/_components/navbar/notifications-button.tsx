import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getFormattedTimeDistance } from '@/lib/data-formatters/format-time';
import { BellIcon } from 'lucide-react';

const NotificationsButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'secondary'}
          size={'icon'}
          className="rounded-full border border-border dark:border-gray-700 outline-none focus-visible:ring-transparent"
        >
          <BellIcon className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end">
        <DropdownMenuLabel className="px-3 py-2 flex justify-between">
          Notifications
        </DropdownMenuLabel>
        <div className="max-h-48 grid gap-y-1 overflow-x-hidden overflow-y-auto mb-2">
          {[1, 2, 3, 4]?.map((item) => (
            <div
              key={item}
              className="px-3 py-1 items-center flex gap-x-2 cursor-pointer hover:bg-secondary rounded"
            >
              <div className="flex shrink-0 items-center justify-center size-8 bg-secondary rounded-full border border-border">
                <BellIcon className="size-5" />
              </div>
              <div className="w-44">
                <p className="truncate text-sm font-medium">
                  Lorem ipsum lorem ipsum lorem ipsum
                </p>
                <p className="text-xs truncate">
                  {getFormattedTimeDistance(new Date('2024-10-30 12:39:40 PM'))}
                </p>
              </div>
            </div>
          ))}
        </div>
        <DropdownMenuSeparator />
        <div className="px-3">
          <Button size={'sm'} variant={'link'} className="w-full">
            View All Notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationsButton;
