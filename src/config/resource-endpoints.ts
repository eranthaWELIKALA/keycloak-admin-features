import { ErrorMessages } from "../utils/error-messages";

interface FeatureEndpoints {
    issuer: string,
    authorization_endpoint: string,
    token_endpoint: string,
    introspection_endpoint: string,
    userinfo_endpoint: string,
    admin_features: AdminFeatureEndpoints,
    end_session_endpoint: string
}

interface AdminFeatureEndpoints {
    user_endpoint: string
}

export var Endpoints: FeatureEndpoints

export function createEndpoints(IAMSERVER_ADDR: string, IAMSERVER_REALM_NAME: string) {
    if (!IAMSERVER_ADDR || !IAMSERVER_REALM_NAME) {
        throw new Error(ErrorMessages.ENDPOINTS_NOT_CONFIGURED);
    }
    
    Endpoints = {
        issuer: `${IAMSERVER_ADDR}/auth/realms/${IAMSERVER_REALM_NAME}`,
        authorization_endpoint: `${IAMSERVER_ADDR}/auth/realms/${IAMSERVER_REALM_NAME}/protocol/openid-connect/auth`,
        token_endpoint: `${IAMSERVER_ADDR}/auth/realms/${IAMSERVER_REALM_NAME}/protocol/openid-connect/token`,
        introspection_endpoint: `${IAMSERVER_ADDR}/auth/realms/${IAMSERVER_REALM_NAME}/protocol/openid-connect/token/introspect`,
        userinfo_endpoint: `${IAMSERVER_ADDR}/auth/realms/${IAMSERVER_REALM_NAME}/protocol/openid-connect/userinfo`,
        admin_features: {
            user_endpoint: `${IAMSERVER_ADDR}/auth/admin/realms/${IAMSERVER_REALM_NAME}/users`,
        },
        end_session_endpoint: `${IAMSERVER_ADDR}/auth/realms/${IAMSERVER_REALM_NAME}/protocol/openid-connect/logout`
    }
}