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
            // Dirección Creativa era sobre todo Curiana Radio, que ahora tiene su caso.
            {
                source: '/direccion-creativa',
                destination: '/curiana-radio',
                permanent: true,
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
