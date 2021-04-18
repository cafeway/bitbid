const fetch = require("node-fetch");

const API_ENDPOINT = "https://api.proxyapi.co.ke/sandbox/mpesa/v1/auth";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT,{
       headers: { 
        'X-Authorization': 'Basic 40ca323c8f19bd3c34df48320881110de55fc3f48344e0000d1c0144fb66235b',
        'Content-Type': 'application/json'
        } 
    })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
}
