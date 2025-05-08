'use client'

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaLinkedin, FaTiktok, FaPinterest } from 'react-icons/fa';
import type { IconType } from 'react-icons';

import Link from 'next/link';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface PlatformStats {
  platform: string;
  followers: number;
  engagement: number;
  growth: number;
  icon: IconType;
  color: string;
  href: string;
}

export default function DashboardPage() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  // Generate growth data for each platform
  const generateGrowthData = (startValue: number, growthRate: number) => {
    return months.map((_, index) => {
      return Math.round(startValue * (1 + (growthRate / 100) * index));
    });
  };

  // Generate engagement data
  const generateEngagementData = (baseEngagement: number) => {
    return months.map(() => {
      // Add small random variations to engagement
      const variation = (Math.random() - 0.5) * 0.5; // ±0.25%
      return +(baseEngagement + variation).toFixed(1);
    });
  };
  const stats: PlatformStats[] = [
    // In a real app, this would fetch from your API
    {
      platform: 'Twitter',
      followers: 12500,
      engagement: 4.5,
      growth: 2.5,
      icon: FiTwitter,
      color: 'rgb(29, 161, 242)',
      href: '/social/twitter'
    },
    {
      platform: 'Instagram',
      followers: 25800,
      engagement: 7.8,
      growth: 3.8,
      icon: FiInstagram,
      color: 'rgb(219, 39, 119)',
      href: '/social/instagram',
    },
    {
      platform: 'LinkedIn',
      followers: 15000,
      engagement: 3.2,
      growth: 2.2,
      icon: FaLinkedin,
      color: 'rgb(0, 123, 255)',
      href: '/social/linkedin',
    },
    {
      platform: 'TikTok',
      followers: 20000,
      engagement: 8.5,
      growth: 4.5,
      icon: FaTiktok,
      color: 'rgb(33, 33, 33)',
      href: '/social/tiktok',
    },
    {
      platform: 'YouTube',
      followers: 30000,
      engagement: 5.1,
      growth: 3.2,
      icon: FiYoutube,
      color: 'rgb(255, 0, 0)',
      href: '/social/youtube',
    },
    {
      platform: 'Pinterest',
      followers: 10000,
      engagement: 2.8,
      growth: 1.8,
      icon: FaPinterest,
      color: 'rgb(255, 192, 0)',
      href: '/social/pinterest',
    }
  ];
  return (
    <div className="h-full">
      <div className="mb-4">
        <p className="text-sm text-muted-foreground text-center">
          Monitor your social media performance across all platforms
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        {stats.map((stat) => (
          <Link
            key={stat.platform}
            href={stat.href}
            className="block transition-transform hover:scale-105"
          >
            <div className="p-6 rounded-lg bg-card border border-border hover:bg-accent/10 transition-colors flex flex-col items-center space-y-2">
              <stat.icon
                className="h-8 w-8 mb-2"
                style={{ color: stat.color }}
              />
              <dt className="text-sm font-medium text-muted-foreground truncate mb-1">
                {stat.platform}
              </dt>
              <dd className="text-xl font-semibold text-foreground">
                {stat.followers.toLocaleString()}
              </dd>
              <div className="text-sm font-semibold text-green-400">
                +{stat.growth}%
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-card shadow rounded-lg p-4 border border-border">
          <h2 className="text-lg font-medium text-foreground mb-4">Follower Growth</h2>
          <div className="h-[350px] w-full">
            <Line
              height="100%"
              data={{
                labels: months,
                datasets: stats.map((stat) => ({
                  label: stat.platform,
                  data: generateGrowthData(stat.followers, stat.growth),
                  borderColor: stat.color,
                  backgroundColor: stat.color,
                  tension: 0.4,
                  pointRadius: 4,
                  pointHoverRadius: 6
                }))
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top' as const,
                    align: 'start' as const,
                    labels: {
                      color: 'hsl(var(--muted-foreground))',
                      padding: 20,
                      font: { size: 12 },
                      boxWidth: 15,
                      usePointStyle: true
                    }
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'hsl(var(--border))',
                      display: true
                    },
                    border: {
                      display: false
                    },
                    ticks: {
                      color: 'hsl(var(--muted-foreground))',
                      callback: function(value: string | number) {
                        if (typeof value === 'number') {
                          return Intl.NumberFormat('en-US', {
                            notation: 'compact',
                            maximumFractionDigits: 1
                          }).format(value);
                        }
                        return value;
                      }
                    }
                  },
                  x: {
                    grid: {
                      color: 'hsl(var(--border))',
                      display: true
                    },
                    border: {
                      display: false
                    },
                    ticks: {
                      color: 'hsl(var(--muted-foreground))'
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="bg-card shadow rounded-lg p-4 border border-border">
          <h2 className="text-lg font-medium text-foreground mb-4">Engagement Overview</h2>
          <div className="h-[350px] w-full">
            <Line
              height="100%"
              data={{
                labels: months,
                datasets: stats.map((stat) => ({
                  label: stat.platform,
                  data: generateEngagementData(stat.engagement),
                  borderColor: stat.color,
                  backgroundColor: stat.color,
                  tension: 0.4,
                  pointRadius: 4,
                  pointHoverRadius: 6
                }))
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top' as const,
                    align: 'start' as const,
                    labels: {
                      color: 'hsl(var(--muted-foreground))',
                      padding: 20,
                      font: { size: 12 },
                      boxWidth: 15,
                      usePointStyle: true
                    }
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'hsl(var(--border))',
                      display: true
                    },
                    border: {
                      display: false
                    },
                    ticks: {
                      color: 'hsl(var(--muted-foreground))',
                      callback: function(value: string | number) {
                        if (typeof value === 'number') {
                          return `${value}%`;
                        }
                        return value;
                      }
                    }
                  },
                  x: {
                    grid: {
                      color: 'hsl(var(--border))',
                      display: true
                    },
                    border: {
                      display: false
                    },
                    ticks: {
                      color: 'hsl(var(--muted-foreground))'
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
