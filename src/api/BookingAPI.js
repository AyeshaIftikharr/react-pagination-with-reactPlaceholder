import * as c from './Constants';

const parameters = (methodType = 'GET', data) => ({
  method: methodType,
  headers: {
    'content-type': 'application/json ; charset=UTF-8'
  },
  body: JSON.stringify(data)
});

export default {
  getALLBookingsList: (data) => {
    const url = `${c.API_URL}/${c.VERSION}/colleague/booking/list`;
    return fetch(url, parameters('POST', data))
      .then(response => response.json())
      .then(response => {
        return response;
      })
      .catch(error => console.log(error))

  }

}