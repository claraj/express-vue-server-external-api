let axios = require('axios')


const baseURL = 'https://catfact.ninja/'

function getRandomFact() {
    // request https://catfact.ninja/fact
    return axios.get(baseURL + 'fact')  // returns a promise so the method that calls this one needs to add then() ... to handle the response 
}


module.exports = { getRandomFact }  // list other functions here to export 