import ThemeToggler from '@/components/theme-provider/toggler';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <Button>Hello</Button>

      <ThemeToggler />
    </div>
  );
}
