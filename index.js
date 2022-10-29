express = require('express')

app = express()

app.set('view engine', 'hbs');

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use('/', require('./routes/login'))

app.get('/bootstrap.css', (req,res)=>{
    res.sendfile('./views/bootstrap.css')
})
app.get('/auth/bootstrap.css', (req,res)=>{
    res.sendfile('./views/bootstrap.css')
})
app.listen(3000, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Server has been started")
    }
})