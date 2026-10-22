import { ecommerceFeatures, ecommercePills } from "@/data/site";

export default function Ecommerce() {
  return (
    <section id="ecommerce" className="band">
      <div className="wrap section split">
        <div className="split-l">
          <h2>Stores built to sell, not just to look good.</h2>
          <p className="sub">
            We set up the whole selling system: from the first product photo to the payment, the shipping label and the
            order alert on your phone.
          </p>
          <div className="pills">
            {ecommercePills.map((p) => <span key={p}>{p}</span>)}
          </div>
        </div>
        <div className="feat-grid">
          {ecommerceFeatures.map((f) => (
            <div key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
