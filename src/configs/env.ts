const env = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000/api',
  API_BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    'https://asia-southeast2-sejutacita-app.cloudfunctions.net',
};

export default env;
