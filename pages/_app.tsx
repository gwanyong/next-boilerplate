import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import themes from "~/styles/global-styles";
import { fetcher } from "~/utils/fetcher";
import { SWRConfig } from "swr";
import GlobalStyles from "~/styles/global-styles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { fallback } = pageProps;
  const router = useRouter();
  const option = {
    fetcher,
    fallback: fallback || {},
  };

  return (
    <RecoilRoot>
      <ThemeProvider theme={themes}>
        <SWRConfig value={option}>
          <GlobalStyles />
          <Component {...pageProps} />;
        </SWRConfig>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default MyApp;
