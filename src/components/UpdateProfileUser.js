// import React, {useEffect, useState}from 'react';
// import {Form, Image, InputGroup, Button} from 'react-bootstrap';
// import RestaurantProfile from './ProfileComponent';
// // import DateFnsUtils from '@date-io/date-fns';
// // import {
// //   MuiPickersUtilsProvider,
// //   KeyboardTimePicker,
// //   KeyboardDatePicker,
// // } from '@material-ui/pickers';
// import TextField from '@material-ui/core/TextField';
// import Snackbar from "@material-ui/core/Snackbar";
// import DataService from '../services/data-service';
// import Cookies from 'universal-cookie';
// import { FormControl } from '@material-ui/core';
// import getFormData from 'get-form-data';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from "@material-ui/icons/Close";
// import { useDispatch, useSelector } from "react-redux";
// import Axios from 'axios';
// import { Modal, CheckboxToggle } from "react-rainbow-components";
// const cookies = new Cookies();


// // const user_service_url = "http://localhost:8002/api/";
// const user_service_url = "https://user-service.tabme.info/api/";

// // var app_url = "http://localhost:3000";
// var app_url = "https://app.tabme.info";
// var Actions = require("../redux/actions/index");
// export default function UpdateProfile(props){
    
//     var [menus, setMenusArray] = React.useState([]);
//     var [restaurant, setRestaurant] = React.useState(props.restaurant);
//     var pickup_timings = [0, 15, 30, 45, 60];
//     var [modalOpen, setModalOpen] = React.useState(false);
//     const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
//     const [openSnackbar, setOpenSnackbar] = React.useState({
//         isOpen: false,
//         msg: "Welcome!"
//       });
//     const handleDateChange = (date) => {
//       setSelectedDate(date);
//     };
//     var dispatch = useDispatch();

//     useEffect(()=>{
//     setTimeout(async ()=>{
//         console.log(props.restaurant);
//         if(props.restaurant._id === 'test'){
//             // restaurant = cookies.get('gastro');
//             setRestaurant(cookies.get('gastro'));
//             console.log(restaurant);
//             dispatch(Actions.setRestaurant(restaurant));
//         }else{
//             setRestaurant(props.restaurant);
//             // restaurant = props.restaurant;
//         }
//         var menus = await DataService.getMenus({restaurant_id:restaurant._id});
//         if(menus){
//             setMenusArray(menus.data.menus);
//             console.log(menus.data.menus);
//         }
//       }, 0);}, []);

//     function SnackbarMessage(msg_obj){
//         console.log('snackbar invoked ', msg_obj);
//         setOpenSnackbar({isOpen:msg_obj.isOpen, msg:msg_obj.msg});
//     }

//     const handleSnackbarClose = () => {
//         setOpenSnackbar({ isOpen: false, msg: "" });
//         return;
//     };

//     function openModal(modal_data) {
//         setModalOpen({ isOpen: true, modal_data});
//         // console.log(order);
//         // console.log(openOrders);
//         return;
//       }
    
//       function closeModal() {
//         // setShowCustomerInfo(false);
//         setModalOpen({ isOpen: false});
//       }
//     function validate_form_data(data){
//         return true;
//     }
//     async function handleUpdateSubmit(event){
//         event.preventDefault();        
//         openModal(0);
//         //action="https://user-service.tabme.info/api/gastro/update"
//         // action="http://localhost:8002/api/gastro/update"

//         let form = document.querySelector('#updateProfileForm');
//         let data = getFormData(form);
//         if(validate_form_data(data)){
//             setOpenSnackbar({isOpen:true, msg:"Updating Profile..."});
//             var resp = await Axios.post(user_service_url+'gastro/update/async', {_id:restaurant._id, updates:data, password:data.password, email:restaurant.email});
//             if(resp.data.success === true){
//                 setOpenSnackbar({isOpen:true, msg:"Profile Updated!"});
//                 if(resp.data.restaurant){
//                     setRestaurant(resp.data.restaurant);
//                     dispatch(Actions.setRestaurant(resp.data.restaurant));
//                     console.log(resp.data.restaurant);
//                     cookies.remove('gastro');
//                     cookies.set('gastro', resp.data.restaurant);
//                     props.update(resp.data.restaurant);
//                 }
//             }else{
//                 if(resp.data.invalid){
//                     // Incorrect password
//                     setOpenSnackbar({isOpen:true, msg:"Invalid Password!"});
//                 }else{
//                     setOpenSnackbar({isOpen:true, msg:"Some Error Occured, Please try again later."});
//                 }
                
//             }
//             console.log(resp.data);
//         }
//             console.log(data);    
//     }
    

// return(<React.Fragment>
//     <div className="container d-flex">
//       <div className=" my-auto">
//       <Form 
//       onSubmit={handleUpdateSubmit}
        
