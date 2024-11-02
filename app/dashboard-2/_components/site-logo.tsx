import { siteInfo } from '@/lib/default-data/site-info';
import { cn } from '@/lib/utils';
import darkFullLogo from '@/public/dashboard-2/logo-full-dark.png';
import lightFullLogo from '@/public/dashboard-2/logo-full-light.png';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  className?: string;
}

const SiteLogo = ({ className }: IProps) => {
  return (
    <Link href={'/dashboard'} className={cn('block w-40', className)}>
      <Image
        src={darkFullLogo}
        alt={siteInfo?.title}
        className="hidden dark:block"
      />
      <Image
        src={lightFullLogo}
        alt={siteInfo?.title}
        className="dark:hidden block"
      />
    </Link>
  );
};

export default SiteLogo;
