import React from 'react';
import Image from 'next/image';
import SidebarItem from '@/app/components/sidebar-item';

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-auto bg-gray-900">
        <div className="flex flex-row items-center justify-center py-8 mb-11 gap-2">
          <Image
            className=""
            width={24}
            height={24}
            src="/icons/logo.svg"
            alt="logo"
          />
          <span className="text-white font-semibold">TruScape</span>
        </div>
        <ul className="space-y-7">
          <SidebarItem
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="dashboard icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button className="flex items-center gap-2 p-6 mt-auto mx-auto">
          <Image
            width={18}
            height={18}
            src="/icons/arrow-left-exit.svg"
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}
