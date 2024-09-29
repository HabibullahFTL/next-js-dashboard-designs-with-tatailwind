import DashboardLayout from '@/components/dashboard';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const Dashboard1Layout = ({ children }: IProps) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Dashboard1Layout;
