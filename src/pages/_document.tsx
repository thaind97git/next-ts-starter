import React, { Children } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import createEmotionServer from '@emotion/server/create-instance'
import { createEmotionCache } from 'styles/theme/utils/create-emotion-cache'

class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="Next Typescript Starter" />
                    <meta name="author" content="thaind" />
                    <meta name="keywords" content="NextJS,Typescript" />
                    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

CustomDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) =>
                (
                    <App
                        {...props} // @ts-ignore
                        emotionCache={cache}
                    />
                )
        })

    const initialProps = await Document.getInitialProps(ctx)
    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style) => {
        return (
            <style key={style.key} dangerouslySetInnerHTML={{ __html: style.css }} data-emotion={`${style.key} ${style.ids.join(' ')}`} />
        )
    })

    return {
        ...initialProps,
        styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags]
    }
}

export default CustomDocument
