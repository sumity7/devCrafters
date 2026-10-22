export const site = {
  name: "DevCrafter",
  phone: "+91 78703 41191",
  phoneHref: "tel:+917870341191",
  whatsappNumber: "917870341191",
  email: "devcraftersai@gmail.com",
  tagline: "Websites, online stores and web apps, crafted with care.",
} as const;

export const whatsappUrl = (text?: string): string =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#ecommerce", label: "E-commerce" },
  { href: "#websites", label: "Websites we build" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const footerLinks: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#ecommerce", label: "E-commerce" },
  { href: "#websites", label: "Websites we build" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const heroChecks = ["Websites from ₹4,000", "Ready in 2–3 days", "Support after launch"];

export const marqueeItems = [
  "Online stores",
  "WooCommerce",
  "Shopify",
  "Business websites",
  "Landing pages",
  "Web apps",
  "WordPress",
  "Portfolios",
  "Booking sites",
  "Dashboards",
];

export interface TitledItem {
  title: string;
  text: string;
}

export const services: TitledItem[] = [
  { title: "E-commerce stores", text: "Online stores that are easy to shop and easy to manage: product catalogues, variants, payments, shipping, coupons and order management. Built on WooCommerce, Shopify or fully custom." },
  { title: "WooCommerce development", text: "Custom WooCommerce themes, plugin setup and customisation, payment gateway integration, speed optimisation and migrations from other platforms." },
  { title: "Shopify stores", text: "Store setup, theme design and customisation, apps, product imports and launch, for brands that want a fast store with less to maintain." },
  { title: "Production websites", text: "A complete, live website: domain, hosting, SSL, business email, speed and SEO setup, and full testing on phones, tablets and computers before launch." },
  { title: "Custom websites", text: "Business, corporate and personal websites designed around your brand, with an admin panel you can update yourself." },
  { title: "Full stack web apps", text: "Portals, dashboards, booking systems and SaaS products, built with React, Next.js, Node.js and solid databases, from the first screen to the server." },
  { title: "WordPress websites", text: "Custom WordPress themes, page builders set up the right way, blogs and news sites, with security and backups in place." },
  { title: "Landing pages", text: "Focused pages for ads, launches and lead generation, built to load fast and turn visitors into enquiries." },
  { title: "Redesign and migration", text: "Give an old website a modern look, or move it to a better platform, without losing content, rankings or orders." },
  { title: "Maintenance and support", text: "Updates, backups, security monitoring, bug fixes and new features every month, so your website keeps working while you run the business." },
];

export const ecommercePills = ["WooCommerce", "Shopify", "Custom with Next.js and Node.js"];

export const ecommerceFeatures: TitledItem[] = [
  { title: "Payments", text: "Razorpay, Stripe, PayPal, PayU, UPI and cash on delivery." },
  { title: "Shipping and tracking", text: "Courier integrations, shipping rules by weight or zone, and tracking links for customers." },
  { title: "Products and inventory", text: "Sizes, colours and variants, bulk imports and low-stock alerts." },
  { title: "Offers and coupons", text: "Discount codes, sale prices, free-shipping rules and bundles." },
  { title: "Invoices and taxes", text: "GST-ready invoices and tax settings that match how you sell." },
  { title: "Order alerts", text: "Email and WhatsApp notifications for you and your customers." },
  { title: "Abandoned carts", text: "Reminders that bring shoppers back to finish their order." },
  { title: "Fast mobile checkout", text: "Short, simple checkout that works on any phone." },
];

export const websiteTypes: TitledItem[] = [
  { title: "Online stores", text: "Fashion, electronics, groceries, handmade goods and more." },
  { title: "Business and corporate", text: "Company profiles, services and enquiry forms." },
  { title: "Landing pages", text: "For ads, product launches and lead capture." },
  { title: "Portfolios", text: "For designers, photographers, creators and professionals." },
  { title: "Blogs and news", text: "Easy publishing with categories, search and SEO." },
  { title: "Restaurants and cafes", text: "Menus, table booking and online ordering." },
  { title: "Real estate", text: "Property listings with filters, maps and enquiries." },
  { title: "Booking and appointments", text: "Salons, clinics, consultants, studios and rentals." },
  { title: "Education and courses", text: "Schools, coaching centres and online course platforms." },
  { title: "Healthcare", text: "Hospitals, clinics and doctors, with appointment booking." },
  { title: "Marketplaces", text: "Multi-vendor stores with seller accounts and commissions." },
  { title: "Web apps and dashboards", text: "Admin panels, CRMs, portals and SaaS products." },
  { title: "Events and weddings", text: "Invitations, schedules, RSVPs and galleries." },
  { title: "NGOs and non-profits", text: "Causes, campaigns and online donations." },
  { title: "Membership sites", text: "Paid content, logins and subscriptions." },
];

export const processSteps: TitledItem[] = [
  { title: "Discover", text: "We learn about your business, customers and goals, and agree on scope, timeline and price." },
  { title: "Design", text: "You see and approve the look of every key page before we write any code." },
  { title: "Build", text: "Clean front end and back end code, tested on phones, tablets and desktops." },
  { title: "Launch", text: "Domain, hosting, SSL, payments and analytics set up, then your site goes live." },
  { title: "Support", text: "Updates, backups, fixes and new features, for as long as you need them." },
];

export const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "PHP", "WordPress", "WooCommerce",
  "Shopify", "MongoDB", "MySQL", "Tailwind CSS", "AWS", "Vercel",
];

export interface Plan {
  name: ProjectType;
  audience: string;
  price: string;
  time: string;
  features: string[];
  featured?: boolean;
  tag?: string;
}

export const plans: Plan[] = [
  {
    name: "Starter website",
    audience: "For small businesses getting online.",
    price: "₹4,000",
    time: "Ready in 2–3 days",
    features: ["Up to 5 pages", "Mobile responsive design", "Contact form and WhatsApp button", "Basic SEO setup", "1 month of support"],
  },
  {
    name: "Business website",
    audience: "For growing companies and brands.",
    price: "₹7,999",
    time: "Ready in 2–3 days",
    features: ["Up to 12 pages, custom design", "Edit content yourself", "Blog and enquiry forms", "Speed and SEO optimisation", "2 months of support"],
  },
  {
    name: "Production website",
    audience: "Live and ready for customers, nothing left to set up.",
    price: "₹11,999",
    time: "Ready in 1 week",
    featured: true,
    tag: "Complete package",
    features: [
      "Everything in Business website", "Domain name for 1 year", "Hosting for 1 year", "SSL certificate (https)",
      "Business email setup", "Google Search Console and Analytics", "Full testing on phone, tablet and computer", "3 months of support",
    ],
  },
  {
    name: "E-commerce store",
    audience: "For brands ready to sell online.",
    price: "₹14,999",
    time: "Ready in 1 week",
    features: ["WooCommerce or Shopify", "Product catalogue with variants", "Payment gateway and cash on delivery", "Shipping, coupons and order emails", "GST-ready invoices", "3 months of support"],
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  { question: "How long does a website take?", answer: "Starter and business websites are ready in 2–3 days. Production websites and online stores take about 1 week. Bigger custom projects get their own timeline before we start." },
  { question: "What is a production website?", answer: "It is a complete website that is live and ready for customers. We take care of the domain, hosting, SSL (https), business email, Google setup and full testing, so you do not have to set up anything yourself." },
  { question: 'Why do prices start "from"?', answer: "Every business needs something slightly different. The starting price covers the package as listed; extra pages, features or customisation are added to your quote, which you approve before work starts." },
  { question: "Should I choose WooCommerce or Shopify?", answer: "Both work well. WooCommerce gives you full control and no monthly platform fee; Shopify is quicker to run with less maintenance. We recommend one after understanding your products, budget and plans." },
  { question: "Can I update the website myself?", answer: "Yes. Every site comes with an easy admin panel, and we walk you through adding products, pages and blog posts at handover." },
  { question: "Which payment methods can my store accept?", answer: "Razorpay, Stripe, PayPal, PayU, Cashfree, UPI, cards, net banking and cash on delivery, depending on your business." },
  { question: "Can you redesign my existing website?", answer: "Yes. We can give it a modern design or move it to a better platform while keeping your content, products and search rankings." },
  { question: "What happens after the website goes live?", answer: "Every package includes support after launch. After that you can choose monthly maintenance for updates, backups, security and changes." },
];

export const projectTypes = [
  "Starter website",
  "Business website",
  "Production website",
  "E-commerce store",
  "WooCommerce store",
  "Shopify store",
  "Landing page",
  "Custom web app",
  "Redesign of my website",
  "Maintenance and support",
  "Something else",
] as const;

export type ProjectType = (typeof projectTypes)[number];

export const budgets = [
  "Not sure yet",
  "₹4,000 – ₹8,000",
  "₹8,000 – ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000 and above",
] as const;

export const socials: { label: string; href: string }[] = [
  // Add your profile links here, e.g. { label: "Instagram", href: "https://instagram.com/devcrafter" }
];
