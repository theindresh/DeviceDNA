import { encodeText } from '../utils/encode.js';

/**
 * Hashes input text using HMAC-SHA-256 and a secret key (optional).
 * This gives better uniqueness and stability for device ID generation.
 * @param {string} text - The input to hash.
 * @param {string} [secretKey='default_app_key'] - Optional secret key.
 * @returns {Promise<string>} Hex-encoded hash
 */
export const hashData = async (text, secretKey = 'default_app_key') => {
  const keyData = encodeText(secretKey);
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const encodedText = encodeText(text);
  const signature = await crypto.subtle.sign('HMAC', cryptoKey, encodedText);
  const hashArray = Array.from(new Uint8Array(signature));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
};
