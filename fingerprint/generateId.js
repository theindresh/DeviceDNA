import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { collectData } from './collectData.js';
import { hashData } from './hashData.js';

export const generateDeviceId = async () => {
  const baseData = collectData();

  const fpInstance = await FingerprintJS.load();
  const fpResult = await fpInstance.get();

  const components = fpResult.components;

  const fingerprint = {
    userAgent: components.userAgent?.value || '',
    language: components.language?.value || '',
    languages: components.languages?.value?.join(',') || '',
    timezone: components.timezone?.value || '',
    screen: components.screen?.value 
      ? `${components.screen.value.width}x${components.screen.value.height}` 
      : '',
    colorDepth: components.colorDepth?.value || '',
    deviceMemory: components.deviceMemory?.value || '',
    cpuCores: components.cpuCores?.value || '',
    touchSupport: components.touchSupport?.value ? 'yes' : 'no',
    canvas: components.canvas?.value || '',
    audio: components.audio?.value || '',
    webGLVendor: components.webGLVendor?.value || '',
    webGLRenderer: components.webGLRenderer?.value || '',
    devicePixelRatio: components.devicePixelRatio?.value || '',
  };

  const finalData = {
    ...baseData,
    ...fingerprint,
  };

  const deviceId = hashData(finalData);
  return deviceId;
};
