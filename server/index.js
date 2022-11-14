const { v4: uuidv4 } = require("uuid");
const express = require("express");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const cors = require("cors");
var fs = require("fs");
const authMiddle = require("./helpers/auth");


const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const generateToken = (user) => {
  const token = jwt.sign(
    {
      id : user.id
    },
    process.env.SECRET_KEY,
    { expiresIn: "20 minutes" }
  );
  return token;
};

app.post("/login", (req, res) => {
  let data = JSON.parse(fs.readFileSync("data.json"));

  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
      message: "Error. Please enter the correct username and password",
    });
  }

  const user = data.users.find(
    (user) =>
      user.username == req.body.username && user.password == req.body.password
  );

  if (!user) {
    return res.status(400).json({ message: "The username or password you entered is incorect." });
  }
  return res.json({ token: generateToken(user) });
});

app.post("/signup", (req, res) => {
  let data = JSON.parse(fs.readFileSync("data.json"));

  if (
    !req.body.firstname ||
    !req.body.lastname ||
    !req.body.credentials.username ||
    !req.body.credentials.password
  ) {
    return res.status(400).json({
      message: "Error. Please make sure all fields are filled in correctly",
    });
  }

  const duplicate = data.users.find(
    (user) => user.username == req.body.credentials.username.value
  );

  if (!duplicate) {
    const user = {
      id: uuidv4(),
      firstname: req.body.firstname.value,
      lastname: req.body.lastname.value,
      username: req.body.credentials.username.value,
      password: req.body.credentials.password.value,
    };

    fs.readFile("data.json", "utf8", function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data);
        obj.users.push(user);
        json = JSON.stringify(obj);
        fs.writeFile("data.json", json, "utf8", (err) => {
          if (err) console.log(err);
          else {
            console.log(user.username + " added successfully");
          }
        });
      }
    });

    return res.json({ token: generateToken(user) });
  }

  return res.status(409).json({ message: "Username already exists." });
});

app.get("/getUser",authMiddle,(req,res) => {
  
  let data = JSON.parse(fs.readFileSync("data.json"));
  const user = data.users.find(
    (user) => user.id == req.query.id
  );

  if(user){
    const { password, ...restObject } = user;
    return res.send({user : restObject});
  }
  return res.status(404).json({
    message: "User not found",
  });})

  app.get("/getMember",authMiddle,(req,res) => {
  
    let data = JSON.parse(fs.readFileSync("data.json"));
    console.log(req.query.id);
    const member = data.members.find(
      (member) => member.id == req.query.id
    );
  
    if(member){
      return res.send({member : member});
    }
    return res.status(404).json({
      message: "Member not found",
    });
  
  })
  

  app.get("/getGroups",authMiddle,(req,res) => {
  
    let data = JSON.parse(fs.readFileSync("data.json"));
    
    const groups = data.groups;
    if(groups){
      return res.send({groups : groups});
    }
    return res.status(404).json({
      message: "Groups not found",
    });})
  



app.get("*", (req, res) => {
  return res.status(404).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
