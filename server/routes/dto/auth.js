const AuthRouterDTO = {};

AuthRouterDTO.generateOtp = (request) => {
    console.info(`Inside AuthRouterDTO.generateOtp where request = ${JSON.stringify(request)}`);
    return request.phoneNumber;
}

AuthRouterDTO.verifyOtp = (request) => {
    console.info(`Inside AuthRouterDTO.verifyOtp where request = ${JSON.stringify(request)}`);
    return request;
}

AuthRouterDTO.generateToken = (request) => {
    console.info(`Inside AuthRouterDTO.generateToken where request = ${JSON.stringify(request)}`);
    return request.customerId;
}

AuthRouterDTO.validateToken = (request) => {
    console.info(`Inside AuthRouterDTO.validateToken where request = ${JSON.stringify(request)}`);
    return request.token;
}

export default AuthRouterDTO;