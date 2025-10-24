const express = require('express');
const Joi = require('joi');
const { signupValidation, loginValidation } = require('../middlewares/authValidation');
const { signup, login } = require('../controllers/authController');
const Router = express.Router();
Router.post('/login', loginValidation, login);
Router.post('/signup', signupValidation, signup)

module.exports = Router;