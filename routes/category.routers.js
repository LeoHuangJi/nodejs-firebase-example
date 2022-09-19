


module.exports = app => {
  const categoryController = require("../controllers/categoryController");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/create", categoryController.create);
  router.get("/all", categoryController.list);
  router.get("/:id", categoryController.findOne);
  router.put("/update", categoryController.update);
  router.delete("/:id", categoryController.delete);
  router.patch("/:id", categoryController.remove);


  app.use('/api/category', router);
};