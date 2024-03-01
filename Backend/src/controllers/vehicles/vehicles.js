const transferGet = require("../Status/transferGet")

const getVehicles =  async() => {
    
    const response =  await transferGet("https://api.test.hotelbeds.com/transfer-cache-api/1.0/masters/vehicles?fields=ALL&language=es&offset=1&limit=10")
 
return response
}
      
module.exports = getVehicles