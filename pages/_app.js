import { AgeContextProvider } from "../context/AgeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AgeContextProvider>
      <Component {...pageProps} />;
    </AgeContextProvider>
  );
}

export default MyApp;
