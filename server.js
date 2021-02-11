import express from "express";

const PORT = process.env.HTTP_PORT || 4001;
const app = express();

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
  console.log(`Server listening at port ${PORT}.`);
});
