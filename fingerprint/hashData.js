export const hashData = (obj) => {
  const normalized = normalizeAndSort(obj);
  const fingerprintString = JSON.stringify(normalized);
  return djb2Hash(fingerprintString);
};

function normalizeAndSort(value) {
  if (value === null) return 'null';
  if (value === undefined) return 'undef';

  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      return value.map(normalizeAndSort);
    }

    const sortedObj = {};
    const keys = Object.keys(value).sort();
    for (const key of keys) {
      sortedObj[key] = normalizeAndSort(value[key]);
    }
    return sortedObj;
  }

  return value;
}

function djb2Hash(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & 0xFFFFFFFF;
  }
  return Math.abs(hash).toString(16);
}
