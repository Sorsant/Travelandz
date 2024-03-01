const express = require("express");

const Registers = require("../../controllers/Register-Users/Register")
const Login = require('../../controllers/Register-Users/Login')
const router = express.Router();


router.post("/singup", async(req,res)=>{
    try {
         Registers(req,res)
        res.json({ message: 'Registro exitoso' });
    } catch (error) {       
        res.status(500).send("notFound",)
    }
})
router.post("/login",async(req,res)=>{
  try {
    const data = await Login(req,res)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send("notFound")
  }

})


module.exports = router;