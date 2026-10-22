import { footerLinks, site, socials } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <span className="disp">{site.name}</span>
            <p>{site.tagline}</p>
            <p>
              <a href={site.phoneHref}>{site.phone}</a><br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <nav aria-label="Footer" className="foot-nav">
            {footerLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          {socials.length > 0 && (
            <span className="socials">
              {socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener">{s.label}</a>)}
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
