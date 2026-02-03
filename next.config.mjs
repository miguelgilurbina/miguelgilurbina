/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    turbopack: {},
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(pdf)$/i,
            type: 'asset/resource',
        })
        return config
    },
};

export default nextConfig;
