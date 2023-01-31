import { useAuth0 } from "@auth0/auth0-react";
import Head from "next/head";

export default function SignIn() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Head>
        <title>サインイン</title>
      </Head>
      <main>
        <h1>サインイン</h1>
        <button onClick={() => loginWithRedirect()}>サインイン</button>
      </main>
    </>
  );
}
