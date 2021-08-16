import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
// const API_URL = "http://localhost:8004/api/";
const ENV = require('./env-vars');
const API_URL = `${ENV.API_URL}/api/v1/ds/`;
// const API_URL = "https://service.tabme.io/api/v1/ds/";
class DataService {
 
    addMenu(menu){
        // Send Menu Json to backend service,
        // Add Menu to DB
        return axios.post(API_URL + "addmenu", {menu:menu, token:cookies.get('token')});
    }
    getMenu(menu_request){
      // Request payload - owner_id, menu_id, 
      return axios.post(API_URL + "getmenu", menu_request);
    }

  login(username, password) {
    return axios
      .post(API_URL + "logingastro", { gastro:{
        email:username,
        password:password
      }})
      .then(response => {
        if (response.data.token) {
          cookies.set('gastro', response.data, { path: '/' });

          cookies.set('token', response.data.token, {path: '/'});
        }
        return response;
      });
  }

  logout() {
    cookies.remove('user', {path: '/'});
    cookies.remove('token', {path: '/'});
    return true
  }
  
  register(usercred){
    return axios.post(API_URL + "rgastro", usercred);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
  
  async checkToken(){
    try{
   var email=(cookies.get('gastro')).email;
    var token_data = {email:email};
    return await axios.post(API_URL + "checktoken", token_data, {headers:{authorization:cookies.get('token')}});
    }catch(e){
      // console.log(e);
      return e;
    }
  }
  getRestaurant(){
    axios.post()
  }  

  getQRInfo(qr){
    return axios.post(API_URL + "getqr", qr);
  }

 async createOrder(order_request){
    return await axios.post(API_URL + "order/create", order_request);
  }

  async fetchOrder(order_request){
    return await axios.post(API_URL+'order/fetch', order_request);
  }

  async fetchUserOrders(order_request){
    return await axios.post(API_URL+'order/fetch/user', order_request);
  }

}

export default new DataService();
