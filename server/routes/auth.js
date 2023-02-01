import Router from 'express-promise-router';
import constants from '../constants.js';
import Utils from '../utils.js'
import AuthHandler from '../handler/auth.js';
import AuthRouterDTO from './dto/auth.js';
import AuthJoiSchema from '../joiSchema/auth.js';

const router = Router();

router.post("/generateOtp", async function (req, res) {
    try {
        let { error } = AuthJoiSchema.generateOtp.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = AuthRouterDTO.generateOtp(req.body);
        let handlerResponse = await AuthHandler.generateOtp(routerDTO);
        return res.jsonp(Utils.formMessage(handlerResponse.success ? handlerResponse.data : handlerResponse.message, handlerResponse.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in auth/generateOtp with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.post("/verifyOtp", async function (req, res) {
    try {
        let { error } = AuthJoiSchema.verifyOtp.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = AuthRouterDTO.verifyOtp(req.body);
        let handlerResponse = await AuthHandler.verifyOtp(routerDTO);
        return res.jsonp(Utils.formMessage(handlerResponse.success ? handlerResponse.data : handlerResponse.message, handlerResponse.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in auth/verifyOtp with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.post("/generateToken", async function (req, res) {
    try {
        let { error } = AuthJoiSchema.generateToken.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = AuthRouterDTO.generateToken(req.body);
        let handlerResponse = await AuthHandler.generateToken(routerDTO);
        return res.jsonp(Utils.formMessage(handlerResponse.success ? handlerResponse.data : handlerResponse.message, handlerResponse.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in auth/verifyOtp with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.post("/validateToken", async function (req, res) {
    try {
        let { error } = AuthJoiSchema.validateToken.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = AuthRouterDTO.validateToken(req.body);
        let handlerResponse = await AuthHandler.validateToken(routerDTO);
        return res.jsonp(Utils.formMessage(handlerResponse.success ? handlerResponse.data : handlerResponse.message, handlerResponse.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in auth/verifyOtp with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

export default router;