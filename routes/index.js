const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is the root directory"));

router.post("/template", controllers.createTemplate);
router.get("/templates", controllers.getAllTemplates);
router.get("/templates/:id", controllers.convertTemplateToPdfByID);
router.get("/templates/:id/download", controllers.downloadTemplateByID);



module.exports = router;
