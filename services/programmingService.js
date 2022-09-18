// const db = require('../config/db');
// const { message, responseCode } = require("../common/message");
// const responseData = require("../common/responseData");
// const _ = require('lodash');

// const {  validationResult }    = require('express-validator');
// const multer = require("multer");

// const log4js = require('./../config/log4js');
// const logger = log4js.getLogger("error");

// const uploadFile = require('./../middlewares/multipleUploadMiddleware');
// const fs = require('fs');

// module.exports = {
//     getAll,
//     getById,
//     create,
//     update,
//     delete: _delete,
//     upload
// };

// async function getAll() {
//     return await db.Programming.findAll();
// }

// async function create(req) {

//     try {

//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return responseData(responseCode.unprocessableEntity, false, message.unprocessableEntity, errors.array())
//         }
//         const { name, released_year, tiobe_rank } = req.body;

//         const params = {
//             name,
//             released_year,
//             tiobe_rank
//         };

//         // validate with database
//         if (await db.Programming.findOne({ where: { name: params.name } })) {

//             return responseData(responseCode.notAcceptable, false, message.notAcceptable, 'name must be unique')
//         }

//         const programming = new db.Programming(params);
//         let created = await programming.save();
//         const obj = await db.Programming.findByPk(created.id)
//         return responseData(responseCode.created, true, message.created, obj)
//     } catch (error) {
//         logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
//         return responseData(false, responseCode.error, error.message, null)
//     }
// }
// async function _delete(req) {
//     try {
//         const id = req.params.id;
//         const obj = await db.Programming.findByPk(id);
//         if (_.isNull(obj)) {

//             return responseData(false, responseCode.notAcceptable, message.notAcceptable, null)
//         }
//         await obj.destroy();
//         return responseData(responseCode.ok, true, message.ok, null)

//     } catch (error) {
//         logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
//         return responseData(false, responseCode.error, error.message, null)
//     }
// }

// async function getById(req) {
//     const id = req.params.id;
//     const obj = await db.Programming.findByPk(id);
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

//     const obj = await db.Programming.findByPk(id);
//     //obj.name =name
//     // copy params to user and save
//     Object.assign(obj, params);

//     //console.log(obj)

//     //  await db.Programming.update(obj, { where: { id: id },returning: true,
//     //  plain: true })
//     obj.save();

//     return responseData(responseCode.ok, true, message.ok, obj)

// }

// async function upload(req,res) {
  
//     try{

//         await uploadFile(req, res,file);
//         if (req.files == undefined) {
//           return res.status(400).send({ message: "Upload a file please!" });
//         }
//         res.status(200).send({
//           message: "The following file was uploaded successfully: " + req.file,
//         });

        
//         // uploadmid(req, res, function (err) {

//         //     if (req.fileValidationError) {
             
//         //         return responseData(responseCode.ok, true, message.ok, req.fileValidationError)
//         //     }
//         //     else if (!req.file) {
//         //         return responseData(responseCode.ok, true, message.ok, 'Please select an image to upload')
//         //     }
//         //     else if (err instanceof multer.MulterError) {
               
//         //         return responseData(responseCode.ok, true, message.ok, err)

//         //     }
//         //     else if (err) {
             
//         //         return responseData(responseCode.ok, true, message.ok, err)
//         //     }
    
//         //     return responseData(responseCode.ok, true, message.ok, `You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`)
//         // })
    

//         return responseData(responseCode.ok, true, message.ok, req.files)
//     }catch (error) {
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