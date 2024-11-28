import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "nl", "fr"],
    defaultLocale: "fr",
});

export const config = {
    matcher: ["/", "/(nl|en|fr)/:path*"]
}