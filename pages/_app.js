import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import UserContextProvider from '../contexts/userContext';
import OrgContextProvider from '../contexts/orgContext';
import ManageBoardsContextProvider from '../contexts/manageBoardsContext';
import JoinGameContextProvider from '../contexts/joinGameContext';
import PlayContextProvider from '../contexts/playContext';
import BiosContextProvider from '../contexts/biosContext';
// import LoreContextProvider from '../contexts/loreContext';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
//   static async getInitialProps(appContext) {
//     // calls page's `getInitialProps` and fills `appProps.pageProps`
//     const appProps = await App.getInitialProps(appContext);
  
//     return { ...appProps }
//   }

  render() {
    const { Component, pageProps } = this.props;

    return (
        <div>
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
                </Head>
                <style jsx global>{`
                    body { 
                        margin: 0px;
                        font-family: 'Roboto', sans-serif;
                    }
                `}</style>
            </div>
            {/* <LoreContextProvider> */}
            <BiosContextProvider>
                <PlayContextProvider>
                    <JoinGameContextProvider>
                        <ManageBoardsContextProvider>
                            <OrgContextProvider>
                                <UserContextProvider>
                                    <Component {...pageProps} />
                                </UserContextProvider>
                            </OrgContextProvider>
                        </ManageBoardsContextProvider>
                    </JoinGameContextProvider>
                </PlayContextProvider>
            </BiosContextProvider>
            {/* </LoreContextProvider> */}
        </div>
    )
  }
}

export default MyApp