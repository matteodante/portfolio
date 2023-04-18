import Link from "next/link";
import { useRouter } from "next/router";

export default function Languages() {
  const { locales } = useRouter();
  return (
    <div className="locales">
      <div className="color-options">
        {[...locales].sort().map((locale) => (
          <Link key={locale} href="/" locale={locale}>
            <div
              className={`circle`}
              style={{ background: `url("/${locale}.png")` }}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
