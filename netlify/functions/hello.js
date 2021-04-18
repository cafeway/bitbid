var axios = require('axios').default;

var options = {
    
  }
exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: axios({
            method: 'GET',
            url: 'https://api.proxyapi.co.ke/sandbox/mpesa/v1/auth',
            headers: {
              'X-Authorization': 'Basic 40ca323c8f19bd3c34df48320881110de55fc3f48344e0000d1c0144fb66235b',
              'Content-Type': 'application/json'
    }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
    };
}
