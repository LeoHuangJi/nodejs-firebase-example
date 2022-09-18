const {check} = require('express-validator');

exports.validProgramming = () => {
  return [ 
    check('name', 'username does not Empty').not().isEmpty(),
    // check('user.username', 'username must be Alphanumeric').isAlphanumeric(),
    // check('user.username', 'username more than 6 degits').isLength({ min: 6 }),
    // check('user.email', 'Invalid does not Empty').not().isEmpty(),
    // check('user.email', 'Invalid email').isEmail(),
    // check('user.birthday', 'Invalid birthday').isISO8601('yyyy-mm-dd'),
    // check('user.password', 'password more than 6 degits').isLength({ min: 6 })
  ]; 
}

exports.progammingValidation = [
    check('name', 'Name is requied').not().isEmpty(),
    
]
exports.userValidation = [
         check('username', 'username more than 6 degits').isLength({ min: 3 }),

    
]
 


// let validate = {
//     validProgramming: validProgramming,
//   validateLogin: validateLogin
// };

// module.exports = {validate};