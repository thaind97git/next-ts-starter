import React from 'react'

import * as jwt from 'services/jwt'
import { getAccessToken, getRefreshToken } from 'services/localStorage/auth'

enum AuthenType {
    LOADING,
    LOGGED,
    LOGOUT
}

export const withAuthen = (Component: React.FC) => {
    return (props: any) => {
        const [isLogged, setIsLogged] = React.useState<AuthenType>(AuthenType.LOADING)

        React.useEffect(() => {
            const accessToken = getAccessToken()
            const isAccessTokenExpired = jwt.isTokenExpired(accessToken as string)

            if (isAccessTokenExpired) {
                const isRefreshTokenExpired = jwt.isTokenExpired(getRefreshToken() as string)
                setIsLogged(isRefreshTokenExpired ? AuthenType.LOGOUT : AuthenType.LOGGED)
            } else setIsLogged(AuthenType.LOGGED)
        }, [])

        if (isLogged === AuthenType.LOADING || isLogged === AuthenType.LOGOUT) {
            if (isLogged === AuthenType.LOGOUT) {
                // Call logout
            }

            return 'Backdrop' // Backdrop component
        }

        return <Component {...props} />
    }
}
