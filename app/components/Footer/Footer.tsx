import type { LinksFunction } from "@remix-run/node";
import { Link, useLocation } from "@remix-run/react";
import FoxLogo from "../Foxes/FoxLogo";
import Rule from "../Rule";
import footerStyles from "./footer.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: footerStyles,
    },
  ];
};

export function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <p className="copyright">
      Copyright &copy; {currentYear} &ndash; Shaun Fox
    </p>
  );
}

export default function Footer(): JSX.Element {
  return (
    <footer>
      <Rule thickness={4} />
      <div className="footer-content">
        <FoxLogo />
        <div className="footer-links">
          <a href="mailto:hello@shaunfox.com">Mail</a>
          <a href="https://www.linkedin.com/in/shaunrfox">LinkedIn</a>
          <a href="http://codepen.io/shaunrfox/">CodePen</a>
          <a href="https://github.com/shaunrfox">GitHub</a>
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
