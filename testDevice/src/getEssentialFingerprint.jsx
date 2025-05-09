import React, { useEffect, useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const getEssentialFingerprint = async () => {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  const components = result.components;

  return {
    userAgent: components.userAgent?.value,
    language: components.language?.value,
    timezone: components.timezone?.value,
    screen: `${components.screen?.value.width}x${components.screen?.value.height}`,
    deviceMemory: components.deviceMemory?.value,
    cpuCores: components.cpuCores?.value,
    platform: components.platform?.value,
  };
};

const hashData = async (data) => {
  const encoder = new TextEncoder();
  const jsonStr = JSON.stringify(data);
  const encoded = encoder.encode(jsonStr);
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoded);
  return [...new Uint8Array(hashBuffer)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, 8); // Short unique hash
};

export default function DeviceIdModal() {
  const [deviceId, setDeviceId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedId = localStorage.getItem('device_id');
    if (storedId) {
      setDeviceId(storedId);
    } else {
      (async () => {
        const fingerprint = await getEssentialFingerprint();
        const id = await hashData(fingerprint);
        localStorage.setItem('device_id', id);
        setDeviceId(id);
        setShowModal(true);
      })();
    }
  }, []);

  if (!deviceId || !showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Your Device ID</h2>
        <p className="text-gray-800 text-lg break-all">{deviceId}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
