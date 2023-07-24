import axios from 'axios';

const apiUrl = 'http://localhost:8080/auth';
const loginUrl = `${apiUrl}/login`;
const registerUrl = `${apiUrl}/register`;

export function login(username, password) {
  return axios.post(loginUrl, { login: username, password });
}

export function fetchDataWithToken(endpoint, token) {
  return axios.get(endpoint, { headers: { Authorization: `Bearer ${token}` } });
}

export function register(user, token) {
  return axios.post(registerUrl, user, { headers: { Authorization: `Bearer ${token}` } });
}
