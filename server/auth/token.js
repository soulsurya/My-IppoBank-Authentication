import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
import constants from '../constants.js';
// dotenv.config();

const AuthController = {};

AuthController.generateToken = async (customerId) => {
    try {
        console.info(`Inside AuthController.generateToken where customerId = ${customerId}`);
        return jwt.sign(customerId + constants.SPLITS.CUSTOMER_SPLIT_TOKEN + process.env.BANK_TOKEN_KEY, process.env.JWT_KEY);
    } catch (error) {
        console.error(`Error in AuthController.generateToken where customerId = ${customerId} with message = ${error.message}`);
        throw error;
    }
}

AuthController.validateToken = async (token) => {
    try {
        console.info(`Inside AuthController.validateToken where token = ${token}`);
        let userToken = token?.split(" ");
        const decodedToken = jwt.verify(userToken[1], process.env.JWT_KEY)
        let [customerId, bankToken] = decodedToken.split(constants.SPLITS.CUSTOMER_SPLIT_TOKEN)
        return customerId;
    } catch (error) {
        console.error(`Error in AuthController.validateToken where token = ${token} with message = ${error.message}`);
        throw error;
    }
}

/**
 *  Below functions will be used to generate and validate tokens for the bank (Admin) users 
 */

AuthController.generateAdminToken = async (branchId) => {
    try {
        console.info(`Inside AuthController.generateAdminToken where branchId = ${branchId}`);
        return jwt.sign(branchId + constants.SPLITS.ADMIN_SPLIT_TOKEN + process.env.BANK_TOKEN_KEY, process.env.JWT_KEY_ADMIN);
    } catch (error) {
        console.error(`Error in AuthController.generateAdminToken where branchId = ${branchId} with message = ${error.message}`);
        throw error;
    }
}

AuthController.validateAdminToken = async (token) => {
    try {
        console.info(`Inside AuthController.validateAdminToken where token = ${token}`);
        let userToken = token?.split(" ");
        const decodedToken = jwt.verify(userToken[1], process.env.JWT_KEY_ADMIN)
        let [branchId, bankToken] = decodedToken.split(constants.SPLITS.ADMIN_SPLIT_TOKEN)
        return branchId;
    } catch (error) {
        console.error(`Error in AuthController.validateAdminToken where token = ${token} with message = ${error.message}`);
        throw error;
    }
}

export default AuthController;