import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import it from "../lang/it.json";
import en from "../lang/en.json";
import sv from "../lang/sv.json";

const messages = { it, en, sv };

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
      <Analytics />
    </>
  );
}
