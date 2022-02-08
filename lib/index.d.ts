export declare function init(server_url: string, realm_name: string): void;
export declare function getAccessToken(req: {
    body: string | string[][] | Record<string, string> | URLSearchParams | undefined;
}): Promise<import("axios").AxiosResponse<any, any>>;
export declare function getUserInfo(req: {
    headers: {
        authorization: any;
    };
}): Promise<import("axios").AxiosResponse<any, any>>;
export declare function logout(req: {
    headers: {
        authorization: any;
    };
}): Promise<import("axios").AxiosResponse<any, any>>;
export declare function createUser(req: {
    body: any;
    headers: {
        authorization: any;
    };
}): Promise<import("axios").AxiosResponse<any, any>>;
export declare function getUserInfoList(req: {
    headers: {
        authorization: any;
    };
}): Promise<import("axios").AxiosResponse<any, any>>;
export declare function getUserInfoById(req: {
    params: {
        id: any;
    };
    headers: {
        authorization: any;
    };
}): Promise<import("axios").AxiosResponse<any, any>>;
export declare function updateUserById(req: {
    body: any;
    params: {
        id: any;
    };
    headers: {
        authorization: any;
    };
}): Promise<import("axios").AxiosResponse<any, any>>;
//# sourceMappingURL=index.d.ts.map