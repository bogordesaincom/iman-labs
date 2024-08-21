import { capitalFirst } from "./commons/capital";
import codeResponse from "./commons/codeResponse";
import massageResponse from "./commons/massageResponse";
import {
    getPagination,
    getAllData,
    getPagingData,
    getPagingDataApi,
} from "./commons/pagination";
import { generateToken } from "./commons/responseJwt";
import {
    getRomawiAlpha,
    getRomawiNumber,
    invoiceRomawiNumber,
} from "./commons/romawiHelper";

import {
    getError,
    getSuccess,
    getAuthFailed,
    getNotFound,
    getErrorInput,
    getSuccessIndex,
    getSuccessLogin,
    getErrorNotFound,
    getErrorLoginStatus,
    getErrorRequestSize,
    getErrorLoginNotFound,
    getErrorPasswordConfirmation,
} from "./commons/responder";

export {
    capitalFirst,
    codeResponse,
    massageResponse,
    getPagination,
    getAllData,
    getPagingData,
    getPagingDataApi,
    generateToken,
    getRomawiAlpha,
    getRomawiNumber,
    invoiceRomawiNumber,
    getError,
    getSuccess,
    getAuthFailed,
    getNotFound,
    getErrorInput,
    getSuccessIndex,
    getSuccessLogin,
    getErrorNotFound,
    getErrorLoginStatus,
    getErrorRequestSize,
    getErrorLoginNotFound,
    getErrorPasswordConfirmation,
};
