import { ReactNode } from 'react';
import DashboardLayoutWrapper from './_components/dashboard-layout-wrapper';

interface IProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  return <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>;
};

export default DashboardLayout;
