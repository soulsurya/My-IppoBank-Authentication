import constants from "../constants.js";
import OtpController from "../auth/otp.js";
import AuthHandlerDTO from "./dto/auth.js";
import AuthController from "../auth/token.js";

const AuthHandler = {}

AuthHandler.generateOtp = async (phoneNumber) => {
    try {
        console.info(`AuthHandler.generateOtp where phoneNumber = ${phoneNumber}`);
        let handlerResponse = AuthHandlerDTO.getBaseResponse();
        handlerResponse.data = await OtpController.generateOtp(phoneNumber);
        if (!handlerResponse.data) {
            handlerResponse.message = constants.CUSTOM_MESSAGES[100];
            handlerResponse.success = false;
        }
        return handlerResponse;
    } catch (error) {
        console.error(`In AuthHandler.generateOtp where phoneNumber = ${phoneNumber} and error is ${error.message}`);
        throw error;
    }
};

AuthHandler.verifyOtp = async (routerDTO) => {
    try {
        console.info(`AuthHandler.verifyOtp where routerDTO = ${JSON.stringify(routerDTO)}`);
        let handlerResponse = AuthHandlerDTO.getBaseResponse();
        handlerResponse.data = await OtpController.verifyOtp(routerDTO.phoneNumber, routerDTO.otp);
        if (!handlerResponse.data) {
            handlerResponse.message = constants.CUSTOM_MESSAGES[101];
            handlerResponse.success = false;
        }
        return handlerResponse;
    } catch (error) {
        console.error(`In AuthHandler.verifyOtp where routerDTO = ${JSON.stringify(routerDTO)} and error is ${error.message}`);
        throw error;
    }
};

AuthHandler.generateToken = async (customerId) => {
    try {

        console.info(`AuthHandler.generateToken where customerId = ${customerId}`);
        let handlerResponse = AuthHandlerDTO.getBaseResponse();
        handlerResponse.data = await AuthController.generateToken(customerId);
        if (!handlerResponse.data) {
            handlerResponse.message = constants.DEFINED_ERRORS[701];
            handlerResponse.success = false;
        }
        return handlerResponse;
    } catch (error) {
        console.error(`In AuthHandler.generateToken where customerId = ${customerId} and error is ${error.message}`);
        throw error;
    }
};

AuthHandler.validateToken = async (token) => {
    try {
        console.info(`AuthHandler.validateToken where token = ${token}`);
        let handlerResponse = AuthHandlerDTO.getBaseResponse();
        handlerResponse.data = await AuthController.validateToken(token);
        if (!handlerResponse.data) {
            handlerResponse.message = constants.DEFINED_ERRORS[701];
            handlerResponse.success = false;
        }
        return handlerResponse;
    } catch (error) {
        console.error(`In AuthHandler.validateToken where token = ${token} and error is ${error.message}`);
        throw error;
    }
};

export default AuthHandler;