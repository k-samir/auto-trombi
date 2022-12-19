const { v4: uuidv4 } = require("uuid");
const express = require("express");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const cors = require("cors");
var fs = require("fs");
const authMiddle = require("./helpers/auth");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
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
    return res
      .status(400)
      .json({ message: "The username or password you entered is incorect." });
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
    (user) => user.username.toLowerCase() == req.body.credentials.username.value.toLowerCase()
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

app.get("/getUser", authMiddle, (req, res) => {
  let data = JSON.parse(fs.readFileSync("data.json"));
  const user = data.users.find((user) => user.id == req.query.id);

  if (user) {
    const { password, ...restObject } = user;
    return res.send({ user: restObject });
  }
  return res.status(404).json({
    message: "User not found",
  });
});

app.get("/getMember", authMiddle, (req, res) => {
  let data = JSON.parse(fs.readFileSync("data.json"));
  console.log(req.query.id);
  const member = data.members.find((member) => member.id == req.query.id);

  if (member) {
    return res.send({ member: member });
  }
  return res.status(404).json({
    message: "Member not found",
  });
});

app.get("/getRemainingMembers", authMiddle, (req, res) => {
  let data = JSON.parse(fs.readFileSync("data.json"));
  console.log(req.query.groupId);
  console.log(req.query.subGroupId);

  const group = data.groups.find(
    (group) => group.id == req.query.groupId
  ).subGroups;

  const memberInSubGroup = group.find(
    (subgroup) => subgroup.id == req.query.subGroupId
  ).membersId;

  const remainingMembers = data.members.filter(
    (member) => !memberInSubGroup.includes(member.id)
  );

  if (remainingMembers) {
    return res.send({ remainingMembers: remainingMembers });
  }
  return res.status(404).json({
    message: "Members not found",
  });
});

app.get("/getGroups", authMiddle, (req, res) => {
  let data = JSON.parse(fs.readFileSync("data.json"));

  const groups = data.groups;
  if (groups) {
    return res.send({ groups: groups });
  }
  return res.status(404).json({
    message: "Groups not found",
  });
});

app.post("/addNewMemberToSubGroup", (req, res) => {
  // firstname:string,lastname:string,company:string,picture:string,companyLogo:string
  let data = JSON.parse(fs.readFileSync("data.json"));

  if (
    !req.body.firstname ||
    !req.body.lastname ||
    !req.body.company ||
    !req.body.picture ||
    !req.body.companyLogo ||
    !req.body.groupId ||
    !req.body.subGroupId
  ) {
    return res.status(400).json({
      message: "Error. Please make sure all fields are filled in correctly",
    });
  }

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const company = req.body.company;
  const picture = req.body.picture;
  const companyLogo = req.body.companyLogo;
  const groupId = req.body.groupId;
  const subGroupId = req.body.subGroupId;

  const duplicate = data.members.find((member) => member.firstname.toLowerCase() == firstname.toLowerCase() && member.lastname.toLowerCase() == lastname.toLowerCase());

  if (!duplicate) {
    fs.readFile("data.json", "utf8", function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data);
        const memberId = uuidv4();
        obj.members.push({
          id: memberId,
          firstname: firstname,
          lastname: lastname,
          company: company,
          picture: picture,
          companyLogo: companyLogo
        })

        obj.groups
          .find((group) => group.id == groupId)
          .subGroups.find((subGroup) => subGroup.id == subGroupId)
          .membersId.push(memberId);

        json = JSON.stringify(obj);
        fs.writeFile("data.json", json, "utf8", (err) => {
          if (err) console.log(err);
          else {
            console.log(firstname + " " + lastname + " added successfully");
          }
        });
      }
    });
    return res.status(200).json({ message: "Member added successfully" });
  }
  return res.status(409).json({ message: "Member already exists." });
});

app.post("/addExistingMemberToSubGroup", (req, res) => {
  let data = JSON.parse(fs.readFileSync("data.json"));

  if (!req.body.groupId || !req.body.memberId || !req.body.subGroupId) {
    return res.status(400).json({
      message: "Error. Please make sure all fields are filled in correctly",
    });
  }

  const groupId = req.body.groupId;
  const subGroupId = req.body.subGroupId;
  const memberId = req.body.memberId;

  const group = data.groups.find((group) => group.id == groupId).subGroups;
  const memberInSubGroup = group.find(
    (subgroup) => subgroup.id == subGroupId
  ).membersId;

  const duplicate = memberInSubGroup.find((member) => member.id == memberId);

  if (!duplicate) {
    fs.readFile("data.json", "utf8", function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data);
        obj.groups
          .find((group) => group.id == groupId)
          .subGroups.find((subGroup) => subGroup.id == subGroupId)
          .membersId.push(memberId);
        json = JSON.stringify(obj);
        fs.writeFile("data.json", json, "utf8", (err) => {
          if (err) console.log(err);
          else {
            console.log(memberId + " added successfully");
          }
        });
      }
    });

    return res.status(200).json({ message: "Member added successfully" });
  }

  return res.status(409).json({ message: "Member already in subgroup." });
});

app.get("*", (req, res) => {
  return res.status(404).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
