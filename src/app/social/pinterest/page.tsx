'use client'

import SocialMediaPage from '@/components/social/SocialMediaPage'

export default function PinterestPage() {
  const metrics = [
    {
      name: 'Followers',
      value: 18500,
      change: 1.8,
    },
    {
      name: 'Monthly Views',
      value: 850000,
      change: 4.2,
    },
    {
      name: 'Pin Saves',
      value: 32000,
      change: 3.5,
    },
  ]

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Followers',
        data: [18200, 18250, 18300, 18350, 18400, 18450, 18500],
        borderColor: 'rgb(230, 0, 35)',
        backgroundColor: 'rgba(230, 0, 35, 0.5)',
      },
      {
        label: 'Monthly Views',
        data: [820000, 825000, 830000, 835000, 840000, 845000, 850000],
        borderColor: 'rgb(189, 8, 28)',
        backgroundColor: 'rgba(189, 8, 28, 0.5)',
      },
    ],
  }

  return <SocialMediaPage platform="Pinterest" metrics={metrics} chartData={chartData} />
}
