import axios from 'axios';

import env from './env';

const fetcher = axios.create({
  baseURL: env.BASE_URL,
});

export default fetcher;
