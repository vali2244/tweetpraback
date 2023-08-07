const express=require('express')
const { create_tweet, get_alltweets, delete_tweet } = require('../controller/tweeter')
const router=express.Router()

router.route('/create/tweet').post(create_tweet)
router.route('/get/alltweets').get(get_alltweets)
router.route('/delete/tweet/:id').delete(delete_tweet)





module.exports=router






