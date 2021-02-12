import path from 'path';
import express from "express";

const PORT = process.env.PORT || 5000;
const app = express();

//Serve static files from client
app.use(express.static(path.join(__dirname, 'client', 'build')));

//API
app.get("/", (req, res) => {
  res.send("just gonna send it");
});
app.get("/flower", (req, res) => {
  res.json({
    name: "Dandelion",
    colour: "Blue-ish",
  });
});

//SERVER
app.listen(PORT, () => {
  console.log(`This herehere Server listening at port ${PORT}.`);
});
