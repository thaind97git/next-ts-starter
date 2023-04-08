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
    },
    transpilePackages: ['@mui/material', '@mui/icons-material', '@mui/styles', '@mui/lab', 'mdi-material-ui'],
    modularizeImports: {
        '@mui/material/?(((\\w*)?/?)*)': {
            transform: '@mui/material/{{ matches.[1] }}/{{member}}'
        },
        '@mui/icons-material/?(((\\w*)?/?)*)': {
            transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
        },
        '@mui/styles': {
            transform: '@mui/styles/{{member}}'
        },
        '@mui/lab': {
            transform: '@mui/lab/{{member}}'
        },
        'mdi-material-ui': {
            transform: 'mdi-material-ui/{{member}}'
        }
    }
}

module.exports = nextConfig
