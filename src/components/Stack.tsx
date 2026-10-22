import { stack } from "@/data/site";

export default function Stack() {
  return (
    <section className="wrap stack" aria-labelledby="stack-h">
      <h2 id="stack-h">The tools we build with</h2>
      <ul className="chips">
        {stack.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}
