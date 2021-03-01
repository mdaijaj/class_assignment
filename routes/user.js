const express=require('express')
const users=require('../controller/user')
const router=express()

//routes
router.post('/post_class', users.post_class)
router.get('/class_list', users.getfilter)
router.get('/future_class_list', users.future_class)


module.exports={
   router
}