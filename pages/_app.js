import { AuthUserProvider } from "@/firebase/auth";
import "@/styles/globals.css";
import Head from "next/head";


export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Sankalp - Todo App</title>
                <meta name="description" content="Todo App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AuthUserProvider>
                <Component {...pageProps} />
            </AuthUserProvider>
        </>
    );
}
