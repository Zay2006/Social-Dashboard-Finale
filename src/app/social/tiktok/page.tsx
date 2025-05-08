'use client'

import SocialMediaPage from '@/components/social/SocialMediaPage'

export default function TikTokPage() {
  const metrics = [
    {
      name: 'Followers',
      value: 35600,
      change: 8.5,
    },
    {
      name: 'Video Views',
      value: 250000,
      change: 12.3,
    },
    {
      name: 'Likes',
      value: 85000,
      change: 6.7,
    },
  ]

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Followers',
        data: [32800, 33500, 34000, 34500, 35000, 35300, 35600],
        borderColor: 'rgb(238, 29, 82)',
        backgroundColor: 'rgba(238, 29, 82, 0.5)',
      },
      {
        label: 'Video Views',
        data: [220000, 225000, 230000, 235000, 240000, 245000, 250000],
        borderColor: 'rgb(0, 242, 234)',
        backgroundColor: 'rgba(0, 242, 234, 0.5)',
      },
    ],
  }

  return <SocialMediaPage platform="TikTok" metrics={metrics} chartData={chartData} />
}
