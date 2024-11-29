import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "nl", "fr"],
    defaultLocale: "en",
});

export const config = {
    matcher: ["/", "/(en|nl|fr)/:path*"]
}