import codeResponse from "./codeResponse";
import massageResponse from "./massageResponse";

const getSuccess = (res: any, response: any) => {
    return res.status(codeResponse.ok).json({
        status: codeResponse.ok,
        success: true,
        message: massageResponse.success_execution,
        data: response,
    });
};

const getSuccessIndex = (res: any, response: any) => {
    return res.status(codeResponse.ok).json({
        status: codeResponse.ok,
        success: true,
        message: massageResponse.success_list,
        data: response,
    });
};

const getError = (res: any, error: any) => {
    return res.status(codeResponse.internal_server_error).json({
        status: codeResponse.internal_server_error,
        success: false,
        message: error ? error : massageResponse.error,
        data: [],
    });
};

const getErrorRequestSize = (res: any) => {
    return res.status(codeResponse.internal_server_error).json({
        status: codeResponse.internal_server_error,
        success: false,
        message: massageResponse.error_size_limit,
        data: [],
    });
};

const getErrorNotFound = (res: any) => {
    return res.status(codeResponse.not_found).json({
        status: codeResponse.not_found,
        success: false,
        message: massageResponse.error_not_found,
        data: [],
    });
};

const getErrorInput = (res: any, error: any) => {
    return res.status(codeResponse.unprocessable).json({
        status: codeResponse.unprocessable,
        success: false,
        message: error ? error : massageResponse.error_failed_input,
        data: [],
    });
};

const getNotFound = (res: any) => {
    return res.status(codeResponse.not_found).json({
        status: codeResponse.not_found,
        success: false,
        message: massageResponse.error_data_notfound,
        data: [],
    });
};

const getErrorLoginNotFound = (res: any) => {
    return res.status(codeResponse.internal_server_error).json({
        status: codeResponse.internal_server_error,
        success: false,
        message: massageResponse.error_user_notfound,
        data: null,
    });
};

const getAuthFailed = (res: any) => {
    return res.status(codeResponse.unauthentication).json({
        status: codeResponse.unauthentication,
        success: false,
        message: massageResponse.authentication_failed,
        data: null,
    });
};

const getSuccessLogin = (res: any, response: any) => {
    return res.status(codeResponse.ok).json({
        status: codeResponse.ok,
        success: true,
        message: massageResponse.success_login,
        token: response,
    });
};

const getErrorPasswordConfirmation = (res: any) => {
    return res.status(codeResponse.bad_request).json({
        status: codeResponse.bad_request,
        success: false,
        message: massageResponse.error_password_confirmation,
        data: null,
    });
};

const getErrorLoginStatus = (res: any) => {
    return res.status(codeResponse.unauthentication).json({
        status: codeResponse.bad_request,
        success: false,
        message: massageResponse.error_user_status,
        data: null,
    });
};

export {
    getSuccess,
    getSuccessIndex,
    getError,
    getErrorRequestSize,
    getErrorNotFound,
    getErrorInput,
    getNotFound,
    getErrorLoginNotFound,
    getAuthFailed,
    getSuccessLogin,
    getErrorPasswordConfirmation,
    getErrorLoginStatus,
};
