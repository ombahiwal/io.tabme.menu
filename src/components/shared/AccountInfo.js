import React from 'react';
import styled from "styled-components";
import {ListGroup} from 'react-bootstrap';
import {Form, InputGroup, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import getFormData from 'get-form-data';
import AuthService from '../../services/auth.service';
import Cookies from 'universal-cookie';
import { useDispatch} from "react-redux";
import t from '../../i18n/translate';
import {FormattedMessage} from 'react-intl';
const Actions  = require('../../redux/actions/index');
const cookies = new Cookies();

// Main Export 
const AccountInfoList = props => {
    var user = props.user;
    // console.log(props);
    const dispatch = useDispatch();
    async function handleUpdateSubmit(event){
                event.preventDefault();        
                // openModal(0);
                try{
                let form = document.querySelector('#updateProfileForm');
                let data = getFormData(form); delete data.email;
                // remove email for now 8/3/2021 
                // console.log(data);    
                props.loading(true);
                var rsp = await AuthService.updateUserInfo(data);
                if(rsp.data.success){
                    // console.log('Success : ' );
                    cookies.remove('user', {path:'/'});
                    dispatch(Actions.setUserSession(rsp.data.user));
                    cookies.set('user', rsp.data.user, {path:'/'});                    
                }else{
                    // console.log('Failed : ' );
                }
                props.setUpdate(false);
                props.loading(false);
                // console.log(rsp.data);
                }catch(e){
                    // console.log(e);
                }
        }
        
    function renderAccountInfo(){
        if(props.update){
            // update
            return(<div>
                <hr/>
        <div className="container d-flex">
                <div className=" my-auto">
                <Form onSubmit={handleUpdateSubmit} id="updateProfileForm" method="post">
            <div className="register-form col-12 m-1 align-items-center">       
                
          <Form.Group>
                  <Form.Control  name="_id" type="hidden" value={user._id}  />
                  <Form.Text className="text-muted">
                  </Form.Text>
              </Form.Group>
              <InputGroup>    
              <Form.Group>

              <FormattedMessage id="label_name" values={{type:"First "}} defaultMessage="First Name">
                  {(placeholder)=><Form.Control defaultValue={user.fname} name="fname" type="text"  placeholder={placeholder} />}
                  </FormattedMessage>
                  <Form.Text className="text-muted">
                  {t('label_name', {type:"First "})}
                  </Form.Text>
              </Form.Group>
                
              <Form.Group>
              <FormattedMessage id="label_name" values={{type:"Last "}} defaultMessage="Last Name">
                    {(placeholder)=><Form.Control defaultValue={user.lname} name="lname" type="text"  placeholder={placeholder} />}
                </FormattedMessage>
                  <Form.Text className="text-muted">
                  {t('label_name', {type:"Last "})}
                  </Form.Text>
              </Form.Group>
              </InputGroup>

              <InputGroup>
              <Form.Group controlId="formBasicEmail">
              <FormattedMessage id="label_email" defaultMessage="Email Address">
              {(placeholder)=>    <Form.Control disabled defaultValue={user.email} name="email" type="email" placeholder={placeholder} />}
              </FormattedMessage>
                  <Form.Text className="text-muted">
                    {t('label_email')} (registered)
                  </Form.Text>
              </Form.Group>

              <Form.Group>
              <FormattedMessage id="label_phone" defaultMessage="Phone Number">
                    {(placeholder)=> <Form.Control defaultValue={user.phone} name="phone" type="tel"  placeholder={placeholder} />}
                </FormattedMessage>
                  <Form.Text className="text-muted">
                    {t('label_phone')}
                  </Form.Text>
              </Form.Group>
              </InputGroup>


              <Form.Group>
              <FormattedMessage id="label_addr" defaultMessage="Address, Street">
                  {(placeholder)=><Form.Control defaultValue={user.address}  name="address" type="text" placeholder={placeholder}  />}
                  </FormattedMessage>
                  <Form.Text className="text-muted">
                  {t('label_addr')}
                  </Form.Text>
              </Form.Group>
            
              <Form.Group>
              <FormattedMessage id="label_zip" defaultMessage="Phone Number">
                  {(placeholder)=><Form.Control defaultValue={user.zip}  name="zip" type="text" placeholder={placeholder} />}
                  </FormattedMessage>
                  <Form.Text className="text-muted">
                  {t('label_zip')}
                  </Form.Text>
              </Form.Group>   
              
              <hr/>
                 
                            <div style={{float:'right'}}>  
                                          <Button variant="danger" onClick={handleUpdateSubmit}>
                                           {t('label_update_btn')}</Button>
                            </div>

                </div></Form></div></div>
                </div>);
        }else
        return(<ListGroup>
                            
            <ListGroup.Item>
                <TextLabel>{t('label_name', {type:" "})}</TextLabel>
                <br/>
                <Text>  {user.fname} {user.lname}</Text>
                </ListGroup.Item>

            <ListGroup.Item>
                <TextLabel>{t('label_email')}</TextLabel>
                <Text>{user.email}</Text>
            </ListGroup.Item>

            <ListGroup.Item>
                <TextLabel>{t('label_phone')}</TextLabel>
                
                <Text>{user.phone}</Text>
            </ListGroup.Item>
            
            <ListGroup.Item>
                <TextLabel disabled>{t('label_addr')} & {t('label_zip')}</TextLabel>
                
                <Text> {user.address} - {user.zip}</Text>
            </ListGroup.Item>

            <ListGroup.Item>
                <TextLabel>{t('label_region')} & {t('label_country')}</TextLabel>
                <Text>{user.region}, {user.country}</Text>
            </ListGroup.Item>
        
        </ListGroup>);
    }
return (<div>
    {renderAccountInfo()}
</div>)
}

AccountInfoList.propTypes = {
    user: PropTypes.object,
    children: PropTypes.object,
  };

const Text = styled.h2`
  font-size: 1rem;
  font-weight:500;
  margin-top:5px;
  ___CSS_0___
`;

const TextLabel = styled.span`
font-size: 0.75rem;
font-weight:500;
color:gray;
`;

export default AccountInfoList;