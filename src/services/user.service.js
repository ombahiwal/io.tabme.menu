import axios from 'axios';
import authHeader from './auth-header';

// const API_URL = 'http://192.168.43.80:8006/api/';
const ENV = require('./env-vars');
const API_URL = `${ENV.API_URL}/api/v1/us/`;
// const API_URL = 'https://service.tabme.io/api/v1/us';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'loginuser', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();