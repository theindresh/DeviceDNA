import { hashData } from './hashData.js';

export const generateDeviceId = async (fingerprintData, getFingerprintData) => {
  // Sort object keys and stringify to ensure consistent input
  const stableData = Object.keys(fingerprintData).sort().reduce((acc, key) => {
    acc[key] = fingerprintData[key];
    return acc;
  }, {});
  
  const inputString = JSON.stringify(stableData) + getFingerprintData // Always stringify the data to ensure it's stable
  return await hashData(inputString); // Generate the hash for the consistent fingerprint
};