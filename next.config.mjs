/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'img.odcdn.com.br',
            },
        ],
    }
};

export default nextConfig;
