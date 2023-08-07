const User=require('../model/user')

exports.create_user= async  (req,res)=>{
try {

    const{name,email,password}=req.body
    const new_data=await User.create({email,password,name})
    res.status(200).json({
        success:true,
        new_data
    })
    
} catch (error) {
   console.log(error)
   res.status(500).json({success:false,error}) 
}
}

exports.login_user= async  (req,res)=>{
    try {
    
        const{email,password}=req.body
        const user=await User.find({"email":email})
      if(user.length >0){
        const verify_user=await User.find({"email":email,"password":password})
        if(verify_user.length>0){
            res.status(200).json({
                success:true,
                verify_user

            })
        }
        else{
          res.status(201).json({
              success:false,
              massage:"wroang credential"
          })
      }
      }
else{
        res.status(201).json({
            success:false,
            massage:"email is not registered"
        })
      }
        
    } catch (error) {
       console.log(error)
       res.status(500).json({success:false,error}) 
    }
    }

    exports.get_allusers= async(req,res)=>{

try {
    const all_users=await User.find()
    res.status(200).json({
        success:true,
        all_users
    })
} catch (error) {
   console.log(error)
   res.status(500).json({
    success:false,error
   }) 
}
    }
