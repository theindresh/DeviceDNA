import { collectFingerprintData } from './fingerprint/collectData.js';
import { generateDeviceId } from './fingerprint/generateId.js';
import { getFingerprint } from '@thumbmarkjs/thumbmarkjs';

export const getDeviceFingerprint = async () => {
  const fingerprintData = await collectFingerprintData();
  const grtFingerprintData = await getFingerprint();

  const deviceId = await generateDeviceId(fingerprintData, grtFingerprintData);
  
  return {
    deviceId,
    ...fingerprintData,
  };
};