import Router from 'express-promise-router';
import constants from '../constants.js';
import Utils from '../utils.js'
import AdminAuthHandler from '../handler/admin.js';
import AdminAuthRouterDTO from './dto/admin.js';
import AdminAuthJoiSchema from '../joiSchema/admin.js';

const router = Router();

router.post("/generateOtp", async function (req, res) {
    try {
        let { error } = AdminAuthJoiSchema.generateOtp.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = AdminAuthRouterDTO.generateOtp(req.body);
        let handlerResponse = await AdminAuthHandler.generateOtp(routerDTO);
        return res.jsonp(Utils.formMessage(handlerResponse.success ? handlerResponse.data : handlerResponse.message, handlerResponse.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in admin/auth/generateOtp with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.post("/verifyOtp", async function (req, res) {
    try {
        let { error } = AdminAuthJoiSchema.verifyOtp.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = AdminAuthRouterDTO.verifyOtp(req.body);
        let handlerResponse = await AdminAuthHandler.verifyOtp(routerDTO);
        return res.jsonp(Utils.formMessage(handlerResponse.success ? handlerResponse.data : handlerResponse.message, handlerResponse.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in admin/auth/verifyOtp with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.post("/generateToken", async function (req, res) {
    try {
        let { error } = AdminAuthJoiSchema.generateToken.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = AdminAuthRouterDTO.generateToken(req.body);
        let handlerResponse = await AdminAuthHandler.generateToken(routerDTO);
        return res.jsonp(Utils.formMessage(handlerResponse.success ? handlerResponse.data : handlerResponse.message, handlerResponse.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in admin/auth/verifyOtp with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.post("/validateToken", async function (req, res) {
    try {
        let { error } = AdminAuthJoiSchema.validateToken.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = AdminAuthRouterDTO.validateToken(req.body);
        let handlerResponse = await AdminAuthHandler.validateToken(routerDTO);
        return res.jsonp(Utils.formMessage(handlerResponse.success ? handlerResponse.data : handlerResponse.message, handlerResponse.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in admin/auth/verifyOtp with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})


export default router;