import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const OTP_CHANNEL = 'sms', APPROVED_STATUS = 'APPROVED', PENDING_STATUS = 'PENDING';

const OtpController = {};

OtpController.generateOtp = async (phoneNumber) => {
    console.info(`Inside OtpController.generateOtp where phoneNumber = ${phoneNumber}`);
    let result = await client.verify.v2.services(process.env.TWILIO_SERVICE_ID).verifications.create({ to: `+91${phoneNumber}`, channel: OTP_CHANNEL })
    return result?.status?.toUpperCase() === PENDING_STATUS
}

OtpController.verifyOtp = async (phoneNumber, otp) => {
    console.info(`Inside OtpController.verifyOtp where phoneNumber = ${phoneNumber} and otp = ${otp}`);
    let result = await client.verify.v2.services(process.env.TWILIO_SERVICE_ID).verificationChecks.create({ to: `+91${phoneNumber}`, code: otp });
    console.log(JSON.stringify(result))
    return result?.status?.toUpperCase() === APPROVED_STATUS
}

export default OtpController;