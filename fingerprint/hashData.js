export const hashData = async (text) => {
  // Encode the text data using TextEncoder
  const encoder = new TextEncoder();
  const encoded = encoder.encode(text);

  // Generate SHA-256 hash from the encoded text
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoded);

  // Convert the hash to a hexadecimal string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
};
