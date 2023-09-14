/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['tuchuang-1253437688.cos.ap-shanghai.myqcloud.com'],
  }
}

export default nextConfig
