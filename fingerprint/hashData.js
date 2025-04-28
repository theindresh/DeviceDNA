import { encodeText } from '../utils/encode.js';

export const hashData = async (text) => {
  const encoded = encodeText(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoded);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
};
