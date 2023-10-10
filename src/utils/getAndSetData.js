export const setData = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getData = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

export const clearData = (name) => {
  localStorage.removeItem(name);
};
