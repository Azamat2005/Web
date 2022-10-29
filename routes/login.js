express = require('express')

router = express.Router()

router.get('/', (req,res) => {
    res.render('login')
})

router.post('/auth/login', (req,res) => {
    
    const {password, login} = req.body

    if (password == "Azamat20050308" && login == "Azamat2005"){
        res.render('index')
    }else{
        res.render('login', {message:"Password or login eror"})
    }
})

module.exports = router