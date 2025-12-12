import { NextRequest, NextResponse } from 'next/server'

interface UTMData {
  utm_source: string | null
  utm_campaign: string | null
  utm_medium: string | null
  utm_content: string | null
  utm_term: string | null
  timestamp: string
  userAgent: string
  referrer: string
  pageUrl: string
}

export async function POST(request: NextRequest) {
  try {
    const data: UTMData = await request.json()

    // ✅ LOG UTM DATA TO CONSOLE (DEV)
    console.log('✅ UTM Parameters captured:', {
      source: data.utm_source,
      campaign: data.utm_campaign,
      medium: data.utm_medium,
      timestamp: data.timestamp,
      url: data.pageUrl,
    })

    // ✅ OPTIONAL: SEND TO EXTERNAL ANALYTICS SERVICE
    // Example: Mixpanel, Segment, or your own database
    // await sendToAnalyticsService(data)

    // ✅ OPTIONAL: STORE IN DATABASE
    // Example: Prisma, MongoDB, Firebase
    // await db.utm.create(data)

    return NextResponse.json(
      {
        success: true,
        message: 'UTM data captured successfully',
        data: {
          source: data.utm_source,
          campaign: data.utm_campaign,
          medium: data.utm_medium,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ UTM logging error:', error)
    return NextResponse.json(
      { error: 'Failed to log UTM parameters' },
      { status: 500 }
    )
  }
}