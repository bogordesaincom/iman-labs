const codeResponse = {
    not_found: 404,
    method_not_allowed: 405,
    request_timeout: 408,
    bad_request: 400,
    unauthorized: 403,
    unauthentication: 401,
    conflict: 409,
    request_too_large: 413,
    request_too_long: 414,
    unprocessable: 422,
    too_many_request: 429,
    internal_server_error: 500,
    bad_gateway: 502,
    service_unavailable: 503,
    ok: 200,
    created: 201,
};

export default codeResponse;
