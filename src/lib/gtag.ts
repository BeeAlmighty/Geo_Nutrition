export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-X8KSB4SQ1G';

// ✅ TRACK PAGE VIEWS
export function pageview(url: string) {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', 'page_view', {
			page_path: url,
			page_title: document.title,
		});
	}
}

export interface GtagEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

// ✅ TRACK CUSTOM EVENTS
export const event = (
	action: string,
	category: string,
	label: string,
	value?: number
) => {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value,
		});
	}
};

// ✅ SET USER PROPERTIES
export function setUserProperties(userId: string, userEmail?: string) {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('set', {
			user_id: userId,
			user_email: userEmail,
		});
	}
}

// ✅ CAPTURE UTM PARAMETERS
export function captureUTM() {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    const utm = {
      source: params.get('utm_source'),
      campaign: params.get('utm_campaign'),
      medium: params.get('utm_medium'),
      content: params.get('utm_content'),
      term: params.get('utm_term'),
    }

    // ✅ Send UTM data to GA4
    if (Object.values(utm).some((v) => v !== null)) {
      event('utm_capture', 'marketing', `${utm.source}-${utm.campaign}`, 1)
    }

    return utm
  }
  return {
    source: null,
    campaign: null,
    medium: null,
    content: null,
    term: null,
  }
}

// ✅ TYPE DEFINITION FOR GTAG FUNCTION
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export const trackEvent = ({
  action,
  category,
  label,
  value,
}: GtagEvent): void => {
  if (!GA_ID || typeof window === 'undefined') return;
  
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track specific coaching events
export const trackCoachingEvent = (
  eventName: string,
  params?: Record<string, unknown>
): void => {
  if (!GA_ID || typeof window === 'undefined') return;
  
  window.gtag?.('event', eventName, {
    event_category: 'Coaching',
    ...params,
  });
};

// Track program selections
export const trackProgramSelection = (
  programName: string,
  programPrice: number
): void => {
  trackEvent({
    action: 'select_program',
    category: 'Coaching',
    label: programName,
    value: programPrice,
  });
};

// Track call button clicks
export const trackCallClick = (source: string): void => {
  trackEvent({
    action: 'click_call_button',
    category: 'CTA',
    label: source,
    value: 1,
  });
};

// Track form submissions
export const trackFormSubmission = (
  formName: string,
  success: boolean
): void => {
  trackEvent({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'Lead Generation',
    label: formName,
    value: success ? 1 : 0,
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number): void => {
  if (!GA_ID || typeof window === 'undefined') return;
  
  window.gtag?.('event', 'scroll', {
    event_category: 'Engagement',
    event_label: `${percentage}%`,
    value: percentage,
  });
};
export {}
