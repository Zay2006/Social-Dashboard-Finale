'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="h-screen flex bg-[#0f1117]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <main className="py-6">
          {children}
        </main>
      </div>
    </div>
  )
}
