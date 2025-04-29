export const collectFingerprintData = async () => {
  return {
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: `${screen.width}x${screen.height}`, 
    platform: navigator.platform,
    localStorageAvailable: typeof localStorage !== 'undefined',
  };
};
