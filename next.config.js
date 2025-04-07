/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desabilita explicitamente o Turbopack
  experimental: {
    turbo: {
      enabled: false
    }
  },
  // Configurações adicionais
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig; 