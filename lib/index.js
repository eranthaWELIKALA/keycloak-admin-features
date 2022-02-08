"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.getUserInfoById = exports.getUserInfoList = exports.createUser = exports.logout = exports.getUserInfo = exports.getAccessToken = exports.init = void 0;
const axios_1 = __importDefault(require("axios"));
const resource_endpoints_1 = require("./config/resource-endpoints");
const error_messages_1 = require("./utils/error-messages");
function init(server_url, realm_name) {
    if (!server_url || !realm_name) {
        throw new Error(error_messages_1.ErrorMessages.ENDPOINTS_NOT_CONFIGURED);
    }
    else {
        (0, resource_endpoints_1.createEndpoints)(server_url, realm_name);
    }
}
exports.init = init;
function getAccessToken(req) {
    var url = resource_endpoints_1.Endpoints['token_endpoint'];
    var params = new URLSearchParams(req.body);
    var payload = params.toString();
    var headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    var options = { headers: headers };
    return axios_1.default.post(url, payload, options);
}
exports.getAccessToken = getAccessToken;
function getUserInfo(req) {
    var url = resource_endpoints_1.Endpoints['userinfo_endpoint'];
    var payload = {};
    var headers = { 'Authorization': req.headers.authorization };
    var options = { headers: headers };
    if (req.headers.authorization) {
        return axios_1.default.post(url, payload, options);
    }
    else {
        throw new Error(error_messages_1.ErrorMessages.AUTH_HEADER_MISSING);
    }
}
exports.getUserInfo = getUserInfo;
function logout(req) {
    var url = resource_endpoints_1.Endpoints['end_session_endpoint'];
    var payload = {};
    var headers = { 'Authorization': req.headers.authorization };
    var options = { headers: headers };
    if (req.headers.authorization) {
        return axios_1.default.post(url, payload, options);
    }
    else {
        throw new Error(error_messages_1.ErrorMessages.AUTH_HEADER_MISSING);
    }
}
exports.logout = logout;
function createUser(req) {
    var url = resource_endpoints_1.Endpoints['admin_features']['user_endpoint'];
    var payload = req.body;
    var headers = { 'Authorization': req.headers.authorization };
    var options = { headers: headers };
    if (req.headers.authorization) {
        return axios_1.default.post(url, payload, options);
    }
    else {
        throw new Error(error_messages_1.ErrorMessages.AUTH_HEADER_MISSING);
    }
}
exports.createUser = createUser;
function getUserInfoList(req) {
    var url = resource_endpoints_1.Endpoints['admin_features']['user_endpoint'];
    var headers = { 'Authorization': req.headers.authorization };
    var options = { headers: headers };
    if (req.headers.authorization) {
        return axios_1.default.get(url, options);
    }
    else {
        throw new Error(error_messages_1.ErrorMessages.AUTH_HEADER_MISSING);
    }
}
exports.getUserInfoList = getUserInfoList;
function getUserInfoById(req) {
    var url = resource_endpoints_1.Endpoints['admin_features']['user_endpoint'];
    var id = req.params.id;
    url += `/${id}`;
    var headers = { 'Authorization': req.headers.authorization };
    var options = { headers: headers };
    if (req.headers.authorization) {
        return axios_1.default.get(url, options);
    }
    else {
        throw new Error(error_messages_1.ErrorMessages.AUTH_HEADER_MISSING);
    }
}
exports.getUserInfoById = getUserInfoById;
function updateUserById(req) {
    var url = resource_endpoints_1.Endpoints['admin_features']['user_endpoint'];
    var payload = req.body;
    var id = req.params.id;
    url += `/${id}`;
    var headers = { 'Authorization': req.headers.authorization };
    var options = { headers: headers };
    if (req.headers.authorization) {
        return axios_1.default.put(url, payload, options);
    }
    else {
        throw new Error(error_messages_1.ErrorMessages.AUTH_HEADER_MISSING);
    }
}
exports.updateUserById = updateUserById;
//# sourceMappingURL=index.js.map