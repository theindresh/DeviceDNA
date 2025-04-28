# DeviceDNA

DeviceDNA is a lightweight JavaScript library to generate a unique fingerprint for each user's device based on browser and system properties.

## 🚀 Features

- Unique device fingerprint generation
- Platform information detection
- LocalStorage availability check
- Screen resolution capture
- Timezone identification
- Promise-based easy-to-use API

## 📦 Installation

```bash
npm install devicedna



import { getDeviceFingerprint } from 'devicedna';

const getFingerprint = async () => {
  const fingerprint = await getDeviceFingerprint();
  console.log(fingerprint);
};

getFingerprint();