const { Register } = require("../../../db");
const crypto = require('crypto');
const login = async (req, res) => {
  try {
    const { email, password } = req.body; 
    
    if (!email || !password)
    return res.status(404).json({ message: "insuficient data" });
  
  const user = await Register.findOne({ where: { email: email }});
  
  if (!user) return res.status(404).json({ message: "user not found " });
 

const encript = crypto.createHash('sha256').update(password).digest('hex');
    const isMatch = await Register.findOne({ where: { password: encript } });

    if (!isMatch) {
      res.status(403).json({ message: "Incorrect password" });
    }

    res.status(200).json({ access: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = login;