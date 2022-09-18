// const { message, responseCode } = require("../common/message");
// const responseData = require("../common/responseData");

// const userService = require('../services/userService');


// exports.create = (req, res) => {
   
//     userService.create(req).then(data => res.json(data))

// };
// exports.auth = (req, res) => {
   
//     userService.auth(req,res).then(data => res.json(data))

// };



// exports.findAll = (req, res, next) => {
//     const title = req.query.title;
//     userService.getAll()
//         .then(data => res.json(responseData(true, responseCode.ok, message.ok, data)))
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving tutorials."
//             });
//         });
// };
// exports.findOne = (req, res) => {
//     userService.getById(req).then(data => res.json(data))
// };
// exports.findAllPublished = (req, res) => {
   
// };
// exports.update = (req, res) => {
//     userService.update(req).then(data => res.json(data))
// };
// exports.delete = (req, res) => {
 
//     userService.delete(req).then(data => res.json(data))

 
    
    

// };
// exports.deleteAll = (req, res) => {

// };