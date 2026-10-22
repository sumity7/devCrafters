import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="wrap section">
      <div className="head-row">
        <h2>Everything your business needs on the web, under one roof.</h2>
        <p className="sub">
          One team handles design, front end, back end, domain, hosting and support, so nothing falls between the cracks.
        </p>
      </div>
      <div className="svc-list">
        {services.map((s) => (
          <div className="svc" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
