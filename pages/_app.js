import RootLayout from "../layout/layout";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <RootLayout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </RootLayout>
  );
};

export default App;
