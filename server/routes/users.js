const router=require('express').Router();
const User=require('../models/user');
const bcrypt=require('bcrypt');
router.get("/",(req,res)=>{
    res.json({message:"User route"})
})

//update user

router.put("/:id",async (req,res)=>{
    
    const id=req.params.id;
    if(id===req.body.userId || req.body.isAdmin){
        try{
            if(req.body.password)
            {
                req.body.password=await bcrypt.hash(req.body.password,10);
            }
        }
        catch(error){
            res.status(500).json({message:error.message})
        }
        try{
            const newUser=await User.findByIdAndUpdate(id,{ $set:req.body},{ new:true});
            return res.status(200).json(newUser)
        }
        catch(error){
            res.status(500).json({message:error.message})
        }
        
    }
   
    else
    res.json({message:"You can update Only Your Account"})
    


})

//delete user
router.delete("/:id",async (req,res)=>{
    const id=req.params.id;
    if(id===req.body.userId || req.body.isAdmin)
    {
        try{
            const user= await User.findByIdAndDelete(id).exec();
            return res.status(200).json({message:"User Deleted"})
        }
        catch(error)
        {
            return res.status(500).json({message:error.message})
        }
        
    }
    else
    {
        return res.status(500).json({message:"You cannot delete somebody else account"})
    }
})

//get a user

router.get("/:id",async (req,res)=>{
    const id=req.params.id;
    try{
        const user=await User.findById(id).exec();
        const { password,updatedAt,...other}=user._doc;
        return res.status(200).json({...other});
    }
    catch(error){
        return res.status(500).json({message:"No user Found"})
    }
    
})

//follow
router.put("/:id/follow",async (req,res)=>{
    const id=req.params.id;
    if(id===req.body.userId)
    {
        res.status(500).json({message:"You cannot follow yourself"})
    }
    else
    {
        try
        {
            const user=await User.findById(id);
            const currentUser=await User.findById(req.body.userId)
            //check if already the currentuser is a follower
        

            if(user.followers.includes(req.body.userId))
            return res.status(500).json({messsage:"You are already a follower"});
            user.followers.push(req.body.userId);
            currentUser.following.push(id);
            await currentUser.save();
            await user.save()
            return res.status(200).json({message:"Followed successfully"})
        }
        catch(error)
        {
            res.status(500).json({message:error.message})
        }
    }
})
//unfollow

router.put("/:id/unfollow",async (req,res)=>{
    const id=req.params.id;
    if(id===req.body.userId)
    {
        res.status(500).json({message:"You cannot unfollow yourself"})
    }
    else
    {
        try
        {
            const user=await User.findById(id);
            const currentUser=await User.findById(req.body.userId)
            //check if already the currentuser is a follower
        

            if(!(user.followers.includes(req.body.userId)))
            return res.status(500).json({messsage:"You are not a follower"});
            await user.updateOne({ $pull:{ followers:req.body.userId}})
            await currentUser.updateOne({$pull:{ following:id}})
            return res.status(200).json({message:"Unfollowed successfully"})
        }
        catch(error)
        {
            res.status(500).json({message:error.message})
        }
    }
})

module.exports=router;