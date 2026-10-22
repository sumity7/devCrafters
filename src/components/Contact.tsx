"use client";

import { useEffect, useState, type FormEvent } from "react";
import { budgets, projectTypes, site, whatsappUrl, type ProjectType } from "@/data/site";
import { ChatIcon, GlobeIcon, MailIcon, PhoneIcon } from "./Icons";
import { usePlan } from "./PlanContext";

interface FormState {
  name: string;
  phone: string;
  email: string;
  type: ProjectType;
  budget: string;
  message: string;
}

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  type: projectTypes[0],
  budget: budgets[0],
  message: "",
};

export default function Contact() {
  const { plan } = usePlan();
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (plan) setForm((f) => ({ ...f, type: plan }));
  }, [plan]);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const nameBad = submitted && !form.name.trim();
  const phoneBad = submitted && !form.phone.trim();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    const name = form.name.trim();
    const phone = form.phone.trim();
    if (!name || !phone) {
      (e.currentTarget.elements.namedItem(name ? "phone" : "name") as HTMLElement | null)?.focus();
      return;
    }
    const lines = ["Hi DevCrafter, I want to start a project.", "", `Name: ${name}`, `Phone: ${phone}`];
    if (form.email.trim()) lines.push(`Email: ${form.email.trim()}`);
    lines.push(`Need: ${form.type}`, `Budget: ${form.budget}`);
    if (form.message.trim()) lines.push(`Details: ${form.message.trim()}`);
    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <section id="contact" className="wrap section split">
      <div className="split-l contact-l">
        <h2 className="big">Let us build your next website.</h2>
        <p className="sub">Share a few details and we will reply within one working day with ideas, a timeline and a quote.</p>
        <div className="contact-links">
          <a href={site.phoneHref}><PhoneIcon />{site.phone}</a>
          <a href={whatsappUrl()} target="_blank" rel="noopener"><ChatIcon />Chat on WhatsApp</a>
          <a href={`mailto:${site.email}`}><MailIcon />{site.email}</a>
          <span><GlobeIcon />Working with clients across India and worldwide</span>
        </div>
      </div>

      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="two">
          <div className="fld">
            <label htmlFor="f-name">Your name</label>
            <input id="f-name" name="name" type="text" autoComplete="name" required value={form.name}
              aria-invalid={nameBad} onChange={(e) => set("name", e.target.value)} />
          </div>
          <div className="fld">
            <label htmlFor="f-phone">Phone or WhatsApp</label>
            <input id="f-phone" name="phone" type="tel" autoComplete="tel" required value={form.phone}
              aria-invalid={phoneBad} onChange={(e) => set("phone", e.target.value)} />
          </div>
        </div>
        <div className="fld">
          <label htmlFor="f-email">Email (optional)</label>
          <input id="f-email" name="email" type="email" autoComplete="email" value={form.email}
            onChange={(e) => set("email", e.target.value)} />
        </div>
        <div className="two">
          <div className="fld">
            <label htmlFor="f-type">What do you need?</label>
            <select id="f-type" name="type" value={form.type} onChange={(e) => set("type", e.target.value as ProjectType)}>
              {projectTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="fld">
            <label htmlFor="f-budget">Budget</label>
            <select id="f-budget" name="budget" value={form.budget} onChange={(e) => set("budget", e.target.value)}>
              {budgets.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
        </div>
        <div className="fld">
          <label htmlFor="f-msg">Tell us about your project</label>
          <textarea id="f-msg" name="message" rows={4} value={form.message} onChange={(e) => set("message", e.target.value)} />
        </div>
        <p className="form-error" role="alert" hidden={!(nameBad || phoneBad)}>
          Enter your name and phone number so we can reach you.
        </p>
        <button className="btn btn-accent btn-lg" type="submit">Send on WhatsApp</button>
        <p className="form-note">
          Your details open in WhatsApp as a message to DevCrafter. Prefer email? Write to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </form>
    </section>
  );
}
