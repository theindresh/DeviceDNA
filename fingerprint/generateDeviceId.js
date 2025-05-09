export async function collectFingerprintData() {
  const plugins = Array.from(navigator.plugins).map(p => p.name);

  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: navigator.languages,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: {
      width: screen.width,
      height: screen.height,
    },
    colorDepth: screen.colorDepth,
    deviceMemory: navigator.deviceMemory || 'unknown',
    cpuCores: navigator.hardwareConcurrency || 'unknown',
    touchSupport: 'ontouchstart' in window,
    plugins,
  };
}
