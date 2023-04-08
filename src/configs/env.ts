import { Environment } from './types'

export const { EnvName } = Environment

export const AppEnv = process.env.APP_ENV

type EnvKeys = (typeof EnvName)[keyof typeof EnvName]

const envs: {
    [key in EnvKeys]: Environment.VARIABLES
} = {
    [EnvName.DEVELOPMENT]: {
        API_URL: 'http://localhost:3001',
        CDN_URL: 'cdn_url'
    },
    [EnvName.STAGING]: {
        API_URL: 'http://localhost:3001',
        CDN_URL: 'cdn_url'
    },
    [EnvName.PRODUCTION]: {
        API_URL: 'http://localhost:3001',
        CDN_URL: 'cdn_url'
    }
}

export const Config: Environment.VARIABLES = envs[AppEnv as EnvKeys]
