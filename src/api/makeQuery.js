import axios from 'axios';

const makeQuery = async (options) => {
  try {
    const response =  await axios.request(options);
    return response.data;
  } catch(error) {
    console.log(error.response);
  }
};

export default makeQuery;
