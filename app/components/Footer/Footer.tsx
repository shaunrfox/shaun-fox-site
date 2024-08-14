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

  return <p>Copyright &copy; {currentYear} &ndash; Shaun Fox</p>;
}

export default function Footer(): JSX.Element {
  return (
    <footer>
      <Rule thickness={4} />
      <div className="footer-content">
        <Copyright />
        <FoxLogo />
      </div>
    </footer>
  );
}
