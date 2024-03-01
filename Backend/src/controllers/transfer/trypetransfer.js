
const transferGet = require("../Status/transferGet")

const getTransferType =  async() => {
    
    const response =  await transferGet("https://api.test.hotelbeds.com/transfer-cache-api/1.0/masters/transferTypes?fields=ALL&language=es&offset=1&limit=10")

return response
}
      
module.exports = getTransferType