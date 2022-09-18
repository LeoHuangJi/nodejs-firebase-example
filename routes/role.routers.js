
// const { userValidation } = require("../validation/validator");
// const auth = require('../middlewares/auth');



// module.exports = app => {
//   const roleController = require("../controllers/roleController");
//   var router = require("express").Router();
//   // Create a new Tutorial
//   router.post("/create",auth, userValidation, roleController.create);


//   // Retrieve all Tutorials
//   router.get("/all", roleController.findAll);

//   router.get("/:id", roleController.findOne);
//   // Update a Tutorial with id
//    router.put("/", roleController.update);
//   // Delete a Tutorial with id
//   router.delete("/:id", roleController.delete);


//   // Delete all Tutorials
//   // router.delete("/", tutorials.deleteAll);
//   app.use('/api/role', router);
// };