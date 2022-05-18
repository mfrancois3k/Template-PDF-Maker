const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is the root directory"));

router.post("/template", controllers.createTemplate);
router.get("/templates", controllers.getAllTemplates);
router.get("/templates/:id", controllers.convertTemplateToPdfByID);

module.exports = router;
