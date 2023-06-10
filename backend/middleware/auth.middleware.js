const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    const token = req.headers.authorization
    if(token){
        const decode = jwt.verify(token,"SECRET123")
        console.log(decode.id)
        req.body.userId = decode.id
        next()
    }
    else{
        res.send("No token found please login")
    }
}

module.exports = auth