/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enforces React strict mode
  poweredByHeader: false,
  output: "export",
  images: {
    unoptimized: true, // Disables Next.js' built-in Image Optimization
  },
};

export default nextConfig;
