const crypto = require('crypto');

const generateSignature = (apiKey, secret) => {
    const timestamp = Math.floor(Date.now() / 1000);
    const stringToSign = apiKey + secret + timestamp;
    const signature = crypto.createHash('sha256').update(stringToSign).digest('hex');
    return signature;
};
module.exports = generateSignature