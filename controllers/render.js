
 import { convertTemplateToPdfByID } from "../controllers/index.js";
const fs = require("fs");
const carbone = require("carbone");




const buffer = Buffer.alloc(1024);
const convertTo = 'pdf';
const extension = 'odt';
const templatePath = './templates';
const emptyFormatters = {};
const formatters = {
    ...emptyFormatters,
    json: data => JSON.stringify(data),
};

const template = "";
const options = {
    templatePath,
    templateName,
    outputPath,
    outputName,
    formatters,
      // set the output file encoding
    outputFileEncoding: "utf-8",
    // set the output file type
    outputFileType: "pdf",
    // set the output file size
    outputFileSize: "A4",
    // set the output file orientation
    outputFileOrientation: "portrait",
    // set the output file margin
    outputFileMargin: "1cm",
    // set the output file page size
    outputFilePageSize: "A4",
    // set the output file page orientation
    outputFilePageOrientation: "portrait",
    // set the output file page margins
    outputFilePageMargin: "1cm"
};

const render = async (req, res) => {
    try {
        const { id } = req.params;
        const template = await Template.findById(id);
        if (template) {
            let file = template.file;
            let buff = Buffer.from(file, "base64");
            fs.writeFileSync("result.odt", buff);
            const templatePath = './templates/template.odt';
            const templateName = 'result.odt';
            const outputPath = './templates/result.pdf';
            const outputName = 'result.pdf';
            const formatters = {
                ...emptyFormatters,
                json: data => JSON.stringify(data),
            };
           console.log(templatePath, templateName, outputPath, outputName, formatters);
            carbone.render(options, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Success");
                }
            });// fs is used to create the PDF file from the render result
            fs.writeFileSync(outputPath, result);
            process.exit();
        } else {
            return res.status(404).send("Template does not exist with the given ID");
        } 
            return res.status(200).sendFile(
                outputPath,
                {
                    headers: {
                        "Content-Type": "application/pdf",
                        "Content-Disposition": "attachment; filename=result.pdf",
                    },
                },
                (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Success");
                    }
                }
            );
        
    } catch (err) {
        console.log(err);
        return res.status(500).send("Server error");
    }
};  

        
        const emptyRenderXMLOptions = {};
        const renderXMLOptions = {
            ...emptyRenderXMLOptions,
            complement: data,
            formatters
        };
        
        carbone.set(emptyOptions);
        carbone.set(options);
        carbone.reset();
        
        carbone.addFormatters(formatters);
        
        carbone.render(template, data, options, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Success");
            }
        });





// template source file
const template = "";

// rendered report file
const report = "";

// options object is used to pass more parameters to carbone render function
const options = {
  convertTo: "pdf", // can be docx, txt, etc.
    outputFileName: "report.pdf", // output file name
    outputFilePath: "./templates/", // output file path
    outputFileEncoding: "utf-8", // output file encoding
    outputFileType: "pdf", // output file type
    outputFileSize: "A4", // output file size
    outputFileOrientation: "portrait", // output file orientation
    outputFileMargin: "1cm", // output file margin
    outputFilePageSize: "A4", // output file page size
    outputFilePageOrientation: "portrait", // output file page orientation
    outputFilePageMargins: "1cm" // output file page margins

};

const renderPdf = (data) => {
  carbone.render(template, data, options, (err, res) => {
    if (err) {
      return console.log(err);
    }

    // fs is used to create the PDF file from the render result
    fs.writeFileSync(report, res);
    process.exit();
  });
};

const emptyRenderXMLOptions = {};
const renderXMLOptions = {
    ...emptyRenderXMLOptions,
    complement: data,
    formatters
};

carbone.set(emptyOptions);
carbone.set(options);
carbone.reset();

carbone.addFormatters(formatters);


const simpleRender = () => {
  // data object to inject
  const data = {
    now_application_guid: "ed04d734-80f3-4aba-8fc0-ecefdcf65cca",
    now_number: "0",
    mine_guid: "c7f28868-02b9-4cef-a077-873623bc82a6",
    mine_name: "Matthews PLC",
    mine_no: "31871563",
    mine_region: "NW",
  };

    renderPdf(data);
};

simpleRender();

module.exports = {
    renderPdf,
    simpleRender,
};
