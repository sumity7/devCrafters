import { faqs } from "@/data/site";

export default function Faq() {
  return (
    <section id="faq" className="panel">
      <div className="wrap section split">
        <h2 className="split-l">Questions clients ask us.</h2>
        <div className="faq">
          {faqs.map((f, i) => (
            <details key={f.question} open={i === 0}>
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
