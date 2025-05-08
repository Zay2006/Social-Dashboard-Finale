'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from "next-auth/react"
import { BsBell, BsSun, BsMoon } from 'react-icons/bs'
import { 
  FaHome, 
  FaUsers, 
  FaChartLine, 
  FaCog,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
  FaPinterest,
  FaSignOutAlt
} from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: FaHome },
  { name: 'Users', href: '/dashboard/users', icon: FaUsers },
  { name: 'Analytics', href: '/dashboard/analytics', icon: FaChartLine },
  { name: 'Settings', href: '/dashboard/settings', icon: FaCog },
]

const platforms = [
  { name: 'Twitter', icon: FaTwitter, color: 'text-blue-400' },
  { name: 'Instagram', icon: FaInstagram, color: 'text-pink-500' },
  { name: 'LinkedIn', icon: FaLinkedin, color: 'text-blue-600' },
  { name: 'TikTok', icon: FaTiktok, color: 'text-gray-900 dark:text-white' },
  { name: 'YouTube', icon: FaYoutube, color: 'text-red-600' },
  { name: 'Pinterest', icon: FaPinterest, color: 'text-red-500' },
]

export default function Navigation() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 dark:bg-gray-900">
        <div className="flex flex-col h-full">
          <div className="flex items-center h-16 px-4">
            <h1 className="text-xl font-bold text-white">Social Dashboard</h1>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="px-2 py-4 space-y-8">
              <div className="space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        group flex items-center px-2 py-2 text-sm font-medium rounded-md
                        ${pathname === item.href
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }
                      `}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  )
                })}
              </div>
              <div>
                <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Social Media
                </h3>
                <div className="mt-2 space-y-1">
                  {platforms.map((platform) => {
                    const Icon = platform.icon
                    return (
                      <a
                        key={platform.name}
                        href="#"
                        className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        <Icon className={`mr-3 h-5 w-5 ${platform.color}`} />
                        {platform.name}
                      </a>
                    )
                  })}
                </div>
              </div>
            </nav>
          </div>
          {/* User controls moved to sidebar bottom */}
          <div className="border-t border-gray-800 p-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-gray-400 hover:text-gray-200 transition-colors rounded-full hover:bg-gray-800"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <BsSun className="w-5 h-5" /> : <BsMoon className="w-5 h-5" />}
              </button>
              <button 
                className="p-2 text-gray-400 hover:text-gray-200 transition-colors rounded-full hover:bg-gray-800"
                aria-label="View notifications"
              >
                <BsBell className="w-5 h-5" />
              </button>
              <div className="relative group">
                <button className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-gray-600 transition-colors">
                    {session?.user?.email?.[0]?.toUpperCase()}
                  </div>
                </button>
                <div className="absolute bottom-full right-0 mb-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                  <button
                    onClick={() => signOut()}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                  >
                    <FaSignOutAlt className="mr-3 h-4 w-4" />
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
