
const transferGet = require("../Status/transferGet")

const getCategories =  async() => {
    
    const response =  await transferGet("https://api.test.hotelbeds.com/transfer-cache-api/1.0/masters/categories?fields=ALL&language=es&offset=1&limit=1000")
    
    

return response
}
      
module.exports = getCategories