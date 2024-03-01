const { Register,User } = require("../../../db");
const crypto = require('crypto');
const Registers = async (req, res) => {
  try {
    const {name,email,password,lastname,country,phone} = req.body;
 
if(!name||!email||!password||!lastname||!country||!phone){
    res.status(404).send({error:"insuficient data"});
}
const existMail = (await Register.findAll()).filter(exist => exist.email === email)
const existPhone = (await Register.findAll()).filter(exist => exist.phone === phone)
if(existMail.length === 1)return  res.status(201).json({ message: `email in use`})
if(existPhone.length === 1) return  res.status(201).json({ message: `phone number in use`})
const encript = crypto.createHash('sha256').update(password).digest('hex');
  const newUser = await Register.create({
    email,
    password:encript,
    name,
    lastname,
    country,
    phone
  })
  // const genrNam = await User.create({
  //   email,
  //   password:encript
    
  // });
return res.status(201).send({ message:`Registered user ${newUser.name}`})


  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = Registers;