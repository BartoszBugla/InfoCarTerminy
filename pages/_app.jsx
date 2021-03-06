import App from "next/app";
import Head from "next/head";
import React from "react";
import "../styles.css";
export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>Terminy info car Jastrzębie</title>
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}
