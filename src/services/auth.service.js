import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
// const API_URL = "http://localhost:8002/api/";
const ENV = require('./env-vars');
const API_URL = `${ENV.API_URL}/api/v1/us/`;
class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "loginuser", { user:{
        email:username,
        password:password
      }})
      .then(response => {
        if (response.data.token) {
          cookies.set('user', response.data, { path: '/' });
        }
        return response;
      });
  }

  logout() {
    cookies.remove('user', { path: '/' });
    cookies.remove('token', { path: '/' });
  }
  
  register(usercred){
    return axios.post(API_URL + "ruser", usercred);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
  async updateUserInfo(update_data){
    return await axios.post(API_URL + "user/update", update_data);
  }

  async checkToken(){
    try{
   var email=(cookies.get('user')).email;
    var token_data = {email:email};
    return await axios.post(API_URL + "checktoken", token_data, {headers:{authorization:cookies.get('token')}});
    }catch(e){
      // console.log(e);
      return e;
    }
  }
       
}

export default new AuthService();