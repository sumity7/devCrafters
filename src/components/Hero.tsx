import { heroChecks } from "@/data/site";
import { CartIcon, CheckIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="wrap hero">
      <div className="hero-copy">
        <p className="status"><span className="dot" aria-hidden="true" />Taking new projects this month</p>
        <h1>Websites and online stores, crafted to grow your business.</h1>
        <p className="lead">
          DevCrafter is a full stack web studio. We design, build and launch fast websites, WooCommerce and Shopify
          stores, and custom web apps, and we stay with you after launch.
        </p>
        <div className="row-btns">
          <a className="btn btn-accent btn-lg" href="#contact">Start your project</a>
          <a className="btn btn-light btn-lg" href="#pricing">See prices</a>
        </div>
        <ul className="checks">
          {heroChecks.map((c) => (
            <li key={c}><CheckIcon size={18} />{c}</li>
          ))}
        </ul>
      </div>

      <div className="hero-visual">
        <div className="browser build b1" role="img" aria-label="A store website being assembled, then going live with its first order">
          <div className="browser-bar">
            <span className="lights"><i /><i /><i /></span>
            <span className="url">yourstore.com</span>
            <span className="state">
              <span className="st-build">Building…</span>
              <span className="st-live"><i />Live</span>
            </span>
          </div>
          <div className="progress"><span className="bar" /></div>
          <div className="browser-body">
            <div className="mk-nav build b2">
              <span className="mk-logo" />
              <span className="mk-links">
                <i /><i /><i />
                <span className="mk-cart">
                  <CartIcon size={16} />
                  <b className="pop">1</b>
                </span>
              </span>
            </div>
            <div className="mk-banner build b3">
              <i style={{ width: "62%" }} /><i style={{ width: "44%" }} /><i className="sm" /><i className="cta" />
            </div>
            <div className="mk-grid">
              <div className="build b4"><span className="img c1" /><i style={{ width: "80%" }} /><i className="price" style={{ width: "40%" }} /></div>
              <div className="build b5"><span className="img c2" /><i style={{ width: "70%" }} /><i className="price" style={{ width: "45%" }} /></div>
              <div className="build b6"><span className="img c3" /><i style={{ width: "85%" }} /><i className="price" style={{ width: "38%" }} /></div>
            </div>
            <div className="mk-buy build b7"><span /><span /></div>
          </div>
        </div>
        <div className="order-toast build b8">
          <span className="ok"><CheckIcon size={18} /></span>
          <span><strong>New order received</strong><small>Paid online, ready to ship</small></span>
        </div>
      </div>
    </section>
  );
}
