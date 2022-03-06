/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapBox_public_accessToken:
      "pk.eyJ1Ijoici1pbGlhc3MiLCJhIjoiY2wwZmJ2aTNtMHJmNzNkcG9iM2Jtb2x3ciJ9.ju6kWCae58mFHa0AAsxNYw",
  },
};

module.exports = nextConfig;
