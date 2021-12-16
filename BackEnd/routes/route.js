const express = require('express')

const router  = express.Router();

const Signup = require('../models/signupModels')


router.post('/signup',(request,response)=>{
    const signedupUser = new Signup({
        fullName:request.body.fullName,
        userName:request.body.userName,
        email:request.body.email,
        password:request.body.password
    })
    signedupUser.save()
    .then(date=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

module.exports = router