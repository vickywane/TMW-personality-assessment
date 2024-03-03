export const TRAIT_STORAGE_KEY = "TRAITS_APP_STORAGE_KEY";

export const setStorageItem = (key: string, data: any) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export const getStorageItem = (key: string) => {
  const data = localStorage.getItem(key);

  if (!data) {
    return console.log(`Data for ${key} not found`);
  }

  return JSON.parse(data);
};

export const clearStorageItem = (key: string) => {
  return localStorage.removeItem(key);
};
