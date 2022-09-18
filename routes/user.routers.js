
// const { userValidation } = require("../validation/validator");
// const auth = require('../middlewares/auth');



// module.exports = app => {
//   const userController = require("../controllers/userController");
//   var router = require("express").Router();
//   // Create a new Tutorial
//   router.post("/create",auth, userValidation, userController.create);


//   // Retrieve all Tutorials
//   router.get("/all", userController.findAll);

//   // Retrieve all published Tutorials
//   // router.get("/published", tutorials.findAllPublished);
//   // Retrieve a single Tutorial with id
//   router.get("/:id", userController.findOne);
//   // Update a Tutorial with id
//    router.put("/", userController.update);
//   // Delete a Tutorial with id
//   router.delete("/:id", userController.delete);
//   router.post("/auth", userController.auth);

//   // Delete all Tutorials
//   // router.delete("/", tutorials.deleteAll);
//   app.use('/api/user', router);
// };