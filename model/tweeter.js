const mongoose=require('mongoose')

const tweet_schma =new mongoose.Schema({
    text:{type:String,require:[true,"please enter text"]},
    user:String,
time:{type:Date,
default:Date.now
}

})

module.exports=mongoose.model('Tweete',tweet_schma)
    
