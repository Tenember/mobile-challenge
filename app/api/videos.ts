/**
 *  Videos API
 */
import axios from "axios";

const API_URL = "https://mobile-challenge-backend.herokuapp.com";

export const getVideos = async () => {
  const { data } = await axios.get(API_URL + `/videos`);
  return data;
};
