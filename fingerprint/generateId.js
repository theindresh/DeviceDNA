import { hashData } from './hashData.js';

/**
 * Generates a stable, hashed device ID using fingerprint data and optional salt.
 * @param {Object} fingerprintData - Core fingerprint object (sorted internally).
 * @param {string} salt - A secondary fingerprint or identifier for stability.
 * @returns {Promise<string>} - The generated hash.
 */
export const generateDeviceId = async (fingerprintData, getFingerprintData) => {
  // Sort object keys and stringify to ensure consistent input
  const stableData = Object.keys(fingerprintData)
    .sort()
    .reduce((acc, key) => {
      acc[key] = fingerprintData[key];
      return acc;
    }, {});

  // Concatenate stable fingerprint data and raw fingerprint
  const inputString = JSON.stringify(stableData) + getFingerprintData;  // Always stringify the data

  // Generate the consistent hash for the fingerprint
  return await hashData(inputString); // Generate the hash for the consistent fingerprint
};
