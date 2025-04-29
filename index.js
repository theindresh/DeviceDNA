import { collectFingerprintData } from './fingerprint/collectData.js'; 
import { generateDeviceId } from './fingerprint/generateId.js';
import { getFingerprint } from '@thumbmarkjs/thumbmarkjs';

/**
 * Generates a full fingerprint object including device ID and metadata.
 * @returns {Promise<Object>} The fingerprint object.
 */
export const getDeviceFingerprint = async () => {
  try {
    const fingerprintData = await collectFingerprintData();
    const rawFingerprint = await getFingerprint();

    const deviceId = await generateDeviceId(fingerprintData, rawFingerprint);

    return {
      success: true,
      status: 200,
      message: 'Fingerprint generated successfully',
      data: {
        deviceId,
      },
    };
  } catch (error) {
    console.error('Error generating device fingerprint:', error);
    throw error;
  }
};
