/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio']
    },
    output: 'export',
    basePath: '/car-hub',
}

module.exports = nextConfig
