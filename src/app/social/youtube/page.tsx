'use client'

import SocialMediaPage from '@/components/social/SocialMediaPage'

export default function YouTubePage() {
  const metrics = [
    {
      name: 'Subscribers',
      value: 45800,
      change: 2.1,
    },
    {
      name: 'Total Views',
      value: 1250000,
      change: 5.4,
    },
    {
      name: 'Watch Time (hrs)',
      value: 75000,
      change: 3.8,
    },
  ]

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Subscribers',
        data: [44800, 45000, 45200, 45400, 45500, 45600, 45800],
        borderColor: 'rgb(255, 0, 0)',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
      },
      {
        label: 'Views',
        data: [1200000, 1210000, 1220000, 1230000, 1235000, 1240000, 1250000],
        borderColor: 'rgb(145, 70, 255)',
        backgroundColor: 'rgba(145, 70, 255, 0.5)',
      },
    ],
  }

  return <SocialMediaPage platform="YouTube" metrics={metrics} chartData={chartData} />
}