//        id="updateProfileForm" method="post">
//       <div className="register-form col-12 m-1 align-items-center">
//       <h5><b>Update Profile</b></h5>
//       <hr/>
//       <small>Fill the fields that you would like to be updated and press the "update" button.</small>
//       <hr/>
      
//           <b>Owner / Account Info</b>
//           <br/>
//           <br/>
       
//           <InputGroup>
//           <Form.Group>
//                   <Form.Control name="_id" type="hidden" value={props.restaurant._id}  />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//               </Form.Group>
              
//               <Form.Group>
//                   <Form.Control name="fname" type="text"  placeholder="First Name " />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//               </Form.Group>
                
            
//               <Form.Group>
//                   <Form.Control name="lname" type="text"  placeholder="Last Name " />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//               </Form.Group>
//               </InputGroup>

//               <InputGroup>
//               <Form.Group controlId="formBasicEmail">
//                   <Form.Control name="email" type="email" placeholder="Email Address" />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//               </Form.Group>

//               <Form.Group>
//                   <Form.Control name="phone" type="number"  placeholder="Phone Number " />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//               </Form.Group>
//               </InputGroup>

//               <hr/>
//               <b>Business Info</b>
//                 <br/>
//                 <br/>
//               <Form.Group>
//                   <Form.Control name="rname" type="text"  placeholder="Restaurant Name " />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//               </Form.Group>
//               <Form.Group>
//                   <Form.Control  name="bname" type="text"  placeholder="Company or Business Name " />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//               </Form.Group>
//               <Form.Group>
//                   <Form.Control name="rphone" type="number"  placeholder="Business Phone Number "  />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//               </Form.Group>

//               <Form.Group>
//                   <Form.Control  name="address" type="text" placeholder="Address Line, Street "  />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//               </Form.Group>
             
//               <Form.Group>
//                   <Form.Control  name="city" type="text" placeholder="City / Town"  />
//                   <Form.Text className="text-muted">
//                   </Form.Text>  
//               </Form.Group>
//               <Form.Group>
//                   <Form.Control  name="location" type="text" placeholder="Geolocation Coordinates" />
//                   <Form.Text className="text-muted">
//                   </Form.Text>  
//               </Form.Group>


//               <Form.Group>
//                   <Form.Control  name="zip" type="text" placeholder="Postal / Zip code." />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//               </Form.Group>   

//               <hr/>
//               <b>Payout Bank Info</b>
//                 <br/>
//                 <small>Please Fill in Your Applicable Bank Details to Receive Payouts.</small>
//                 <br/>
//                 <br/>
//                 <Form.Group>
//                   <Form.Control  name="bank_beneficiary" type="text" placeholder="Beneficiary Name" />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//               </Form.Group>  

//               <Form.Group>
//                   <Form.Control  name="bank_account_number" type="text" placeholder="IBAN or  A/c No." />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//               </Form.Group>  
                
//               <Form.Group>
//                   <Form.Control  name="bank_code" type="text" placeholder="Sort, Branch, IFSC Code (Optional)" />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//               </Form.Group>   
              

//               {/* <div className="d-flex"> */}
//           {/* <Modal
//             id="modal-2"
//             className="mw-90 w-90 d-flex"
//             isOpen={modalOpen.isOpen}
//             onRequestClose={() => {
//               closeModal();
//             }}
//             >
//             <div className="container">
//               <div className="row">
//                 <div className="col-12">
//                   <center>
//                       <h4><b>Confirm Update</b></h4>
                    
//                       <b>
//                          Verify Your Profile Password
//                          <br/>
//                           </b>
//                           <Form.Group>
//                             <Form.Control name="password" type="text" placeholder="Enter Profile Password" />
//                             <Form.Text className="text-muted">
//                             </Form.Text>  
//                         </Form.Group>
//                           </center>
//                           <div style={{float:'right'}}><Button  type="submit" onClick={handleUpdateSubmit} variant="success">Confirm</Button></div>
//                           </div>
//                           </div>
//                           </div>
//                     </Modal> */}
                          
//                           {/* </div> */}
//                           <div style={{float:'right'}}>  
//                             <Button variant="danger" onClick={handleUpdateSubmit}>
//                                 Update
//                             </Button>
//                           </div>
//       </div>
      
//       </Form>
//      </div>
//      </div>

    


//      <div className="snackbar-div">
    
//     {openSnackbar.isOpen && (
//             <Snackbar
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "center"
//               }}
//               style={{zIndex:10000000}}
//               onClose={handleSnackbarClose}
//               open={openSnackbar.isOpen}
//               autoHideDuration={10000}
//               message={openSnackbar.msg}
//               action={
//                 <React.Fragment>
//                   <IconButton
//                     size="small"
//                     aria-label="close"
//                     color="inherit"
//                     onClick={handleSnackbarClose}
//                   >
//                     <CloseIcon fontSize="small" />
//                   </IconButton>
//                 </React.Fragment>
//               }
//             />
//           )}
          
//           </div>

//   </React.Fragment>);
// }