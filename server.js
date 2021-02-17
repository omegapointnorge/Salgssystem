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
Greeter.greet();

//API
app.get("/api/users", async (_, res) => {
  // console.debug("api/users called!");
  let users = (await DataBase.getAllUsers()).Items;
  res.json(users);
});

app.post("/api/user", async (req, res) => {
  // console.debug("api/user called!");
  const user = req.body.user;
  await DataBase.putUsers(user);
  res.json("user added");
});

//SERVER
app.listen(PORT, () => {
  console.log(`Express server listening at port ${PORT}.`);
});
