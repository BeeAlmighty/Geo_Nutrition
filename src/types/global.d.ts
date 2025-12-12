export {};

declare global {
  interface Window {
    gtag: Gtag.Gtag;
  }
}

// Define the Gtag namespace types
declare namespace Gtag {
  interface ConfigParams {
    page_path?: string;
  }

  interface EventParams {
    event_category?: string;
    event_label?: string;
    value?: number;
  }

  type Gtag = (command: "config" | "event" | "js", targetId: string | Date, config?: ConfigParams | EventParams) => void;
}
