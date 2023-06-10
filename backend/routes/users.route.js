const express = require("express");
const app = express.Router();
const Users = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin.middleware");

app.use(express.json());

app.get("/admin",adminMiddleware ,async (req, res) => {
  try {
    const users = await Users.find();
    res.send(users);
  } catch (e) {
    res.send(e.message);
  }
});

app.delete("/delete/:id",adminMiddleware,async(req,res)=>{
  try{
    let {id} = req.params
    const user = await Users.findByIdAndDelete({_id : id})
    res.send("User deleted successfully")
  }
  catch(err){
    res.send(err.message)
  }
})

app.post("/signin/admin", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const exist = await Users.findOne({ email: email });
    if (exist) {
      return res.send(
        "user with this email already exist please choose different email"
        // exist
      );
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.send(err);
        } else {
          const user = await Users.create({
            username: username,
            email: email,
            password: hash,
            role : "Admin"
          });
          res.status(200).send("Sign up success");
        }
      });
    }
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const exist = await Users.findOne({ email: email });
    if (exist) {
      return res.send(
        "user with this email already exist please choose different email"
        // exist
      );
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.send(err);
        } else {
          const user = await Users.create({
            username: username,
            email: email,
            password: hash,
          });
          res.status(200).send("Sign up success");
        }
      });
    }
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({email : email})
   
    if(user){
        bcrypt.compare(password, user.password, function(err, result) {
            if(result){
                const token = jwt.sign({id : user._id ,name : user.username ,role : user.role},"SECRET123")
                res.send({msg : "Login success",token : token,name : user.username , role : user.role})
            }
            else{
                res.status(401).send("incorrect password")
            }
        });
    }
    else{
        res.status(401).send("User not found")
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = app;
