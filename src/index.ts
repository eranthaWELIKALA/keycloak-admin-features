import axios from "axios";
import { Endpoints, createEndpoints } from './config/resource-endpoints';
import { ErrorMessages } from './utils/error-messages';

export function init(server_url: string, realm_name: string) {
    if (!server_url || !realm_name) {
        throw new Error(ErrorMessages.ENDPOINTS_NOT_CONFIGURED);
    }
    else {
        createEndpoints(server_url, realm_name);
    }    
}

export function getAccessToken(req: { body: string | string[][] | Record<string, string> | URLSearchParams | undefined; }) {
    var url = Endpoints['token_endpoint']
    var params = new URLSearchParams(req.body);
    var payload = params.toString();
    var headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    var options = { headers: headers };
    return axios.post(url, payload, options);
}

export function getUserInfo(req: { headers: { authorization: any; }; }) {
    var url = Endpoints['userinfo_endpoint'];
    var payload = {};
    var headers = { 'Authorization': req.headers.authorization };
    var options = { headers: headers };
    if (req.headers.authorization) {
        return axios.post(url, payload, options);
    }
    else {
        throw new Error(ErrorMessages.AUTH_HEADER_MISSING);
    }
}

export function logout(req: { headers: { authorization: any; }; }) {
    var url = Endpoints['end_session_endpoint'];
    var payload = {};
    var headers = { 'Authorization': req.headers.authorization }
    var options = { headers: headers }
    if (req.headers.authorization) {
        return axios.post(url, payload, options)
    }
    else {
        throw new Error(ErrorMessages.AUTH_HEADER_MISSING);
    }
}

export function createUser(req: { body: any; headers: { authorization: any; }; }) {
    var url = Endpoints['admin_features']['user_endpoint'];
    var payload = req.body;
    var headers = { 'Authorization': req.headers.authorization };
    var options = { headers: headers };
    if (req.headers.authorization) {
        return axios.post(url, payload, options);
    }
    else {
        throw new Error(ErrorMessages.AUTH_HEADER_MISSING);
    }
}

export function getUserInfoList(req: { headers: { authorization: any; }; }) {
    var url = Endpoints['admin_features']['user_endpoint'];
    var headers = { 'Authorization': req.headers.authorization };
    var options = { headers: headers }
    if (req.headers.authorization) {
        return axios.get(url, options);
    }
    else {
        throw new Error(ErrorMessages.AUTH_HEADER_MISSING);
    }
}

export function getUserInfoById(req: { params: { id: any; }; headers: { authorization: any; }; }) {
    var url = Endpoints['admin_features']['user_endpoint'];
    var id = req.params.id;
    url += `/${id}`;
    var headers = { 'Authorization': req.headers.authorization };
    var options = { headers: headers }
    if (req.headers.authorization) {
        return axios.get(url, options);
    }
    else {
        throw new Error(ErrorMessages.AUTH_HEADER_MISSING);
    }
}

export function updateUserById(req: { body: any; params: { id: any; }; headers: { authorization: any; }; }) {
    var url = Endpoints['admin_features']['user_endpoint'];
    var payload = req.body;
    var id = req.params.id;
    url += `/${id}`;
    var headers = { 'Authorization': req.headers.authorization };
    var options = { headers: headers }
    if (req.headers.authorization) {
        return axios.put(url, payload, options);
    }
    else {
        throw new Error(ErrorMessages.AUTH_HEADER_MISSING);
    }
}