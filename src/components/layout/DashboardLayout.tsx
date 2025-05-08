'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiHome, FiUsers, FiSettings, FiTwitter, FiInstagram, FiYoutube, FiSun, FiMoon, FiBell } from 'react-icons/fi'
import { FaLinkedin, FaTiktok, FaPinterest } from 'react-icons/fa'

interface NavItem {
  name: string
  href: string
  icon: React.ElementType
}

const mainNavItems: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: FiHome },
  { name: 'Users', href: '/users', icon: FiUsers },
  { name: 'Settings', href: '/settings', icon: FiSettings },
]

const socialNavItems: NavItem[] = [
  { name: 'Twitter', href: '/social/twitter', icon: FiTwitter },
  { name: 'Instagram', href: '/social/instagram', icon: FiInstagram },
  { name: 'LinkedIn', href: '/social/linkedin', icon: FaLinkedin },
  { name: 'TikTok', href: '/social/tiktok', icon: FaTiktok },
  { name: 'YouTube', href: '/social/youtube', icon: FiYoutube },
  { name: 'Pinterest', href: '/social/pinterest', icon: FaPinterest },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [darkMode, setDarkMode] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', String(newDarkMode))
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const NavLink = ({ item }: { item: NavItem }) => {
    const isActive = pathname === item.href
    return (
      <Link
        href={item.href}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
          isActive
            ? 'bg-indigo-500/20 text-indigo-400'
            : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
        }`}
      >
        <item.icon className="mr-3 h-5 w-5" />
        {item.name}
      </Link>
    )
  }

  return (
    <div className="min-h-screen bg-[#0f1117] overflow-hidden">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-[#1a1d27] border-r border-gray-800/50">
        <div className="flex flex-col h-full">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 mb-4">
              <h1 className="text-xl font-bold text-white">Social Dashboard</h1>
            </div>
            <nav className="mt-5 flex-1 space-y-1 px-2">
              <div className="space-y-1">
                {mainNavItems.map((item) => (
                  <NavLink key={item.name} item={item} />
                ))}
              </div>
              <div className="mt-8">
                <h3 className="px-3 text-sm font-medium text-gray-400">
                  Social Media
                </h3>
                <div className="mt-1 space-y-1">
                  {socialNavItems.map((item) => (
                    <NavLink key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64 bg-[#0f1117]">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 flex h-16 bg-[#1a1d27] border-b border-gray-800/50">
          <div className="flex-1 px-6 flex justify-end">
            <div className="flex items-center space-x-4">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-1 rounded-full text-gray-400 hover:text-gray-200 transition-colors"
              >
                {darkMode ? <FiSun className="h-6 w-6" /> : <FiMoon className="h-6 w-6" />}
              </button>

              {/* Notifications */}
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-200 transition-colors"
              >
                <FiBell className="h-6 w-6" />
              </button>

              {/* Profile dropdown */}
              <div className="relative">
                <button className="max-w-xs rounded-full flex items-center text-sm focus:outline-none">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                    alt="User avatar"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
