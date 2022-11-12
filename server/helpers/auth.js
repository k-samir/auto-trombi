const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const auth =  (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ');
        if(token[0] === 'Bearer' && jwt.verify(token[1], process.env.SECRET_KEY)){
            next()
        }
    }
    catch(err){
        console.log(err);
        res.sendStatus(401);
    }
}

module.exports = auth;