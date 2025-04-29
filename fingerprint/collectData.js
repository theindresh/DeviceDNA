export const collectFingerprintData = async () => {
  // Collect stable fingerprint data
  return {
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,  // Time zone should be consistent
    platform: navigator.platform,  // Platform is usually consistent across browsers
    localStorageAvailable: typeof localStorage !== 'undefined',  // Check if localStorage is available
  };
};
