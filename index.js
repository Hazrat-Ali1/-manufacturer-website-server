
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(cors())
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.075x5.mongodb.net/assignment-12?retryWrites=true&w=majority`;

mongoose.connect(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Database Is Connected'))
    .catch((err)=> console.log(err))


app.use('/users' , require('./Routes/usersRouter'))
app.use('/product' , require('./Routes/productRoute'))
app.use('/order' , require('./Routes/orderRouter'))
app.use('/review' , require('./Routes/reviewsRouter'))
app.use('/profile' , require('./Routes/profileRouter'))


app.listen(PORT, () => {
    console.log('Example app listening')
})