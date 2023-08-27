import axios from 'axios';

const baseUrl = 'https://api.unsplash.com';

const fetchImages = async (searchTerm) => {
  try {
    const response = await axios.get(
      `${baseUrl}/search/photos?per_page=25&query=${searchTerm}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    );
    return response;
  } catch (error) {
    return error;
  }

  // const response = await axios
  //   .get(
  //     `${baseUrl}/search/photos?per_page=25&query=${searchTerm}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
  //   )

  //   .catch((err) => {
  //     return err;
  //   });
  // return response;
};

export default fetchImages;
