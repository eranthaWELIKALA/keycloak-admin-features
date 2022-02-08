"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEndpoints = exports.Endpoints = void 0;
const error_messages_1 = require("../utils/error-messages");
function createEndpoints(IAMSERVER_ADDR, IAMSERVER_REALM_NAME) {
    if (!IAMSERVER_ADDR || !IAMSERVER_REALM_NAME) {
        throw new Error(error_messages_1.ErrorMessages.ENDPOINTS_NOT_CONFIGURED);
    }
    exports.Endpoints = {
        issuer: `${IAMSERVER_ADDR}/auth/realms/${IAMSERVER_REALM_NAME}`,
        authorization_endpoint: `${IAMSERVER_ADDR}/auth/realms/${IAMSERVER_REALM_NAME}/protocol/openid-connect/auth`,
        token_endpoint: `${IAMSERVER_ADDR}/auth/realms/${IAMSERVER_REALM_NAME}/protocol/openid-connect/token`,
        introspection_endpoint: `${IAMSERVER_ADDR}/auth/realms/${IAMSERVER_REALM_NAME}/protocol/openid-connect/token/introspect`,
        userinfo_endpoint: `${IAMSERVER_ADDR}/auth/realms/${IAMSERVER_REALM_NAME}/protocol/openid-connect/userinfo`,
        admin_features: {
            user_endpoint: `${IAMSERVER_ADDR}/auth/admin/realms/${IAMSERVER_REALM_NAME}/users`,
        },
        end_session_endpoint: `${IAMSERVER_ADDR}/auth/realms/${IAMSERVER_REALM_NAME}/protocol/openid-connect/logout`
    };
}
exports.createEndpoints = createEndpoints;
//# sourceMappingURL=resource-endpoints.js.map