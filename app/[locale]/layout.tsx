import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "../globals.css";
// import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "SupaDupa - Let's build some good companies!",
  description: "SupaDupa website clone by devwithzain",
};

export default async function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
      >
        <NextIntlClientProvider messages={messages}>
          {/* <Navbar /> */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
