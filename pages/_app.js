import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import it from "../lang/it.json";
import en from "../lang/en.json";
import sv from "../lang/sv.json";
import fr from "../lang/fr.json";
import de from "../lang/de.json";

const messages = { it, en, sv, de, fr };

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
