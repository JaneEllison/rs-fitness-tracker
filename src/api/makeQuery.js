import axios from 'axios';

async function makeQuery(options) {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return false;
  }
}

export default makeQuery;
