"use strict";
import React, {Component} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import Pinch from 'react-native-pinch';
import Config from './Config'
import {SessionManager} from './utilities/SessionManager';
import Constants from './utilities/Constants'
import {Platform, Alert} from 'react-native';
import {Screens} from './navigation/Screens'
import SessionTimer from './utilities/SessionTimer';
import IMEI from './utilities/IMEI'
// Check Device Info
var DeviceInfo = require('react-native-device-info');

//import Spinner from  'react-native-spinkit'

/*
 this class will be used to communicate with
 server and getting url params from the calling class,
 handles the server error if there is no error it will
 return the repsonse to the calling class
 */
export class WebServiceCallManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
            size: 100,
        }
    }

    callWebService(requestAction, subAction, bodyParams, responseHandler, optionalErrHandler) {
        this.setState({visible: true});//Starting the Processing indicator
        let imei = null;
        if (Platform.OS === 'android') {
            imei = SessionManager.getSessionValue("IMEI");
        }

        var params = {
            "Header": {
                "AppVersion": DeviceInfo.getVersion(),
                //"IMEI":imei,
                //"DEVICE_MAKE" : (Platform.OS === 'android') ?  "AN": (Platform.OS === 'ios') ? "IP" : "OT",
                "Channel": (Platform.OS === 'android') ? 'MOBILE_ANDROID' : (Platform.OS === 'ios') ? "MOBILE_IOS" : null,
                // DeviceInfo.getManufacturer()
                //    "Channel":DeviceInfo.getManufacturer(),
                //"DeviceId": DeviceInfo.getUniqueID(),
                //  "NetworkType": "MOBILE DATA 3G",
                "RequestAction": requestAction,
                "SubAction": subAction,
                "Token": SessionManager.getSessionValue(Constants.TOKEN),
                //  "Operator": "ZONG",
                "CSRF": SessionManager.getSessionValue(Constants.CSRF),
                //"OS": DeviceInfo.getSystemVersion(),
                "DeviceInformation": {
                    "IMEI": imei,
                    "Manufacturer": DeviceInfo.getManufacturer(),
                    "Model": DeviceInfo.getModel(),
                    "DeviceId": DeviceInfo.getUniqueID(),
                    "DeviceMake": (Platform.OS === 'android') ? "AN" : (Platform.OS === 'ios') ? "IP" : "OT",
                    "OS": DeviceInfo.getSystemVersion(),
                }

            },
            "Body": {
                "Transaction": bodyParams
            }
        };

        var url = Config.IP;

        if (url.startsWith('https')) {
            this._httpsCalling(url, params, responseHandler, optionalErrHandler);
        } else {
            this._httpCalling(url, params, responseHandler, optionalErrHandler);
        }
    }

    _httpsCalling(url, params, responseHandler) {
        Pinch.fetch(url,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
                sslPinning: {
                    cert: 'prodcer'
                }
            })
            .then((responseResult) => {
                this.setState({visible: false});// removing the Processing symbol
                var result = JSON.parse(responseResult.bodyString);
                var strResult = JSON.stringify(result);
                if (responseResult.status == '0') {
                    responseHandler(strResult);
                }
                else {
                    responseHandler(strResult);

                }
            }).catch((err) => {
            this.setState({visible: false});// removing the Processing symbol
            responseHandler(err.message + '');
        })
            .done();
    }

    _httpCalling(url, params, responseHandler, optionalErrHandler) {
        fetch(url,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params)

            })
            .then((resType) => resType.json())
            .then((responseResult) => {
                let timer = new SessionTimer();
                timer.resetSessionTimer(0);
                this.setState({visible: false});// removing the Processing symbol
                SessionManager.setSessionValue(Constants.TOKEN, responseResult.Header.Cookie);
                SessionManager.setSessionValue(Constants.CSRF, responseResult.Header.CSRF);
                if (responseResult.Header.ResponseCode == '0') {

                    responseHandler(responseResult);
                }
                else {
                    if (optionalErrHandler !== undefined) {
                        optionalErrHandler(responseResult.Header);
                    }
                    this.errorHandler(responseResult.Header);
                    // responseHandler(null ,responseResult.Header.ResponseMessage);

                }
            }).catch((err) => {

            var error = {ResponseMessage: err.message};

            if (optionalErrHandler !== undefined) {
                optionalErrHandler(error);
            }

            this.errorHandler(error);
        })
            .done();
    }

    errorHandler(errorData) {

        this.setState({visible: false});// removing the Processing symbol

        let msg = errorData.ResponseMessage;
        let errorCode = errorData.ResponseCode;

        if (errorCode == 111) {
            setTimeout(
                () => {
                    Alert.alert('Respose Error ' +
                        msg,
                        '',
                        [
                            {
                                text: 'OK', onPress: () => {
                                this.props.nav.popToRoute(Screens.LoginScreen)
                            }
                            },
                        ],
                        {cancelable: false}
                    )
                },
                100
            );
        }
        else {

            setTimeout(
                () => {
                    alert(msg)
                },
                100
            );
        }
    }

    render() {
        return <Spinner visible={this.state.visible} itemProp='size:100'/>
    }
}

