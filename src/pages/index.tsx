import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('modules/Home'), { ssr: false })

function HomePage() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Home />
        </>
    )
}

export default HomePage
