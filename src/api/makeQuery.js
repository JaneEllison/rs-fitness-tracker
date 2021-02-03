import axios from 'axios';

async function makeQuery(options) {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return false;
  }
}

export default makeQuery;
