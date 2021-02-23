import path from "path";
import express from "express";
import bodyParser from "body-parser";
import * as DataBase from "./database";

const PORT = process.env.PORT || 5000;
const app = express();

//Serve static files from client
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(bodyParser.json());

// Test av TypeScript:
// Greeter.greet();

//API
app.get("/api/case", async (_, res) => {
  // console.debug("GET api/case called!");
  let cases = (await DataBase.getAllCases()).Items;
  res.json(cases);
});

app.post("/api/case", async (req, res) => {
  // console.debug("POST api/case called!");
  await DataBase.saveCase(req.body);
  res.json("case added");
});

//SERVER
app.listen(PORT, () => {
  console.log(`Express server listening at port ${PORT}.`);
});
