import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function GET() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const [
      platformFollowers,
      engagementMetrics,
      audienceReach,
      platformPerformance
    ] = await Promise.all([
      prisma.platformFollowers.findMany(),
      prisma.engagementMetric.findMany(),
      prisma.audienceReach.findMany(),
      prisma.platformPerformance.findMany()
    ])

    return NextResponse.json({
      platformFollowers,
      engagementMetrics,
      audienceReach,
      platformPerformance
    })
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const { 
      platform,
      followersCount,
      engagementCount,
      followerGrowth
    } = await req.json()

    const [follower, engagement] = await Promise.all([
      prisma.platformFollowers.create({
        data: {
          userId: session.user?.id as string,
          platform,
          followersCount
        }
      }),
      prisma.engagementMetric.create({
        data: {
          userId: session.user?.id as string,
          platform,
          engagementCount,
          followerGrowth
        }
      })
    ])

    return NextResponse.json({ follower, engagement })
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
