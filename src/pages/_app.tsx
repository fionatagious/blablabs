import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
<<<<<<< HEAD
<<<<<<< HEAD
// import "../../public/styles/global.css";
=======
>>>>>>> 57197536a95b3cf6f165b990a56bea52a730f822
=======
>>>>>>> 57197536a95b3cf6f165b990a56bea52a730f822
import "../../public/styles/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
