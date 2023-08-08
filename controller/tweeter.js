const Tweet=require('../model/tweeter.js')

exports.create_tweet=async(req,res)=>{
try {
    const {text,user}=req.body
const new_tweet=await Tweet.create({text,user})
res.status(200).json({
    success:true,
    new_tweet
})
} catch (error) {
  console.log(error)
  res.status(500).json({
success:false,
error:error
  })  
}

}


exports.get_alltweets=async(req,res)=>{
    try {
        const all_tweets=await Tweet.find()
        res.status(200).json ({
            success:true,
            all_tweets
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error
        })
    }
}

exports.delete_tweet =async(req,res)=>{

try {

    const tweet = await Tweet.findByIdAndDelete(req.params.id)
res.status(200).json({
    success:true,
    message:'tweet deleted'
})

} catch (error) {
    res.status(500).json({
        success:false,
        error
    })
}

}