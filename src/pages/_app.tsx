import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Layout from "../Layout/layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);
  const { pathname } = useRouter();
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <>
      {ready ? (
        <Layout pathname={pathname}>
          <Component {...pageProps} />
        </Layout>
      ) : null}
    </>
  );
}
