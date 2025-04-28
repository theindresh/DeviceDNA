import { collectFingerprintData } from './fingerprint/collectData.js';
import { generateDeviceId } from './fingerprint/generateId.js';

export const getDeviceFingerprint = async () => {
  const fingerprintData = await collectFingerprintData();
  const deviceId = await generateDeviceId(fingerprintData);
  
  return {
    deviceId,
    ...fingerprintData,
  };
};