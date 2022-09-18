
// const { progammingValidation } = require("../validation/validator");
// const uploadFile = require('./../middlewares/multipleUploadMiddleware');
// const auth = require('../middlewares/auth');


// module.exports = app => {
//   const categoryController = require("../controllers/programmingController");

//   var router = require("express").Router();
//   // Create a new Tutorial
//   router.post("/create", progammingValidation, categoryController.create);


//   // Retrieve all Tutorials
//   router.get("/all", categoryController.findAll);

//   // Retrieve all published Tutorials
//   // router.get("/published", tutorials.findAllPublished);
//   // Retrieve a single Tutorial with id
//   router.get("/:id",auth, categoryController.findOne);
//   // Update a Tutorial with id
//    router.put("/", categoryController.update);
//   // Delete a Tutorial with id
//   router.delete("/:id", categoryController.delete);

//    //router.post("/upload",uploadFile,categoryController.upload);
//   router.post("/upload",categoryController.upload);

//   // Delete all Tutorials
//   // router.delete("/", tutorials.deleteAll);
//   app.use('/api/programming', router);
// };