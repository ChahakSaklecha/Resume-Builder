const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

const merge = async (inpJson) => {
  try {
    const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
      .withClientId('5866f30de3fd43dfb8a943b18643ed4e')
      .withClientSecret('p8e-H6mZDt6eqIwBQlmUj5Qkma81SYaY53XL')
      .build();

    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);
    const documentMerge = PDFServicesSdk.DocumentMerge;
    const documentMergeOptions = documentMerge.options;

    // Read the template file based on the template_id provided
    const templateFilePath = `./resources/template-${inpJson.template_id}.docx`;

    const options = new documentMergeOptions.DocumentMergeOptions(inpJson, documentMergeOptions.OutputFormat.PDF);
    const documentMergeOperation = documentMerge.Operation.createNew(options);

    // Set the input template file
    const inputTemplate = PDFServicesSdk.FileRef.createFromLocalFile(templateFilePath);
    documentMergeOperation.setInputTemplate(inputTemplate);

    try {
      const result = await documentMergeOperation.execute(executionContext);
      const outputFilePath = './output.pdf';
      await result.saveAsFile(outputFilePath);

      return outputFilePath;
    } catch (err) {
      console.log('Exception encountered while executing operation:', err);
      return null;
    }
  } catch (err) {
    console.log('Exception encountered while executing operation:', err);
    return null;
  }
};

module.exports = {
  merge,
};