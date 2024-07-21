const User = require('../model/User');

const bcrypt = require('bcrypt');

const handleNewUser = async(req,res)=>
{
   const {pwd , user, email} =req.body;
   if(!user || !pwd || !email) return res.status(400).json({'message' : 'Username , password and Email Ema are required'});

   const duplicate = await User.findOne({ $or: [{ username: user }, { email: email }] }).exec();
   if (duplicate)
   {  
     return res.sendStatus(409);
   
   }//Conflict
 
try{
    const hashedpwd = await bcrypt.hash(pwd,10) ;

     const result = await User.create({
        "username" : user ,
        "password" : hashedpwd ,
        "email" : email 
     }) ;

     console.log(result);

     res.status(201).json({'success': `New user ${user} created!`}) ;
}
catch(err)
{
    res.status(500).json({ 'message': err.message }); 
}

}


module.exports = { handleNewUser }; 
