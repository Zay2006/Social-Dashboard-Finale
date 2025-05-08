'use client'

import SocialMediaPage from '@/components/social/SocialMediaPage'

export default function InstagramPage() {
  const metrics = [
    {
      name: 'Followers',
      value: 25800,
      change: 3.8,
    },
    {
      name: 'Engagement Rate',
      value: 4.5,
      change: 1.2,
    },
    {
      name: 'Reach',
      value: 75000,
      change: 6.3,
    },
  ]

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Followers',
        data: [25200, 25300, 25400, 25500, 25600, 25700, 25800],
        borderColor: 'rgb(219, 39, 119)',
        backgroundColor: 'rgba(219, 39, 119, 0.5)',
      },
      {
        label: 'Engagement',
        data: [450, 480, 460, 470, 455, 465, 475],
        borderColor: 'rgb(147, 51, 234)',
        backgroundColor: 'rgba(147, 51, 234, 0.5)',
      },
    ],
  }

  return <SocialMediaPage platform="Instagram" metrics={metrics} chartData={chartData} />
}
