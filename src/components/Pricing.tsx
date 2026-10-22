import { plans } from "@/data/site";
import QuoteLink from "./QuoteLink";

export default function Pricing() {
  return (
    <section id="pricing" className="wrap section">
      <h2>Clear prices, no surprises.</h2>
      <p className="sub">
        These are starting prices. The final price depends on the pages, features and customisation you need, and you
        get a fixed quote before work starts.
      </p>
      <div className="plans">
        {plans.map((p) => (
          <article className={`plan${p.featured ? " plan-featured" : ""}`} key={p.name}>
            {p.featured ? (
              <div className="plan-top"><h3>{p.name}</h3>{p.tag && <span className="tag">{p.tag}</span>}</div>
            ) : (
              <h3>{p.name}</h3>
            )}
            <p className="for">{p.audience}</p>
            <p className="price disp"><small>from</small> {p.price}</p>
            <p className="time">{p.time}</p>
            <ul>
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <QuoteLink plan={p.name} className={`btn ${p.featured ? "btn-accent" : "btn-outline"}`}>
              Get a quote
            </QuoteLink>
          </article>
        ))}
      </div>
      <div className="plan-extra">
        <p><strong>Custom web app or portal?</strong> Price depends on features. Tell us what it needs to do and we will plan it with you.</p>
        <p><strong>Monthly maintenance</strong> from ₹999 a month: updates, backups, security and small changes.</p>
        <QuoteLink plan="Custom web app" className="btn btn-dark">Plan my project</QuoteLink>
      </div>
    </section>
  );
}
