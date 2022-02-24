const express = require("express");
const app = express();
const methodOverride = require("method-override");
const logger = require("morgan");
const cohortsRouter = require("./routes/cohorts");

app.use(express.urlencoded({ extended: true }));

app.use(
  methodOverride((req, res) => {
    if (req.body && req.body._method) {
      const method = req.body._method;
      return method;
    }
  })
);

app.use(logger("dev"));

app.get("/", (request, response) => {
  response.redirect("/cohorts");
});

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/cohorts", cohortsRouter);

const PORT = 3000;
const DOMAIN = "localhost";

app.listen(PORT, DOMAIN, () => {
  console.log(`Server is listening on http://${DOMAIN}:${PORT}`);
});
