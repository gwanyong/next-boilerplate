import "../styles/globals.css";
import { fetcher } from "~/utils/lib/fetcher";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SWRConfiguration } from "swr";
import toast from "../utils/lib/toast/indext";
import SWRConfig from "swr/dist/utils/config-context";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { fallback } = pageProps;
  const router = useRouter();
  const option = {
    fetcher,
    fallback: fallback || {},
  };

  return (
    <SWRConfig value={option}>
      <Component {...pageProps} />;
    </SWRConfig>
  );
};

export default MyApp;
