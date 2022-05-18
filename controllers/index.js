const Template = require("../models/template");
const fs = require("fs");
var FileReader = require("filereader");
const multiparty = require("multiparty");
const base64toFile = require("node-base64-to-file");

const getAllTemplates = async (req, res) => {
  try {
    const template = await Template.find();
    return res.status(200).json({ template });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createTemplate = async (req, res) => {
  try {
    // const reader = new FileReader();
    // reader.onload = function () {
    //   alert(reader.result);
    // };
    // let result = reader.readAsBinaryString(req.body.file);

    // let binaryTemplate = {
    //   name: req.body.name,
    //   description: req.body.description,
    //   file: req.body.file,
    // };

    // function getBase64(file) {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => resolve(reader.result);
    //     reader.onerror = (error) => reject(error);
    //   });
    // }
    // let fileBase64 = getBase64(req.body.file);
    // let base64Template = {
    //   name: req.body.name,
    //   description: req.body.description,
    //   file: fileBase64,
    // };
    // const template = await new Template(base64Template);

    const template = await new Template(req.body);
    await template.save();

    return res.status(201).json({ template });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const convertTemplateToPdfByID = async (req, res) => {
  try {
    const { id } = req.params;
    const template = await Template.findById(id);

    if (template) {
      let file = template.file;
      let buff = Buffer.from(file, "base64");
      fs.writeFileSync("result.pdf", buff);
      return res.status(404).json({ file });
    }
    return res.status(404).send("Template does not exist with the given ID");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createTemplate,
  getAllTemplates,
  convertTemplateToPdfByID,
};
