const router=require("express").Router();
const bcrypt=require('bcrypt')
const User=require('../models/user');
router.get("/",(req,res)=>{
    res.json({message:"Auth Route"})
})
 
//register user 

router.post('/register',async (req,res)=>{
    try{
        const { username,email,password}=req.body;
        //generate new hashed password
        const hashPassword=await bcrypt.hash(password,10);
        const user=await new User({
            username:username,
            email:email,
            password:hashPassword
        })
        //user saved
        const response=await user.save();
        //user returned
        return res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        return res.status(500).json({error:error.message})
    }
    
})

// login 

router.post('/login',async (req,res)=>{
    try{
        const { email ,password}=req.body;
        const user= await User.findOne({email:email}).exec();
        if(user)
        {
            const isUser=await bcrypt.compare(password,user.password);
            if(isUser)
            return res.status(200).json(user);
            return res.status(500).json({message:"validation Failed"})  
        }
        return res.status(500).json({message:"Validation Failed"})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({message:error.message})
    }
})

module.exports=router;