export const collectData = () => {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: navigator.languages.join(','),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: `${screen.width}x${screen.height}`,
    colorDepth: screen.colorDepth,
    deviceMemory: navigator.deviceMemory || 'unknown',
    cpuCores: navigator.hardwareConcurrency || 'unknown',
    touchSupport: 'ontouchstart' in window ? 'yes' : 'no',
  };
};
