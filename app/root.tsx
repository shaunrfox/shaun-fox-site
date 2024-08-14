import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import Header, { links as headerLinks } from "./components/Header";
import Footer, { links as footerLinks } from "./components/Footer/Footer";

import globalStyles from "~/styles/global.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStyles,
    },
    {
      rel: "icon",
      href: "assets/favicon.ico",
      type: "image/x-icon",
    },
    {
      rel: "shortcut icon",
      href: "assets/favicon.ico",
      type: "image/x-icon",
    },
    ...headerLinks(),
    ...footerLinks(),
  ];
};

export const meta: MetaFunction = () => {
  return [{ title: "shaunfox.com" }];
};

{
  /* <link rel="icon" href="/assets/img/favicon.ico" type="image/x-icon" />
	<link rel="shortcut icon" href="/assets/img/favicon.ico" type="image/x-icon" /> */
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="I'm an experienced Product Designer living in Austin, TX, with my beautiful wife and daughters."
        />
        <meta
          name="keywords"
          content="Shaun Fox, Shaun, Sean, Shawn, Fox, Design, Austin, Designer, Principal Product Designer, Product Designer, Lead UX Designer, UX Designer, Portfolio, Web Design, design technologist"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main className="container">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
