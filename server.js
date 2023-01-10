const express = require("express");
const verifyAuth = require("./auth");
const app = express();
const authen = require("./auth");
const port = 5000;
app.use(verifyAuth);
app.use(express.static("page"));

app.listen(port, function () {
  console.log(
    "the server in running," +
      " please, open your browser at http://localhost:%s",
    port
  );
});
