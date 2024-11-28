import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";

const locales = ["en", "nl"];

export default getRequestConfig(async ({ requestLocale }) => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.

  let locale = await requestLocale;
  if (!locale || !locales.includes(locale as never)) {
    locale = "en";
  }

  // if (!locales.includes(locale as any)) notFound();

  return {
    // locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
