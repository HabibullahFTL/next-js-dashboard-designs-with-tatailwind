import { ReactNode } from 'react';
import DashboardSideBar from './dashboard-side-bar';
import DashboardTopNav from './dashboard-top-nav';

interface IProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <DashboardSideBar />
      <DashboardTopNav>
        <main className="flex flex-col gap-4 p-4 lg:gap-6">{children}</main>
      </DashboardTopNav>
    </div>
  );
};
export default DashboardLayout;
