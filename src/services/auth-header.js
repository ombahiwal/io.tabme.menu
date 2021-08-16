import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default function authHeader() {
    const user = cookies.get('user');
  
    if (user && user.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }