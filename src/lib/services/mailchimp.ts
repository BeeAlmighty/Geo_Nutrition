// @ts-ignore - Mailchimp package doesn't have TypeScript definitions
import mailchimp from '@mailchimp/mailchimp_marketing';
import crypto from 'crypto';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY || '',
  server: process.env.MAILCHIMP_SERVER_PREFIX || '', // e.g., "us19"
});

interface SubscribeData {
  email: string;
  firstName: string;
  lastName: string;
  source?: string;
  tags?: string[];
}

interface MailchimpResponse {
  success: boolean;
  mailchimpId?: string;
  alreadySubscribed?: boolean;
}

export async function subscribeToMailchimp(data: SubscribeData): Promise<MailchimpResponse> {
  try {
    const listId = process.env.MAILCHIMP_AUDIENCE_ID || '';

    if (!listId) {
      throw new Error('MAILCHIMP_AUDIENCE_ID not configured');
    }

    const response = await mailchimp.lists.addListMember(listId, {
      email_address: data.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: data.firstName,
        LNAME: data.lastName,
      },
      tags: data.tags || ['coaching-lead'],
    });

    console.log('✅ Subscribed to Mailchimp:', response.id);
    
    return {
      success: true,
      mailchimpId: response.id,
    };
  } catch (error: unknown) {
    const mailchimpError = error as {
      status?: number;
      response?: {
        body?: {
          title?: string;
          id?: string;
        };
      };
      message?: string;
    };

    console.error('❌ Mailchimp error:', mailchimpError.response?.body || mailchimpError.message);
    
    // Handle duplicate email
    if (
      mailchimpError.status === 400 && 
      mailchimpError.response?.body?.title === 'Member Exists'
    ) {
      return {
        success: true,
        mailchimpId: mailchimpError.response.body.id,
        alreadySubscribed: true,
      };
    }
    
    throw error;
  }
}

export async function addTagsToContact(email: string, tags: string[]): Promise<void> {
  try {
    const listId = process.env.MAILCHIMP_AUDIENCE_ID || '';
    
    // Get subscriber hash using ES6 crypto
    const subscriberHash = crypto
      .createHash('md5')
      .update(email.toLowerCase())
      .digest('hex');

    await mailchimp.lists.updateListMemberTags(listId, subscriberHash, {
      tags: tags.map(tag => ({ name: tag, status: 'active' })),
    });

    console.log('✅ Tags added to Mailchimp contact');
  } catch (error: unknown) {
    const mailchimpError = error as {
      response?: {
        body?: unknown;
      };
      message?: string;
    };

    console.error('❌ Error adding tags:', mailchimpError.response?.body || mailchimpError.message);
  }
}