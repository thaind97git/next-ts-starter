import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { wrapper } from 'redux/store'


function MyApp({ Component, ...rest }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(rest)

    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    )
}

export default MyApp
