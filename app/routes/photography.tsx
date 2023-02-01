import type { LinksFunction } from '@remix-run/node';
import photographyStyles from '../styles/photography.css';

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: photographyStyles
        }
    ];
};

export default function PhotographyRoute() {
    return (
        <>
            <h1>Photography</h1>
            <section>
                <div>Insert photos here...</div>
            </section>
            <div className="photo-grid">
                <picture>
                    <img
                        src="https://res.cloudinary.com/setholito/image/upload/v1650167556/unsplash/mj-tangonan-wKfTNWaDYgs-unsplash-cropped.jpg"
                        alt="City of Austin aerial view"
                    />
                </picture>
                <picture>
                    <img
                        src="https://res.cloudinary.com/setholito/image/upload/v1650167556/unsplash/mj-tangonan-wKfTNWaDYgs-unsplash-cropped.jpg"
                        alt="City of Austin aerial view"
                    />
                </picture>
                <picture>
                    <img
                        src="https://res.cloudinary.com/setholito/image/upload/v1650167556/unsplash/mj-tangonan-wKfTNWaDYgs-unsplash-cropped.jpg"
                        alt="City of Austin aerial view"
                    />
                </picture>
            </div>
        </>
    );
}
