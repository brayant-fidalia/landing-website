export interface App {
  name: string;
  description: string;
  icon?: string; // path under /public
  appStoreUrl?: string;
  playStoreUrl?: string;
}

// Add apps here and they will appear on the home page.
// While this array is empty, a "coming soon" card is shown.
export const apps: App[] = [];
