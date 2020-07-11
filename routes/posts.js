const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find()
        res.json(posts)

    } catch(err) {
        res.json({message:err})
    }
})

router.get('/:aid', async (req,res)=>{
    try{
        const post = await Post.findById(req.params.aid)
        res.json(post)

    } catch(err) {
        res.json({message:err})
    }
})

router.delete('/:aid', async (req,res)=>{
    try{
        const removedPost = await Post.remove({_id: req.params.aid})
        res.json(removedPost)
    } catch(err) {
        res.json({message:err})
    }
})

router.patch('/:aid', async (req,res)=>{
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.aid}, 
            { $set: {title: req.body.title }}
            )
        res.json(updatedPost)
    } catch(err) {
        res.json({message:err})
    }
})

router.post('/', async (req,res) => {
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        desciption: req.body.desciption,
        data: req.body.data
    })

    try{
        const savedPost = await post.save()
        res.json(savedPost)
    } catch(err) {
        res.json({message:err})
    }

})

module.exports = router;