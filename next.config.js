/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.heraldm.com', 'cdn.mkhealth.co.kr','img.hankyung.com','borikkori.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
