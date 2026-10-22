import { processSteps } from "@/data/site";

export default function Process() {
  return (
    <section id="process" className="panel">
      <div className="wrap section">
        <h2>How we work, from first call to launch.</h2>
        <ol className="steps">
          {processSteps.map((s, i) => (
            <li key={s.title} className={i === 0 ? "first" : undefined}>
              <span className="num disp">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
