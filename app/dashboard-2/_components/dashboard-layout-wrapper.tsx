'use client';
import { ReactNode } from 'react';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';

interface IProps {
  children: ReactNode;
}

const DashboardLayoutWrapper = ({ children }: IProps) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden flex">
      <Sidebar />
      <div className="flex-1 bg-secondary-background overflow-y-auto">
        <Navbar />
        <div className="h-[calc(100%-64px)] p-4 2xl:p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayoutWrapper;
