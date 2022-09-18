// require('dotenv').config();
// const db = require('../config/db');
// const { message, responseCode } = require("../common/message");
// const responseData = require("../common/responseData");
// const _ = require('lodash');
// const { validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
// const jsonwebtoken = require('jsonwebtoken');
// const log4js = require('../config/log4js');
// const logger = log4js.getLogger("error");


// async function getAll() {
//     return await db.User.findAll();
// }

// async function create(req) {

//     try {

//         //  const verified = bcrypt.compareSync('password', "$2a$10$eb6T6xFvlIm.B7X2CeB78u748EMHOirdfPepLCftqSRaDmg818Utm");
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return responseData(responseCode.unprocessableEntity, false, message.unprocessableEntity, errors.array())
//         }
//         // convert tai khoản về chữ thường
//         const { username, password } = req.body;
//         // validate with database
//         if (await db.User.findOne({ where: { username: username.toLowerCase() } })) {

//             return responseData(responseCode.notAcceptable, false, message.notAcceptable, 'Username already exists ')
//         }

//         const salt = bcrypt.genSaltSync(10);
//         const hashPw = bcrypt.hashSync(password, salt);
//         const params = {
//             username: username.toLowerCase(),
//             password: hashPw
//         };

//         const programming = new db.User(params);
//         let created = await programming.save();
//         const obj = await db.User.findByPk(created.id)
//         return responseData(responseCode.created, true, message.created, obj)
//     } catch (error) {
//         logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
//         return responseData(false, responseCode.error, error.message, null)
//     }
// }
// async function _delete(req) {
//     try {
//         const id = req.params.id;
//         const obj = await db.User.findByPk(id);
//         if (_.isNull(obj)) {

//             return responseData(false, responseCode.notAcceptable, message.notAcceptable, null)
//         }
//         await obj.destroy();
//         return responseData(responseCode.ok, true, message.ok, null)

//     } catch (error) {

//         return responseData(false, responseCode.error, error.message, null)
//     }
// }

// async function getById(req) {
//     const id = req.params.id;
//     const obj = await db.User.findByPk(id);
//     if (_.isNull(obj)) {

//         return responseData(false, responseCode.noContent, message.noContent, null)
//     }
//     return responseData(responseCode.ok, true, message.ok, obj)
// }

// async function update(req) {
//     const { id, name, released_year, tiobe_rank } = req.body;

//     const params = {
//         name,
//         released_year,
//         tiobe_rank
//     };

//     const obj = await db.User.findByPk(id);
//     obj.name = name
//     // copy params to user and save
//     //Object.assign(obj, params);

//     console.log(obj)

//     //  await db.User.update(obj, { where: { id: id },returning: true,
//     //  plain: true })
//     obj.save();

//     return responseData(responseCode.ok, true, message.ok, obj)

// }

// async function auth(req, res) {
//     try {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return responseData(responseCode.unprocessableEntity, false, message.unprocessableEntity, errors.array())
//         }
//         const { username, password } = req.body;

//         let user = await db.User.findOne({ where: { username: username.toLowerCase() } })
//         if (_.isNull(user)) {

//             return responseData(responseCode.noContent, false, `Account doesn't exist`, null)
//         }

//         const verified = bcrypt.compareSync(password, user.password);

//         if (verified) {
//             let userInfo = {
//                 id: user.id,
//                 username: user.username,
//                 fullname:user.fullname,
//                 avatar:user.fullname
//             };
//             const jsontoken = jsonwebtoken.sign({ user: userInfo }, process.env.SECRET_KEY, { expiresIn: '24h' });

//             let data = {
//                 user: userInfo,
//                 accessToken: jsontoken,
//                // expires: ''
//             }

//             res.cookie('accessToken', jsontoken, { httpOnly: true, secure: true, SameSite: 'strict', expires: new Date(Number(new Date()) + 30 * 60 * 1000) }); //we add secure: true, when using https.

//             return responseData(responseCode.ok, true, message.ok, data);
//         }
//         return responseData(responseCode.noContent, false, `Password invalid`, null)
//     } catch (error) {
//         logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
//         return responseData(false, responseCode.error, error.message, null)
//     }

// }

// /*


// async function create(params) {
//     // validate
//     if (await db.User.findOne({ where: { email: params.email } })) {
//         throw 'Email "' + params.email + '" is already registered';
//     }

//     const user = new db.User(params);
    
//     // hash password
//     user.passwordHash = await bcrypt.hash(params.password, 10);

//     // save user
//     await user.save();
// }



// // helper functions

// async function getUser(id) {
//     const user = await db.User.findByPk(id);
//     if (!user) throw 'User not found';
//     return user;
// }
// */

// module.exports = {
//     getAll,
//     getById,
//     create,
//     update,
//     delete: _delete,
//     auth
// };