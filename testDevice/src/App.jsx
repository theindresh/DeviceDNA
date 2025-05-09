import { useEffect, useState } from 'react'
import './App.css';
import { getDeviceFingerprint } from '../../index.js';
import DeviceIdModal from './getEssentialFingerprint.jsx';
function App() {
  const [fingerprint, setFingerprint] = useState(null);

  useEffect(() => {
    const fetchFingerprint = async () => {
      try {
        const result = await getDeviceFingerprint();
        setFingerprint(result);
      } catch (error) {
        console.error('Error fetching fingerprint:', error);
      }
    };

    fetchFingerprint();
  }
  , []);
  

  console.log(fingerprint, 'fingerprint');
  

  return (
    <>
 <DeviceIdModal />
      
    </>
  )
}

export default App
