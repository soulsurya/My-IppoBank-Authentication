import Joi from 'joi';

const AdminAuthJoiSchema = {}

AdminAuthJoiSchema.generateOtp = Joi.object().keys({
    phoneNumber: Joi.string().required(),
});

AdminAuthJoiSchema.verifyOtp = Joi.object().keys({
    phoneNumber: Joi.string().required(),
    otp: Joi.string().required()
});

AdminAuthJoiSchema.generateToken = Joi.object().keys({
    branchId: Joi.string().required()
});

AdminAuthJoiSchema.validateToken = Joi.object().keys({
    token: Joi.string().required()
});

export default AdminAuthJoiSchema;