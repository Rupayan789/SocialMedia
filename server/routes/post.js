const router=require('express').Router();
const Post=require('../models/post')

//create Post 
router.post("/",async (req,res)=>{
   
    const post=new Post(req.body)
    try{
        const savedPost=await post.save()
        return res.status(200).json(savedPost)
    }
    catch(error)
    {
        return res.status(500).json({message:error.message})
    }
})
//update post
router.put('/:id',async (req,res)=>{
    const id=req.params.id;
    try{
        const post=await Post.findById(id)
        if(post.userId===req.body.userId){
            await post.updateOne({$set:req.body});
            await post.save();
            return res.status(200).json({message:"Post has been updated"})
        }
        else
        return res.status(500).json({message:"You cannot update somebody else post"})
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
})
//delete post
router.delete('/:id',async (req,res)=>{
    const id=req.params.id;
    try{
        const post=await Post.findById(id)
        if(post.userId===req.body.userId){
            await post.deleteOne();
            return res.status(200).json({message:"Post has been deleted"})
        }
        else
        return res.status(500).json({message:"You cannot delete somebody else post"})
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
})
//like post
router.put("/:id/like",async (req,res)=>{
    const id=req.params.id;
    try{
        const post=await Post.findById(id);
        if(post.likes.includes(req.body.userId))
        {
            return res.status(500).json({message:"You have already liked the post"});
        }
        else
        {
                await post.updateOne({$push:{likes:req.body.userId}});
                return res.status(200).json({message:"Post Liked"})     
        }
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
})
//dislike post
router.put("/:id/dislike",async (req,res)=>{
    const id=req.params.id;
    try{
        const post=await Post.findById(id);
        if(post.likes.includes(req.body.userId))
        {
            await post.updateOne({$pull:{likes:req.body.userId}});
            return res.status(200).json({message:"Post Liked"})     
        }
        else
        {
            return res.status(500).json({message:"You have not liked the post"});
        }
        
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
})
//get all timeline posts

module.exports=router;