import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@example.com',
      passwordHash: adminPassword,
    },
  })

  // Create platform followers
  const platforms = ['Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'Pinterest']
  for (const platform of platforms) {
    await prisma.platformFollowers.create({
      data: {
        userId: admin.id,
        platform: platform as any,
        followersCount: Math.floor(Math.random() * 10000),
      },
    })
  }

  // Create engagement metrics
  for (const platform of platforms) {
    await prisma.engagementMetric.create({
      data: {
        userId: admin.id,
        platform: platform as any,
        engagementCount: Math.floor(Math.random() * 5000),
        followerGrowth: Math.floor(Math.random() * 1000),
      },
    })
  }

  // Create audience reach data
  for (const platform of platforms) {
    await prisma.audienceReach.create({
      data: {
        platform: platform as any,
        percentage: Math.random() * 100,
      },
    })
  }

  // Create platform performance data
  const metricTypes = ['Engagement', 'Reach', 'Growth']
  for (const platform of platforms) {
    for (const metricType of metricTypes) {
      await prisma.platformPerformance.create({
        data: {
          platform: platform as any,
          metricType: metricType as any,
          value: Math.floor(Math.random() * 10000),
        },
      })
    }
  }

  console.log('Database seeded!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
