import path from 'path';
import express from "express";
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 5000;
const app = express();

const users = [];

//Serve static files from client
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(bodyParser.json());

//API
app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

// app.get('/', (req,res) => {
//   res.sendFile(path.join(__dirname, 'my-app', 'build', 'index.html'));
//   // E:/Google Drive/Prosjekter/Software Development/ReactNode/react-nodejs-example/
//   console.log("Root dirname: ", ___dirname);
//   // res.sendFile('E:/Google Drive/Prosjekter/Software Development/ReactNode/react-nodejs-example/my-app/build/index.html'); // Denne måten å gjøre det på fungerer fint lokalt
// });

//SERVER
app.listen(PORT, () => {
  console.log(`Express server listening at port ${PORT}.`);
});
