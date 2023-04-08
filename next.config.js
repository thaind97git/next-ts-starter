/** @type {import('next').NextConfig} */

const envAcceptCDN = process.env.APP_ENV === 'stag' || process.env.APP_ENV === 'prod'
const isDev = process.env.APP_ENV === 'dev'

const loadImageConfig = () => {
    const defaultConfig = {
        loader: 'imgix',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.sub-domain.com'
            }
        ]
    }
    if (envAcceptCDN) return { ...defaultConfig, path: 'https://cdn-url' }
    return undefined
}

const nextConfig = {
    swcMinify: true,
    reactStrictMode: false,
    compiler: {
        removeConsole: !isDev
    },
    assetPrefix: envAcceptCDN ? 'https://cdn-url' : undefined,
    images: loadImageConfig(),
    env: {
        APP_ENV: process.env.APP_ENV
    }
}

module.exports = nextConfig
