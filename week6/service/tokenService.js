import axios from 'axios';
import qs from 'qs';

let cachedToken = null;

const fetchToken = async () => {
  if (cachedToken) {
    return cachedToken;
  }
  try {
    const data = {
      grant_type: 'client_credentials',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    };
    const response = await axios.post(
      `${process.env.FEDEX_END_POINT}/oauth/token`,
      qs.stringify(data),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    cachedToken = response.data.access_token;
    return cachedToken;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error;
  }
};

export default fetchToken;
