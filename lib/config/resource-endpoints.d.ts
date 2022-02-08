interface FeatureEndpoints {
    issuer: string;
    authorization_endpoint: string;
    token_endpoint: string;
    introspection_endpoint: string;
    userinfo_endpoint: string;
    admin_features: AdminFeatureEndpoints;
    end_session_endpoint: string;
}
interface AdminFeatureEndpoints {
    user_endpoint: string;
}
export declare var Endpoints: FeatureEndpoints;
export declare function createEndpoints(IAMSERVER_ADDR: string, IAMSERVER_REALM_NAME: string): void;
export {};
//# sourceMappingURL=resource-endpoints.d.ts.map