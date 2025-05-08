'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Navigation from '@/components/Navigation'

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
    <div className="flex h-screen overflow-hidden bg-background">
      <Navigation />
      <div className="flex-1 pl-64">
        <main className="h-full p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
