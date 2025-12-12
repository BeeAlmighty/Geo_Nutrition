import { NextRequest, NextResponse } from 'next/server';
// import connectDB from '@/lib/db/mongodb';
import Lead from '@/lib/db/models/Lead';
import { subscribeToMailchimp } from '@/lib/services/mailchimp';

export async function POST(request: NextRequest) {
  try {
    console.log('📥 Received lead submission request');
    
    const body = await request.json();
    console.log('📄 Request body:', { ...body, email: body.email?.substring(0, 3) + '***' });
    
    // Validate required fields
    if (!body.fullName || !body.email) {
      console.log('❌ Validation failed: Missing fields');
      return NextResponse.json(
        { error: 'Full name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      console.log('❌ Validation failed: Invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate full name (at least 2 words)
    const nameParts = body.fullName.trim().split(/\s+/);
    if (nameParts.length < 2) {
      console.log('❌ Validation failed: Name must have first and last name');
      return NextResponse.json(
        { error: 'Please enter both first and last name' },
        { status: 400 }
      );
    }
    // // Connect to MongoDB
    // console.log('🔌 Connecting to MongoDB...');
    // await connectDB();
    // console.log('✅ MongoDB connected');

    // Check if lead already exists
    const existingLead = await Lead.findOne({ 
      email: body.email.trim().toLowerCase() 
    });

    if (existingLead) {
      console.log('⚠️ Duplicate email detected:', body.email);
      return NextResponse.json(
        { 
          success: true,
          message: 'You are already subscribed! We\'ll be in touch soon.',
          leadId: existingLead._id.toString(),
        },
        { status: 200 }
      );
    }
    
    // Extract UTM parameters
    const cookies = request.cookies;
    
    // Parse name
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    // Create lead in MongoDB
    console.log('💾 Saving lead to MongoDB...');
    const lead = await Lead.create({
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      source: body.source || 'coaching_page',
      timestamp: body.timestamp || new Date(),
      utm_source: cookies.get('utm_source')?.value || body.utm_source,
      utm_medium: cookies.get('utm_medium')?.value || body.utm_medium,
      utm_campaign: cookies.get('utm_campaign')?.value || body.utm_campaign,
      utm_term: body.utm_term,
      utm_content: body.utm_content,
    });

    console.log('✅ Lead saved to MongoDB:', lead._id);

    // Subscribe to Mailchimp (non-blocking - won't fail if Mailchimp fails)
    let mailchimpSuccess = false;
    try {
      console.log('📧 Subscribing to Mailchimp...');
      const mailchimpResult = await subscribeToMailchimp({
        email: lead.email,
        firstName,
        lastName,
        source: lead.source,
        tags: ['coaching-lead', lead.source],
      });

      // Update lead with Mailchimp info
      lead.mailchimpSubscribed = true;
      lead.mailchimpId = mailchimpResult.mailchimpId;
      await lead.save();

      console.log('✅ Lead subscribed to Mailchimp:', mailchimpResult.mailchimpId);
      mailchimpSuccess = true;
    } catch (mailchimpError) {
      console.error('⚠️ Mailchimp subscription failed (lead still saved):', mailchimpError);
      // Don't fail the request if Mailchimp fails - lead is still saved
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We\'ll be in touch within 24 hours.',
        leadId: lead._id.toString(),
        mailchimpSubscribed: mailchimpSuccess,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error processing lead:', error);
    
    // Log detailed error information
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    // Handle duplicate key error (MongoDB unique constraint)
    const mongoError = error as { code?: number };
    if (mongoError.code === 11000) {
      console.log('⚠️ Duplicate key error - email already exists');
      return NextResponse.json(
        { 
          success: true,
          message: 'You are already subscribed! We\'ll be in touch soon.',
        },
        { status: 200 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Internal server error. Please try again or call us directly.',
        details: process.env.NODE_ENV === 'development' 
          ? (error instanceof Error ? error.message : 'Unknown error')
          : undefined
      },
      { status: 500 }
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// export async function GET(_request: NextRequest) {
//   try {
//     console.log('📊 Retrieving leads from MongoDB...');
    
//     // TODO: Add authentication here for production
//     // const session = await getServerSession();
//     // if (!session?.user?.isAdmin) {
//     //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     // }
    
//     await connectDB();
    
//     interface LeadDocument {
//       _id: { toString: () => string };
//       [key: string]: unknown;
//     }
    
//     const leads = await Lead.find({})
//       .sort({ createdAt: -1 })
//       .limit(100)
//       .select('-__v') // Exclude MongoDB version key
//       .lean() as LeadDocument[];

//     console.log(`✅ Retrieved ${leads.length} leads`);

//     return NextResponse.json(
//       { 
//         success: true,
//         total: leads.length,
//         leads: leads.map((lead) => ({
//           ...lead,
//           _id: lead._id.toString(), // Convert ObjectId to string
//         })),
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('❌ Error retrieving leads:', error);
//     return NextResponse.json(
//       { 
//         error: 'Internal server error',
//         details: process.env.NODE_ENV === 'development' 
//           ? (error instanceof Error ? error.message : 'Unknown error')
//           : undefined
//       },
//       { status: 500 }
//     );
//   }
// }