/**
 * Collects basic fingerprint data from the browser environment.
 * @returns {Promise<Object>} A stable fingerprint data object.
 */
export const collectFingerprintData = async () => {
  return {
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    platform: navigator.platform || 'unknown',
    localStorageAvailable: isLocalStorageAvailable(),
    userAgent: navigator.userAgent || 'unknown',
  };
};

/**
 * Checks if localStorage is available.
 * @returns {boolean}
 */
const isLocalStorageAvailable = () => {
  try {
    const testKey = '__test__';
    localStorage.setItem(testKey, '1');
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
};
