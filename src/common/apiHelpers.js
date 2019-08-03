import axios from "axios";

export const makeGetRequest = async url => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    throw e; /* Handle generic exceptions here and specific exceptions at component level */
  }
};
