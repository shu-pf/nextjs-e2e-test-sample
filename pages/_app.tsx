import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain="dev-m73dlxu0.us.auth0.com"
      clientId="vBSSxEFuNrVeQZ121F84iK06nKM5w1RG"
      authorizationParams={{
        redirect_uri:
          typeof window !== "undefined" && window.location.origin
            ? window.location.origin
            : "",
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
