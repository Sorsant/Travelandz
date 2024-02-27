const axios = require('axios');
const generateSignature = require("../Status/x-signature")

const transferGet = (URL) => {
    const apiKey = "bff37d7c1c0640388cdb16520c179cee";
    const secret = "2c044897bf";
    const signature = generateSignature(apiKey, secret);
    const url = URL;

    const config = {
        headers: {
            'Accept': 'application/json',
            'Api-key': apiKey,
            'X-Signature': signature
        }
    };

    return axios.get(url, config)
        .then(response => {
            const responseData = response.data
            return responseData;
        })
        .catch(error => {
            console.error('Error:', error.message);
            throw error; 
        });
};

module.exports = transferGet;
