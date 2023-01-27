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
import Navbar from './components/Navbar';

import globalStyles from './styles/global.css';

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: globalStyles
        }
    ];
};

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'New Remix App',
    viewport: 'width=device-width,initial-scale=1'
});

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Navbar />
                <main className="container">
                    <Outlet />
                </main>
                <footer className="container">I'm the footer</footer>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
                <Analytics />
            </body>
        </html>
    );
}
