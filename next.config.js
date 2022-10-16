/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true, 
            domains: ["images.pexels.com","images.unsplash.com", "source.unsplash.com", "stage.dkfyp4khiw8ax.amplifyapp.com", "us.coca-cola.com"] 
          } 
}

module.exports = nextConfig
