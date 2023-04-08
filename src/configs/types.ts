export namespace Environment {
    export enum EnvName {
        DEVELOPMENT = 'dev',
        STAGING = 'stag',
        PRODUCTION = 'prod'
    }
    export type VARIABLES = {
        API_URL: string
        CDN_URL?: string
    }
}
