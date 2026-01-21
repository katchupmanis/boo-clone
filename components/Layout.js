// components/Layout.js

import Link from 'next/link';
import { useRouter } from 'next/router';
// heroicons imports
import {
  HomeIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  ChartBarIcon,
  BeakerIcon,
  BookOpenIcon,
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
// mock data import
import { currentUser } from "../data/mockData";
import { useState, useRef, useEffect } from "react";

export default function Layout({ children }) {
  const router = useRouter();
  const navItems = [
    { name: "Home", href: "#", icon: HomeIcon },
    { name: "Match", href: "#", icon: HeartIcon },
    { name: "Messages", href: "#", icon: ChatBubbleLeftRightIcon },
    { name: "Profile", href: "#", icon: UserIcon },
    { name: "Personality Database", href: "#", icon: ChartBarIcon },
    { name: "Personality Tests", href: "#", icon: BeakerIcon },
    { name: "Resources", href: "#", icon: BookOpenIcon },
  ];
  const isActive = (path) => router.pathname === path;
  return (
    <div className="min-h-screen flex flex-col main-wrapper">
      {/* Header */}
      <header className="bg-gray-950 fixed top-0 left-0 right-0 h-16 border-b border-gray-900 z-10">
        <div className="container-full mx-auto px-4 py-4 flex items-center justify-between gap-6">
          {/* Left: Logo */}
          <button className="flex items-center gap-1 text-2xl font-bold text-gray-300 cursor-pointer">
            <Bars3Icon className="w-6 h-6 text-gray-300" />
            Boo
          </button>
          {/* Center: Search Input */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Right: Notification and Menu */}
          <div className="flex items-center gap-4">
            <BellIcon className="w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-300" />
            <a href="#" className="flex items-center gap-2"><span className="w-4 h-4 bg-amber-500 inline-block rounded-full">&nbsp;</span> 320</a>

            {/* User Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  {currentUser.name}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 bg-gray-950 border-r border-gray-900 overflow-y-auto hidden lg:block">
        <nav className="p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href='{item.href}'
                className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  isActive(item.href)
                    ? 'text-cyan-500'
                    : 'text-gray-300'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className=''>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 bg-gray-950 text-gray-300 min-h-full pt-16">
        {children}
      </main>
    </div>
  );
}
