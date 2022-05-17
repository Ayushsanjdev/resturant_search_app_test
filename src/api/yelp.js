import axios from "axios";
import cache from '../util/cache';

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer 8pL-Foo4LOlg3AQCJy7OL7IOrv0HQN2m9q12YwMvzeYZZGiIbmzTsp9knxLya8tpViJt-sqt-9q_cXbgP_B9QLBz5zYG3r4cP7Zi6Aipn_iNqAoFrylYOe5NdotzYnYx",
  },
});
