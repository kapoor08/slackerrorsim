const express = require("express");
const router = express.Router();
const errorController = require("../controller/error");

// Error simulation routes using the error controller
router.post("/error/400", errorController.simulateError400);
router.get("/error/403", errorController.simulateError403);
router.get("/error/404", errorController.simulateError404);
router.put("/error/422", errorController.simulateError422);
router.patch("/error/429", errorController.simulateError429);
router.get("/error/500", errorController.simulateError500);
router.delete("/error/503", errorController.simulateError503);


module.exports = router;