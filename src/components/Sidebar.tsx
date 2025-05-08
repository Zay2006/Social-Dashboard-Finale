'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  FaPinterest
} from 'react-icons/fa'

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
  { name: 'TikTok', icon: FaTiktok, color: 'text-gray-900' },
  { name: 'YouTube', icon: FaYoutube, color: 'text-red-600' },
  { name: 'Pinterest', icon: FaPinterest, color: 'text-red-500' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-5 flex-1 px-2 space-y-8">
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
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                      `}
                    >
                      <Icon
                        className={`
                          mr-3 flex-shrink-0 h-6 w-6
                          ${pathname === item.href
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500'}
                        `}
                      />
                      {item.name}
                    </Link>
                  )
                })}
              </div>
              <div>
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Platforms
                </h3>
                <div className="mt-2 space-y-1">
                  {platforms.map((platform) => {
                    const Icon = platform.icon
                    return (
                      <Link
                        key={platform.name}
                        href={`/dashboard/platform/${platform.name.toLowerCase()}`}
                        className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <Icon className={`mr-3 flex-shrink-0 h-6 w-6 ${platform.color}`} />
                        {platform.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
