const mongoose  = require('mongoose')
// const DB=   "mongodb+srv://syedvali221:Babavali221@cluster0.wtcgclm.mongodb.net/?retryWrites=true&w=majority"
const DB ="mongodb://127.0.0.1:27017/twitter"

exports.connect_mongo=()=>{
    mongoose.connect(DB)
    .then(res=>console.log(res.connection.host))
    .catch(err=>console.log(err))
}
