


module.exports = app => {
  const categoryController = require("../controllers/categoryController");
  var router = require("express").Router();
  // Create a new Tutorial
 router.post("/create", categoryController.create);


  // Retrieve all Tutorials
  router.get("/all", categoryController.findAll);

//   // Retrieve all published Tutorials
//   // router.get("/published", tutorials.findAllPublished);
//   // Retrieve a single Tutorial with id
  router.get("/:id", categoryController.findOne);
//   // Update a Tutorial with id
//    router.put("/", categoryController.update);
//   // Delete a Tutorial with id
   router.delete("/:id", categoryController.delete);
   router.patch("/:id", categoryController.remove);

//   router.post("/auth", categoryController.auth);

//   // Delete all Tutorials
//   // router.delete("/", tutorials.deleteAll);
 app.use('/api/category', router);
};