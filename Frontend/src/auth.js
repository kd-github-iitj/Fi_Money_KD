export const setAuth = (token, role) => {
  localStorage.setItem('jwt', token);
  localStorage.setItem('role', role);
};

export const getAuth = () => ({
  token: localStorage.getItem('jwt'),
  role: localStorage.getItem('role'),
});

export const clearAuth = () => {
  localStorage.removeItem('jwt');
  localStorage.removeItem('role');
}; 