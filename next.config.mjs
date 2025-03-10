/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "s3.ap-southeast-1.amazonaws.com",
      "images.pexels.com",
      "orancia-s3.s3.ap-south-1.amazonaws.com",
      "restaurant-tcj.netlify.app",
      "cdn.techinasia.com",
      "i.pinimg.com",
      "cdn2.stylecraze.com",
      "restaurant-tcj.netlify.app",
      "i.ibb.co"
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
