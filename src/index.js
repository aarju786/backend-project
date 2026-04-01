const mongoose = require ("mongoose")
const express = require ("express")
const {evenodd} = require("./Controller/Usercontroller")
const app = express();

const port = 5000;

const mogourl = "mongodb+srv://sharmaarju049_db_user:WjuOTf3xufIasF8N@aarju.cpli5s7.mongodb.net/?appName=Aarju"


mongoose.connect(mogourl)

.then(() => console.log(`mongo db connect`))
.catch((e) => console.log(`mongo db error ${e}`))

app.listen(port, () => {console.log(`server is running on port ${port}`)})

console.log(evenodd(2));