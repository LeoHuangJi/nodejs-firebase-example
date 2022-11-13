let { db, admin } = require('../config/db');
const _ = require('lodash');
const log4js = require('./../config/log4js');
const logger = log4js.getLogger("error");
const { message, responseCode } = require("../common/message");
const { status } = require("../common/constant");
const axios = require('axios');
var jwt = require('jsonwebtoken');

const responseData = require("../common/responseData");

const joinAMeeting = async (req, res) => {

    let secret = '2aUatn2GbssT9hjg3Y85nuaMGgdV26rijMXH';
    let apiKey = '5D-UOf8ERsW_nm2zr6x3qQ';


    try {

        const payload = {
            iss: apiKey,
            exp: ((new Date()).getTime() + 5000)
        };
        const token = jwt.sign(payload, secret);

        let result = await axios({
            method: "POST",
            url: "https://api.zoom.us/v2/rooms/VSaNURCbR26hU7hwpWGHLA/meetings",
          
            data: {
                "jsonrpc": "2.0",
                "method": "join",
                "params": {
                  "meeting_number": 88302559919,
                  "password": "ZZQ1wB",
                  "force_accept": false
                 // "callback_url": "https://api.test.zoom.us/callback?token=123"
                }
            },
            headers: {
                'Authorization': 'Bearer ' + token,
                "alg": "HS256",
                "typ": "JWT",
                "User-Agent": "Zoom-api-Jwt-Request",
                "content-type": "application/json"
            },
            json: true //Parse the JSON string in the response

        });

        return await responseData(responseCode.ok, true, message.ok, result.data)
    } catch (error) {
        logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
        return responseData(responseCode.error, false, error.message, null)
    }


}

const list = async (req, res) => {

    let secret = '2aUatn2GbssT9hjg3Y85nuaMGgdV26rijMXH';
    let apiKey = '5D-UOf8ERsW_nm2zr6x3qQ';


    try {

        const payload = {
            iss: apiKey,
            exp: ((new Date()).getTime() + 5000)
        };
        const token = jwt.sign(payload, secret);

        let result = await axios({
            method: "POST",
            url: "https://api.zoom.us/v2/metrics/meetings",
           // url: "https://api.zoom.us/v2/meetings/sRvKizSjTPWizNkZMxZ6pg==",
            data: {
                "jsonrpc": "2.0",
                "method": "list",
                "params": {
                //  "zr_name": "My Zoom Room"
                }
             },
            headers: {
                'Authorization': 'Bearer ' + token,
                "alg": "HS256",
                "typ": "JWT",
                "User-Agent": "Zoom-api-Jwt-Request",
                "content-type": "application/json"
            },
            json: true //Parse the JSON string in the response

        });

        return await responseData(responseCode.ok, true, message.ok, result.data)
    } catch (error) {
        logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
        return responseData(responseCode.error, false, error.message, null)
    }


}
const findOne = async (req, res) => {

    let secret = '2aUatn2GbssT9hjg3Y85nuaMGgdV26rijMXH';
    let apiKey = '5D-UOf8ERsW_nm2zr6x3qQ';


    try {

        const id = req.params.id;
        const payload = {
            iss: apiKey,
            exp: ((new Date()).getTime() + 5000)
        };
        const token = jwt.sign(payload, secret);

        let result = await axios({
            method: "GET",
           // url: "https://api.zoom.us/v2/users/idhiephv@gmail.com/meetings",
            url: `https://api.zoom.us/v2/meetings/${id}`,
            // data: {

            // },
            headers: {
                'Authorization': 'Bearer ' + token,
                "alg": "HS256",
                "typ": "JWT",
                "User-Agent": "Zoom-api-Jwt-Request",
                "content-type": "application/json"
            },
            json: true //Parse the JSON string in the response

        });

        return await responseData(responseCode.ok, true, message.ok, result.data)
    } catch (error) {
        logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
        return responseData(responseCode.error, false, error.message, null)
    }


}


const createZoom = async (req, res) => {

    let secret = '2aUatn2GbssT9hjg3Y85nuaMGgdV26rijMXH';
    let apiKey = '5D-UOf8ERsW_nm2zr6x3qQ';


    try {

        const payload = {
            iss: apiKey,
            exp: ((new Date()).getTime() + 5000)
        };

        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        let dateTime = date + ' T ' + time;

        const token = jwt.sign(payload, secret);
console.log(dateTime);
     
        const result = await axios({
            method: "POST",
            url: "https://api.zoom.us/v2/users/idhiephv@gmail.com/meetings",
            data: {
                topic: "test create meeting " + ((new Date()).getTime() + 5000),
                type: 1,
                settings: {
                    host_video: "true",
                    participant_video: "true",
                    'start_time': dateTime,
                    'duration': '30',
                    "allow_multiple_devices": true,
                },
                
            },
            headers: {
                'Authorization': 'Bearer ' + token,
                "alg": "HS256",
                "typ": "JWT",
                "User-Agent": "Zoom-api-Jwt-Request",
                "content-type": "application/json"
            },
            json: true //Parse the JSON string in the response

        });
        console.log(result.data);

        return await responseData(responseCode.created, true, message.created, result.data);
    } catch (error) {
        logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
        return responseData(responseCode.error, false, error.message, null)
    }
}


module.exports = {
    list, createZoom,findOne,joinAMeeting
};