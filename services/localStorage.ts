export const TRAIT_STORAGE_KEY = "TRAITS_APP_STORAGE_KEY";

export const setStorageItem = (key: string, data: any) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

/**
 *  name: 'John Doe',
 *  lastQuestionId: 'XXXXXXXX',
 *  createdAt: '',
 *  assesments:  {
      id: "ac8a1e71-03e3-48c2-80e4-3d3660e0e5f5",
      question:
        "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
      selectedAnswer: "Don’t dare to interrupt them",
    },
 */

export const getStorageItem = (key: string) => {
  const data = localStorage.getItem(key);

  if (!data) {
    return console.error(`Data for ${key} not found`);
  }

  return JSON.parse(data);
};

export const clearStorageItem = (key: string) => {
  return localStorage.removeItem(key);
};
