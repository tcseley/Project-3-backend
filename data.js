// This is the call for data from the yelp api
const axios = require('axios');

axios.get('https://api.yelp.com/v3/businesses/search?location=sandiego')
.then(response => {
    console.log(response.data);
});