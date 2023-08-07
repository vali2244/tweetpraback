const express=require("express")
const { create_user, login_user, get_allusers } = require("../controller/user")
const router=express.Router()


router.route("/create/user").post(create_user)
router.route("/login/user").post(login_user)
router.route("/getall/user").get(get_allusers)





module.exports=router