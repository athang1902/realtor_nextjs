module.exports = {
  reactStrictMode: true,
  images: {
      domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
  },
  env: {
      NEXT_PUBLIC_RAPIDAPI_KEY: process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
  },
};
