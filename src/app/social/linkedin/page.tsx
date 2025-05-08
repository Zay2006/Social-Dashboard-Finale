'use client'

import SocialMediaPage from '@/components/social/SocialMediaPage'

export default function LinkedInPage() {
  const metrics = [
    {
      name: 'Connections',
      value: 8900,
      change: 1.5,
    },
    {
      name: 'Post Views',
      value: 15600,
      change: 4.2,
    },
    {
      name: 'Profile Visits',
      value: 2300,
      change: 2.8,
    },
  ]

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Connections',
        data: [8700, 8750, 8800, 8820, 8850, 8875, 8900],
        borderColor: 'rgb(14, 118, 168)',
        backgroundColor: 'rgba(14, 118, 168, 0.5)',
      },
      {
        label: 'Post Views',
        data: [15000, 15200, 15300, 15400, 15450, 15500, 15600],
        borderColor: 'rgb(29, 161, 242)',
        backgroundColor: 'rgba(29, 161, 242, 0.5)',
      },
    ],
  }

  return <SocialMediaPage platform="LinkedIn" metrics={metrics} chartData={chartData} />
}
