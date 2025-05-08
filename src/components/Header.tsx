'use client'

import { signOut, useSession } from "next-auth/react";
import { BsBell, BsSun, BsMoon } from 'react-icons/bs';
import React from 'react';

export default function Header() {
  const { data: session } = useSession();
  const [isDark, setIsDark] = React.useState(true);

  return (
    <header className="sticky top-0 z-50 bg-[#1a1d27] border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-end items-center h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-gray-400 hover:text-gray-200 transition-colors rounded-full hover:bg-gray-800"
            >
              {isDark ? <BsSun className="w-5 h-5" /> : <BsMoon className="w-5 h-5" />}
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-200 transition-colors rounded-full hover:bg-gray-800">
              <BsBell className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 cursor-pointer hover:bg-gray-600 transition-colors">
              {session?.user?.email?.[0]?.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
