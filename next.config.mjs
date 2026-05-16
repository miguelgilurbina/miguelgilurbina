/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    turbopack: {},
    async redirects() {
        return [
            {
                source: '/sst-crm',
                destination: '/sst-crm.html',
                permanent: false,
            },
        ];
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(pdf)$/i,
            type: 'asset/resource',
        })
        return config
    },
};

export default nextConfig;
