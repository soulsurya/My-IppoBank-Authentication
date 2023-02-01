import Joi from 'joi';

const AuthJoiSchema = {}

AuthJoiSchema.generateOtp = Joi.object().keys({
    phoneNumber: Joi.string().required(),
});

AuthJoiSchema.verifyOtp = Joi.object().keys({
    phoneNumber: Joi.string().required(),
    otp: Joi.string().required()
});

AuthJoiSchema.generateToken = Joi.object().keys({
    customerId: Joi.string().required()
});

AuthJoiSchema.validateToken = Joi.object().keys({
    token: Joi.string().required()
});

export default AuthJoiSchema;