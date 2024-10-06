const express = require('express')
const jwt = require('jsonwebtoken')
const adminRoutes = require('./routes/admin.routes')
const userRoutes = require('./routes/user.routes')

const app = express()

app.use('/admin', adminRoutes)
app.use('/user', userRoutes)


app.listen(8000, ()=> {
  console.log("server is running on 8000")
})