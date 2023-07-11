const express = require("express");
const bodyParser = require("body-parser");
const merge = require("./merge");
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle POST request to create PDF
app.post("/create-pdf", async (req, res) => {
  try {
    const formData = req.body;
    const result = await merge(formData);

    if (result) {
      res.download(result, "resume.pdf", (err) => {
        if (err) {
          console.error("Error downloading PDF:", err);
        }
        // Delete the temporary PDF file
        fs.unlinkSync(result);
      });
    } else {
      res.status(500).send("Error creating PDF");
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.on("error", (error) => {
  console.error("Server error:", error);
});