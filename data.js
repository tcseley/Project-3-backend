// This is the call for data from the yelp api
const axios = require('axios');
axios.get('https://api.yelp.com/v3/businesses/search?term=coffee&location=SanDiego', {
    headers: {
      'Authorization': `Bearer oXuKoZijv8fziZTs5FxqFvo8zUC6A6I0WAathMrbRPCphprIhIyYEwXLpZxUe939iRDRkvbKbRxHKS_z-DvV-fGK0aCSSHSJCo27eto-9ym79UckJQMTodze_-DAYHYx`
    }
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })
