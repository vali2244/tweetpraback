const app = require('./app')
const {connect_mongo} = require('./config/database')
const PORT = 3005

connect_mongo()

app.listen(PORT,()=>console.log(`server running at ${PORT}`))