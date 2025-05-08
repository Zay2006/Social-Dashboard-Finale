'use client'

import SocialMediaPage from '@/components/social/SocialMediaPage'

export default function TwitterPage() {
  const metrics = [
    {
      name: 'Followers',
      value: 12500,
      change: 2.5,
    },
    {
      name: 'Engagement Rate',
      value: 3.2,
      change: -0.5,
    },
    {
      name: 'Impressions',
      value: 45000,
      change: 5.7,
    },
  ]

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Followers',
        data: [12200, 12250, 12300, 12350, 12400, 12450, 12500],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Engagement',
        data: [320, 350, 300, 280, 290, 310, 330],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
      },
    ],
  }

  return <SocialMediaPage platform="Twitter" metrics={metrics} chartData={chartData} />
}
