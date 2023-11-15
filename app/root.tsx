import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/Footer';
import Header from './components/Header';

import resetStyles from './styles/reset.css';
import globalStyles from './styles/global.css';

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: resetStyles
        },
        {
            rel: 'stylesheet',
            href: globalStyles
        }
    ];
};

export const meta: MetaFunction = () => [
    {
        charset: 'utf-8',
        title: 'New Remix App',
        viewport: 'width=device-width,initial-scale=1'
    }
];

export default function App() {
    return (
        <html lang="en">
            <head>
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
