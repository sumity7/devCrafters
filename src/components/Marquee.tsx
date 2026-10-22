import { Fragment } from "react";
import { marqueeItems } from "@/data/site";

export default function Marquee() {
  return (
    <section className="marquee" aria-label="Types of websites we build">
      <div className="track disp">
        {[false, true].map((hidden) =>
          marqueeItems.map((item) => (
            <Fragment key={`${hidden}-${item}`}>
              <span aria-hidden={hidden || undefined}>{item}</span>
              <em aria-hidden="true">/</em>
            </Fragment>
          )),
        )}
      </div>
    </section>
  );
}
