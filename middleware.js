import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";

const defaultLocale = "en";
const locales = ["bn", "en"];

const getLcale = (request) => {
  const acceptedLocal = request.headers.get("accept-language") ?? undefined;

  const headers = { "accept-language": acceptedLocal };
  const language = new Negotiator({ headers }).languages();
  return match(language, locales, defaultLocale);
};

export const middleware = (request) => {
  const pathname = request.nextUrl.pathname;
  const isPathNameMissingWithLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  if(isPathNameMissingWithLocale){
    const locale = getLcale(request);

    return NextResponse.redirect(new URL(`/${locale}/${pathname}`,request.url))
  }
  return NextResponse.next()
};



export const config = {
  matcher: [
    /*
      Match all paths except:
      - static files
      - API routes
    */
    '/((?!api|assets|.*\\..*|_next).*)',
  ],
};