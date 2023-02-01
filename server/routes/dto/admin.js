const AdminAuthRouterDTO = {};

AdminAuthRouterDTO.generateOtp = (request) => {
    console.info(`Inside AdminAuthRouterDTO.generateOtp where request = ${JSON.stringify(request)}`);
    return request.phoneNumber;
}

AdminAuthRouterDTO.verifyOtp = (request) => {
    console.info(`Inside AdminAuthRouterDTO.verifyOtp where request = ${JSON.stringify(request)}`);
    return request;
}

AdminAuthRouterDTO.generateToken = (request) => {
    console.info(`Inside AdminAuthRouterDTO.generateToken where request = ${JSON.stringify(request)}`);
    return request.branchId;
}

AdminAuthRouterDTO.validateToken = (request) => {
    console.info(`Inside AdminAuthRouterDTO.validateToken where request = ${JSON.stringify(request)}`);
    return request.token;
}

export default AdminAuthRouterDTO;