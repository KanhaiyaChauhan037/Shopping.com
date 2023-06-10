const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
  let token = req.headers.authorization;
  console.log("token=>",token);
  console.log("token ?",!!token)

  try {
    if (token) {
      let decode = jwt.verify(token, "SECRET123");
      console.log(decode);
      if(decode.role === "Admin"){
        req.body.userId = decode.id 
          next();
      }
      else{
        res.send("You are not Authorized to perform this function")
      }
    }
    else{
      res.send("invalid token")
    }
  }
 catch (e) {
    res.send("No token found please login");
  }
};

module.exports = adminMiddleware;
