const BASE_URL = 'http://localhost:5000';

export const apiRequest = async (endpoint, method = 'GET', data = null, token = null) => {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const options = {
    method,
    headers,
  };
  if (data) options.body = JSON.stringify(data);
  const res = await fetch(`${BASE_URL}${endpoint}`, options);
  const resData = await res.json().catch(() => ({}));
  return { status: res.status, data: resData };
}; 