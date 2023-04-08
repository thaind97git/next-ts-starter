import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

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

export default CustomDocument
