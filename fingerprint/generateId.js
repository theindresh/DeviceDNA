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
  // Use a stable string representation of the fingerprint data and the salt  
  // to generate a consistent hash
  // This ensures that the hash is always the same for the same input data

  // and the same salt, regardless of the order of properties in the object
  
  const inputString = JSON.stringify(stableData) + getFingerprintData // Always stringify the data to ensure it's stable
  return await hashData(inputString); // Generate the hash for the consistent fingerprint
};