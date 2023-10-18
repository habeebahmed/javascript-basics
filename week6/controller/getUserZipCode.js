import axios from 'axios';

export const getUserZipCode = async (ip) => {
  const apikey = process.env.API_KEY_IPLOCATION;
  console.log('apikey', apikey);
  const result = await axios.get(
    `https://api.ip2location.io/?key=${apikey}&ip=${ip}`
  );
  return result;
};
