import { hashData } from './hashData.js';

/**
 * Generates a stable, hashed device ID using fingerprint data and optional salt.
 * @param {Object} fingerprintData - Core fingerprint object (sorted internally).
 * @param {string} salt - A secondary fingerprint or identifier for stability.
 * @returns {Promise<string>} - The generated hash.
 */
export const generateDeviceId = async (fingerprintData, salt = '') => {
  if (typeof fingerprintData !== 'object' || fingerprintData === null) {
    throw new TypeError('fingerprintData must be a non-null object');
  }

  const stableData = Object.keys(fingerprintData)
    .sort()
    .reduce((acc, key) => {
      acc[key] = fingerprintData[key];
      return acc;
    }, {});

  const inputString = JSON.stringify(stableData) + salt;
  return await hashData(inputString, salt);
};
