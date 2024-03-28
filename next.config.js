/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // 关闭严格模式
  skipTrailingSlashRedirect: true, // 跳过尾部斜杠重定向
  skipMiddlewareUrlNormalize: true, // 跳过中间件url规范化
};

module.exports = nextConfig;
