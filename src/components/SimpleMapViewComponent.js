import React, { useEffect, useState} from 'react';
// import { Redirect} from "react-router-dom";
// import {Icon} from 'leaflet';
// import 'leaflet';
// import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import { MapContainer,  Popup, TileLayer, CircleMarker} from "react-leaflet";
import LoadingOverlay from 'react-loading-overlay';
// import DataService from '../services/data-service';
import {Image, ListGroup} from 'react-bootstrap';
// import { useDispatch, useSelector } from "react-redux";
// import Cookies from 'universal-cookie';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
// import { makeRe } from 'minimatch';
// const cookies = new Cookies();
// const Actions  = require('../redux/actions/index');
const ENV = require('../services/env-vars');
Leaflet.Icon.Default.imagePath =
'../node_modules/leaflet';

function Process(subprop){
    // console.log(subprop);
    const [loading, setLoading] = useState(true);
    // const [qr, setQr] = useState(false);
    // const user = useSelector(state => state.user);
    var [markers, setMarkers] = useState([]);

    // [
    //     [19.8766888,75.3635153],
    //     [19.8766993,75.3626091],
    //     [19.87649339,75.3638215],
    //     [52.545849, 13.417923],
    //     [19.8766807,75.3624632],
    //     [51.515079,-0.1604956]
    // ]

   useEffect(()=>{
    var markers_req; 
    setLoading(true);
       setTimeout(async ()=>{            
             markers_req =  await axios.post(ENV.API_URL+'/api/v1/ds/dev/map/restaurants',{});
             setMarkers(markers_req.data.restaurants);
             setLoading(false);
       }, 0);  
        // Fetch All the restaurants.
        
   },[]);
   
    // const dispatch = useDispatch();
    

    return (
        <LoadingOverlay
        active={loading}
        spinner
        text='Loading...'
        >
        <div className="col-12">
            <div className="row">
                <div className="col-12 no-padding-float-left">
                <div className="loading-div">
                <Wrapper id="mapid">
                        <MapContainer
                        center={[19.8766888,75.3635153]} zoom={4} scrollWheelZoom={true}>
                                    <TileLayer
                                            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                                            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                                            />
                                {/* <Marker position={[51.505, -0.09]}>
                                    <Popup>
                                        This is Tabme Popup
                                    </Popup>
                                </Marker> */}
                                {markers.map((mark)=>{
                                    // console.log(mark);
                                    return(
                                <CircleMarker center={mark.location} pathOptions={{color:'#0a1e42', fillColor: mark.open ? '#1aad00' : '#db0b00'}} radius={6}>
                                    <Popup>
                                        <center>
                                        <a target="_blank" rel="noopener noreferrer" href={`${ENV.APP_URL}/${mark.alias}-1`}>
                                        <Image src={`${ENV.CDN_URL}/user_public_assets/logos/${mark._id}.png`}/>
                                        <br/>
                                        {mark.rname}</a>
                                        </center>
                                        <br/>
                                    </Popup>
                                </CircleMarker>
                                    );
                                })}
                                
                            </MapContainer>
                </Wrapper>
                
                

                    <div>
                    <ListGroup>
                        
                        {markers.map((mark)=>{
                            return(  <ListGroup.Item>
                                        <h5><a target="_blank"  rel="noopener noreferrer" href={`${ENV.APP_URL}/${mark.alias}-1`}>{mark.rname}</a></h5>
                                        <p>{mark.full_address}</p>
                                        </ListGroup.Item>
                                );
                        })}
                    
                    
                    </ListGroup>
                        </div>  
                        </div>  
                </div>
            </div>
        </div>
        </LoadingOverlay>
    );
}

function SimpleMapView(props){
    return <Process subprops={props}/>
}

export default SimpleMapView;

SimpleMapView.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    price: PropTypes.number, 
    allergen: PropTypes.bool,
    veg: PropTypes.string,
    centered: PropTypes.bool,
    children: PropTypes.object,
    className: PropTypes.string,
    onClickAllergenInfo: PropTypes.func,
    onClickCustom: PropTypes.func
  };
  
  SimpleMapView.defaultProps = {
    title: 'Example'
  };

  const Wrapper = styled.div`
  width: 100%;
  `;