import { useEffect, useRef } from "react";
import type { LinksFunction } from "@remix-run/node";
import { Link, useLocation } from "@remix-run/react";
import headerStyles from "./header.css";
import Rule from "../Rule";
import FoxLogo, { links as foxLinks } from "~/components/Foxes/FoxLogo";
import FoxLogoOutline from "~/components/Foxes/FoxLogoOutline";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: headerStyles,
    },
    ...foxLinks(),
  ];
};

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul>
        <li>
          {pathname === "/" ? <span>Home</span> : <Link to="/">Home</Link>}
        </li>
        <li>
          {pathname === "/cv" ? <span>CV</span> : <Link to="/cv">CV</Link>}
        </li>
      </ul>
    </nav>
  );
}

export default function Header(): JSX.Element {
  const logoRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const setLogoHeight = () => {
      if (logoRef.current && window.innerWidth > 950) {
        const docHeight =
          Math.max(
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.offsetHeight
          ) - 40;
        logoRef.current.style.height = `${docHeight}px`;
      } else if (logoRef.current) {
        logoRef.current.style.height = "auto";
      }
    };

    setLogoHeight();
    window.addEventListener("resize", setLogoHeight);

    // Re-check on navigation
    setLogoHeight();

    return () => {
      window.removeEventListener("resize", setLogoHeight);
    };
  }, [pathname]);

  return (
    <header>
      <div className="header-wrapper">
        <div className="logo" ref={logoRef}>
          <Link to="/">
            <FoxLogoOutline />
            <FoxLogo />
            <div className="circle"></div>
          </Link>
        </div>
        <div className="header-content">
          <div className="header-text">
            <div className="name">Shaun Fox</div>
            <div>Principal Product Designer</div>
            <span>Austin, Texas</span>
          </div>
          <Navbar />
        </div>
      </div>
      <Rule thickness={4} />
    </header>
  );
}
