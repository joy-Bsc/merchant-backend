const DataModel = require('../../model/users/UsersModel');
const OTPSModel = require('../../model/users/OTPSModel');
const UserCreateService = require('../../services/users/UserCreateService');
const UserLoginService = require('../../services/users/UserLoginService');
const UserUpdateService = require('../../services/users/UserUpdateService');
const UserDetailsService = require('../../services/users/UserDetailsService');
const UserResetPassService = require('../../services/users/UserResetPassService');
const UserVerifyOtpService = require('../../services/users/UserVerifyOtpService');
const UserVerifyEmailService = require('../../services/users/UserVerifyEmailService');

exports.Registration = async (req, res) => {
    let response = await UserCreateService(req, DataModel);
    res.status(200).send(response);
}

exports.Login = async (req, res) => {
    let response = await UserLoginService(req, DataModel);
    res.status(200).send(response);
}

exports.ProfileUpdate = async (req, res) => {
    let response = await UserUpdateService(req, DataModel);
    res.status(200).send(response);
}

exports.ProfileDetails = async (req, res) => {
    let response = await UserDetailsService(req, DataModel);
    res.status(200).send(response);
}

exports.RecoverResetPassword = async (req, res) => {
    let response = await UserResetPassService(req, DataModel);
    res.status(200).send(response);
}

exports.RecoverVerifyOtp = async (req, res) => {
    let response = await UserVerifyOtpService(req, OTPSModel);
    res.status(200).send(response);
}

exports.RecoverVerifyEmail = async (req, res) => {
    let response = await UserVerifyEmailService(req, DataModel);
    res.status(200).send(response);
}
