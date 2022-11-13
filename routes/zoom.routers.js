module.exports = app => {
    const zoomController = require("../controllers/zoomController");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/create", zoomController.createZoom);
    router.get("/all", zoomController.list);
    router.get("/:id", zoomController.findOne);
    // router.put("/update", zoomController.update);
    // router.delete("/:id", zoomController.delete);
     router.post("/joinAMeeting", zoomController.joinAMeeting);
  
  
    app.use('/api/zoom', router);
  };