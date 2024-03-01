const transferGet = require("../Status/transferGet")

const getSearch =  async() => {
    // const response =  await transferGet("https://api.test.hotelbeds.com/transfer-api/1.0/availability/en/from/ATLAS/265/to/IATA/PMI/2024-03-01T12:15:00/2024-03-02T20:00:00/2/0/0")
    const response =  await transferGet("https://api.test.hotelbeds.com/transfer-cache-api/1.0/masters/vehicles?fields=ALL&language=es&offset=1&limit=10")
    
    // const search=response.search

return response
}
      
module.exports = getSearch