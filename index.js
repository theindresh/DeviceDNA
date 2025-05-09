import { generateDeviceId } from "./fingerprint/generateId";


export const getDeviceFingerprint = async () => {
  try {
    debugger
    const deviceId = await generateDeviceId();
    console.log('Device ID:', deviceId);
    return deviceId;
  } catch (e) {
    console.error('Error creating device ID:', e);
  }
}

