import { websiteTypes } from "@/data/site";

export default function WebsiteTypes() {
  return (
    <section id="websites" className="wrap section">
      <h2>Whatever your business, we can build its website.</h2>
      <p className="sub">A few of the kinds of websites we build. If yours is not here, tell us about it.</p>
      <div className="type-grid">
        {websiteTypes.map((t) => (
          <div key={t.title}>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        ))}
        <div className="type-cta">
          <h3>Something else?</h3>
          <a href="#contact">Tell us your idea</a>
        </div>
      </div>
    </section>
  );
}
