import express from 'express'
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 4000;

//mongoose connection 
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/CRMdb', {
    useNewUrlParser:true,
useUnifiedTopology: true
})



//bodyParser setup
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// serving static files
app.use(express.static('public'))


routes(app);

app.get('/', (req,res) =>{
    res.send(`Node and express server running on port ${PORT}`)
})

app.listen(PORT, () => 
console.log(`Server is listening on port ${PORT}`)
)

