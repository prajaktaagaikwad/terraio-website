import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  CloudRain,
  Database,
  Factory,
  FileCheck2,
  Flame,
  Gauge,
  Globe2,
  ThermometerSun,
  Layers3,
  LineChart,
  Lock,
  Map,
  Menu,
  Radar,
  ShieldCheck,
  Sparkles,
  Waves,
  Wind,
  X
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "./styles.css";

const nav = [
  { label: "Platform", href: "/#platform" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" }
];

const logoSrc = "/terraviza-logo.svg?v=terraviza-d";

const products = [
  {
    slug: "map",
    name: "Terraviza Map",
    href: "/products/map",
    icon: Map,
    headline: "Visualise climate risk at asset level.",
    description: "Explore flood, heat, wildfire and storm exposure using interactive maps and AI-powered climate layers.",
    preview: "Interactive GIS map",
    accent: "#0369A1"
  },
  {
    slug: "actions",
    name: "Terraviza Actions",
    href: "/products/actions",
    icon: FileCheck2,
    headline: "Turn climate insights into action.",
    description: "Receive prioritised adaptation recommendations, estimate project costs and build resilience plans.",
    preview: "AI recommendation workflow",
    accent: "#16A34A"
  },
  {
    slug: "finance",
    name: "Terraviza Finance",
    href: "/products/finance",
    icon: LineChart,
    headline: "Understand financial impact.",
    description: "Estimate insurance exposure, adaptation budgets and long-term climate investment scenarios.",
    preview: "Financial dashboard",
    accent: "#F59E0B"
  }
];

const productPages = {
  map: {
    product: products[0],
    eyebrow: "Climate GIS for portfolios",
    hero: "See physical climate risk down to the building.",
    intro: "Terraviza Map turns hazard models, geospatial data and asset information into an operating picture your underwriting, investment and municipal teams can trust.",
    problem: "GIS teams can model exposure, but executives still receive static reports, screenshots and disconnected spreadsheets.",
    solution: "Bring every property, hazard, model run and adaptation option into one live spatial interface.",
    workflow: ["Import portfolio", "Select climate scenario", "Inspect asset exposure", "Share executive map"],
    capabilities: ["Parcel-level hazard overlays", "Scenario comparison", "Portfolio clustering", "Map exports for committees"],
    uses: ["Real estate portfolio reviews", "Municipal adaptation planning", "Insurance accumulation analysis"],
    integrations: ["ArcGIS", "QGIS", "Snowflake", "S3", "PostGIS"],
    ai: "The Terraviza AI Engine normalises multi-source climate models, explains confidence bands and surfaces the drivers behind each asset-level score.",
    security: "Tenant-isolated spatial storage, role-based map layers, encrypted asset uploads and auditable model provenance.",
    faqs: [
      ["Can Terraviza Map use our building polygons?", "Yes. Teams can import parcels, building footprints, addresses and portfolio IDs, then preserve ownership metadata across layers."],
      ["Which hazards are supported?", "Flood, pluvial flood, coastal risk, heat, wildfire, storm and compound event screening are available in the product experience."],
      ["Can maps be used in investment committees?", "Yes. Map states, layers and selected assets can be exported as board-ready packs with assumptions attached."]
    ]
  },
  actions: {
    product: products[1],
    eyebrow: "Adaptation planning workspace",
    hero: "Move from risk awareness to funded resilience work.",
    intro: "Terraviza Actions ranks interventions, estimates adaptation costs and turns climate intelligence into accountable project plans.",
    problem: "Climate studies often stop at diagnosis, leaving asset teams with a long list of risks and no investment sequence.",
    solution: "Convert exposure into prioritised projects with cost ranges, benefits, owners and timelines.",
    workflow: ["Detect risk drivers", "Generate options", "Rank by ROI", "Track implementation"],
    capabilities: ["Adaptation project library", "Cost and benefit bands", "Priority scoring", "Executive approval packs"],
    uses: ["Flood barrier programmes", "Heat mitigation retrofits", "Stormwater capital planning"],
    integrations: ["SAP", "ServiceNow", "Asana", "Procore", "Microsoft Teams"],
    ai: "The AI Engine compares hazard intensity, asset criticality, local measures and budget constraints to recommend practical actions.",
    security: "Approval workflows keep financial assumptions, project owners and model outputs traceable from recommendation to completion.",
    faqs: [
      ["Are recommendations generic?", "No. Recommendations are ranked against the asset type, hazard drivers, replacement value and local adaptation context."],
      ["Can we edit assumptions?", "Yes. Cost bands, avoided-loss estimates and discount rates can be adjusted before projects move into approval."],
      ["Does Terraviza track completion?", "Yes. Actions supports project status, owners, dates and resilience uplift after completion."]
    ]
  },
  finance: {
    product: products[2],
    eyebrow: "Climate financial intelligence",
    hero: "Translate climate exposure into financial decisions.",
    intro: "Terraviza Finance helps lenders, insurers and asset owners quantify insurance pressure, capex needs and scenario-adjusted investment exposure.",
    problem: "Finance teams need climate numbers that connect to premiums, budgets, valuations and capital planning.",
    solution: "Model the financial effect of risk, adaptation and time horizons in one executive-grade workspace.",
    workflow: ["Load values", "Model exposure", "Stress-test scenarios", "Approve budgets"],
    capabilities: ["Insurance impact modelling", "Adaptation budget forecasts", "Scenario-adjusted risk", "Committee-ready reporting"],
    uses: ["Loan portfolio climate reviews", "Insurance renewal strategy", "Long-term capex planning"],
    integrations: ["Power BI", "Tableau", "Excel", "Azure", "AWS"],
    ai: "The AI Engine explains premium movement, probable loss contribution and adaptation payback using transparent assumptions.",
    security: "Financial workspaces include permissioned portfolios, encrypted model inputs and audit trails for every scenario version.",
    faqs: [
      ["Does Terraviza replace catastrophe models?", "No. It complements existing models by translating physical climate signals into finance and asset decisions."],
      ["Can we model multiple horizons?", "Yes. Common horizons include 2030, 2040 and 2050, with scenario comparisons and assumption notes."],
      ["Can outputs go to boards?", "Yes. Finance produces concise executive summaries with portfolio charts, risks, assumptions and recommended budget ranges."]
    ]
  }
};

const problemCards = [
  ["Flood Risk", "Surface water and river flood signals are often split across reports and local models.", Waves],
  ["Heat Stress", "Asset teams lack a shared view of urban heat, comfort, operations and tenant risk.", ThermometerSun],
  ["Storm Exposure", "Wind, precipitation and business interruption rarely reach one financial picture.", Wind],
  ["Portfolio Blind Spots", "Leaders see averages when they need asset-level decisions and priorities.", Radar]
];

const benefits = [
  ["Portfolio Visibility", "Identify exposure patterns across geographies, asset classes and critical operations.", Building2],
  ["Asset Intelligence", "Move from regional climate indicators to decisions for each building.", Layers3],
  ["Lower Insurance Risk", "Prepare for renewals with better exposure evidence and mitigation plans.", ShieldCheck],
  ["Better Capital Planning", "Sequence adaptation budgets with confidence and measurable risk reduction.", BarChart3],
  ["Climate Compliance", "Support disclosure, resilience and public-sector climate reporting workflows.", FileCheck2],
  ["Executive Reporting", "Give boards clear climate stories backed by live spatial intelligence.", Gauge]
];

const testimonials = [
  {
    name: "Anna Kowalska",
    role: "Director of Asset Management, Echo Investment",
    quote: "Terraviza helped our team move beyond static climate reports. We can now prioritise resilience work building by building and explain the financial case clearly."
  },
  {
    name: "Michał Zieliński",
    role: "Head of Risk Analytics, PZU",
    quote: "The platform gives underwriters a cleaner view of exposure, especially where flood and heat risk overlap. It has improved our renewal conversations with enterprise clients."
  },
  {
    name: "Katarzyna Nowak",
    role: "Climate Programme Lead, City of Gdańsk",
    quote: "Terraviza turns technical climate layers into decisions our infrastructure, finance and planning teams can work with together."
  }
];

const pricing = [
  ["Map", "For portfolio climate visibility", "From €2,400/mo", ["Asset-level map workspace", "Flood, heat, storm and wildfire layers", "Portfolio imports", "Executive exports"]],
  ["Actions", "For adaptation planning teams", "Custom", ["AI project recommendations", "Cost and benefit ranges", "Approval workflows", "Implementation tracking"]],
  ["Enterprise", "For insurers, lenders and municipalities", "Custom", ["Dedicated climate model setup", "Security review and SSO", "Custom integrations", "Strategic advisory support"]]
];

const faqs = [
  ["What does Terraviza actually do?", "Terraviza combines climate hazard data, geospatial intelligence and financial modelling so organisations can understand physical climate risk at asset and portfolio level."],
  ["Who is Terraviza built for?", "Real estate owners, insurers, lenders, infrastructure operators and municipalities that need climate intelligence connected to financial and operational decisions."],
  ["Does Terraviza use AI?", "Yes. AI supports model interpretation, recommendation ranking, portfolio summarisation and executive reporting while keeping assumptions visible."],
  ["Can Terraviza work with our own data?", "Yes. The platform can ingest asset lists, location data, insured values, building metadata, historical losses and internal project assumptions."],
  ["Is this only for Poland?", "No. Terraviza is Poland-based and supports international portfolios, with coverage designed for enterprise teams operating across markets."]
];

function App() {
  const path = window.location.pathname;
  const productMatch = path.match(/^\/products\/(map|actions|finance)/);
  const page =
    path === "/signin" ? <SignInPage /> :
    path === "/request-demo" ? <RequestDemoPage /> :
    productMatch ? <ProductPage page={productPages[productMatch[1]]} /> :
    <Home />;

  return (
    <AnimatePresence mode="wait">
      <motion.div key={path} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
        <Navbar />
        {page}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(false);
  const productsMenuRef = React.useRef(null);

  React.useEffect(() => {
    function handlePointerDown(event) {
      if (!productsMenuRef.current?.contains(event.target)) {
        setProductsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setProductsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="nav-shell">
      <a className="brand" href="/" aria-label="Terraviza home">
        <img src={logoSrc} alt="" />
      </a>
      <nav className={open ? "nav-links open" : "nav-links"}>
        <a href={nav[0].href} onClick={() => setOpen(false)}>{nav[0].label}</a>
        <div className={productsOpen ? "nav-product-menu open" : "nav-product-menu"} ref={productsMenuRef}>
          <button className="nav-product-trigger" type="button" onClick={() => setProductsOpen(!productsOpen)} aria-expanded={productsOpen}>
            Products <ChevronRight size={15} />
          </button>
          <div className="product-dropdown">
            {products.map((p) => {
              const Icon = p.icon;
              return (
                <a key={p.slug} href={p.href} style={{ "--accent": p.accent }} onClick={() => { setProductsOpen(false); setOpen(false); }}>
                  <Icon size={18} />
                  <span>
                    <strong>{p.name}</strong>
                    <small>{p.headline}</small>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
        {nav.slice(1).map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="mobile-only" href="/signin" onClick={() => setOpen(false)}>Sign In</a>
        <a className="mobile-only" href="/request-demo" onClick={() => setOpen(false)}>Request Demo</a>
      </nav>
      <div className="nav-actions">
        <a className="signin" href="/signin">Sign In</a>
        <Button href="/request-demo">Request Demo</Button>
        <button className="menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function Button({ children, href = "#", variant = "primary" }) {
  return (
    <a className={`btn ${variant}`} href={href}>
      <span>{children}</span>
      <ArrowRight className="btn-icon" size={18} />
      <span className="spinner" aria-hidden="true" />
    </a>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <TrustedBy />
      <Solution />
      <Products />
      <Platform />
      <Benefits />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>Climate Intelligence Platform</motion.p>
        <motion.h1 initial={{ y: 22, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.08 }}>Understand tomorrow's climate risk today.</motion.h1>
        <motion.p className="lead" initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.16 }}>
          Transform complex climate data into property-level actions, investment decisions and insurance strategies using AI-powered climate intelligence.
        </motion.p>
        <motion.div className="hero-actions" initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.24 }}>
          <Button href="/request-demo">Request Demo</Button>
          <Button href="#platform" variant="secondary">Explore Platform</Button>
        </motion.div>
      </div>
      <ClimateMap />
    </section>
  );
}

function ClimateMap({ compact = false, mode = "map" }) {
  const layers = [
    ["Flood", "#0369A1", Waves],
    ["Heat", "#DC2626", ThermometerSun],
    ["Wildfire", "#F59E0B", Flame],
    ["Storm", "#16A34A", CloudRain]
  ];
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const id = window.setInterval(() => setActive((v) => (v + 1) % layers.length), 2600);
    return () => window.clearInterval(id);
  }, []);
  const ActiveIcon = layers[active][2];
  return (
    <motion.div className={`climate-map ${compact ? "compact" : ""} ${mode}`} initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
      <motion.div className="map-canvas" animate={{ scale: [1, 1.035, 1.06], x: [0, -8, -14], y: [0, 4, 8] }} transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}>
        <span className="river river-a" />
        <span className="river river-b" />
        <span className="district d1" />
        <span className="district d2" />
        <span className="district d3" />
        <span className="district d4" />
        <span className="road r1" />
        <span className="road r2" />
        <span className="road r3" />
      </motion.div>
      <motion.div className="hazard-layer" key={active} style={{ "--layer": layers[active][1] }} initial={{ opacity: 0 }} animate={{ opacity: 0.34 }} exit={{ opacity: 0 }} />
      <div className="layer-switcher">
        {layers.map(([name, color, Icon], index) => (
          <button key={name} className={active === index ? "active" : ""} onClick={() => setActive(index)} style={{ "--accent": color }}>
            <Icon size={15} /> {name}
          </button>
        ))}
      </div>
      {["p1", "p2", "p3", "p4", "p5"].map((pin, index) => <motion.span key={pin} className={`pin ${pin}`} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.7 + index * 0.12 }} />)}
      <motion.aside className="risk-panel" initial={{ x: 34, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.1 }}>
        <div className="panel-head">
          <span><ActiveIcon size={17} /> {layers[active][0]} layer</span>
          <strong>Warsaw Asset 04</strong>
        </div>
        <Metric label="Risk Score" value="Medium" tone="warn" />
        <Metric label="Insurance Impact" value="+18%" />
        <Metric label="Estimated Adaptation Cost" value="€185,000" />
        <div className="actions-list">
          <span>Recommended Actions</span>
          <p>Install backflow valves</p>
          <p>Elevate critical systems</p>
          <p>Review renewal terms</p>
        </div>
      </motion.aside>
    </motion.div>
  );
}

function Metric({ label, value, tone }) {
  return <div className="metric"><span>{label}</span><strong className={tone}>{value}</strong></div>;
}

function Problem() {
  return (
    <section className="section light">
      <SectionIntro title="Climate risk shouldn't be impossible to understand." text="Asset owners receive fragmented reports, insurers struggle to evaluate exposure and investment teams lack clear climate insights. Terraviza transforms complex environmental data into practical financial decisions." />
      <div className="card-grid four">
        {problemCards.map(([title, text, Icon]) => <SpotlightCard key={title} title={title} text={text} Icon={Icon} link />)}
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="trusted">
      <span>Trusted by climate, finance and property teams across Poland</span>
      <div>
        {["Echo Investment", "PZU", "Ghelamco", "City of Gdańsk", "Santander Bank Polska"].map((name) => <strong key={name}>{name}</strong>)}
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="section dark story">
      <div>
        <p className="eyebrow">Connected intelligence</p>
        <h2>One platform for climate intelligence.</h2>
        <p>Monitor climate hazards, prioritise adaptation projects and make confident financial decisions from one connected AI platform.</p>
      </div>
      <div className="story-lines">
        {["Hazard models", "Asset metadata", "Financial exposure", "Adaptation plans"].map((item, i) => <motion.span key={item} initial={{ width: 0 }} whileInView={{ width: `${48 + i * 12}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.12 }}>{item}</motion.span>)}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="section" id="products">
      <SectionIntro title="Product modules built for decisions." text="Each Terraviza product gives specialist teams the depth they need while sharing one climate intelligence foundation." />
      <div className="product-grid">
        {products.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
      </div>
    </section>
  );
}

function ProductCard({ product, index }) {
  const Icon = product.icon;
  return (
    <motion.a className="product-card" href={product.href} style={{ "--accent": product.accent }} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
      <div className="product-top"><Icon /><span>{product.name}</span></div>
      <h3>{product.headline}</h3>
      <p>{product.description}</p>
      <MiniPreview type={product.slug} />
      <span className="learn">Explore product <ChevronRight size={16} /></span>
    </motion.a>
  );
}

function MiniPreview({ type }) {
  if (type === "actions") return <div className="mini workflow">{["Detect", "Prioritise", "Approve"].map((x) => <span key={x}>{x}</span>)}</div>;
  if (type === "finance") return <div className="mini finance"><span /><span /><span /><strong>+18%</strong></div>;
  return <div className="mini map"><i /><i /><i /></div>;
}

function Platform() {
  return (
    <section className="section platform" id="platform">
      <SectionIntro title="A premium executive dashboard." text="Terraviza gives leaders a calm, board-ready operating system for climate exposure, project budgets and insurance strategy." />
      <Dashboard />
    </section>
  );
}

function Dashboard() {
  const widgets = [
    ["Portfolio Overview", "12,418 assets", Globe2],
    ["Climate Risk Score", "62 / 100", Gauge],
    ["Flood Exposure", "€284M", Waves],
    ["Heat Exposure", "31%", ThermometerSun],
    ["Storm Exposure", "18 regions", Wind],
    ["Insurance Cost", "+€4.2M", ShieldCheck],
    ["Recommended Projects", "186", FileCheck2],
    ["Budget Forecast", "€38.6M", BarChart3],
    ["Asset Comparison", "Top 40", Building2],
    ["Climate Timeline", "2030-2050", Clock3]
  ];
  return (
    <div className="dashboard-shell">
      <aside>
        <img src={logoSrc} alt="Terraviza" />
        {["Overview", "Map", "Actions", "Finance", "Reports"].map((x, i) => <span className={i === 0 ? "active" : ""} key={x}>{x}</span>)}
      </aside>
      <div className="dash-main">
        <div className="dash-toolbar"><strong>Central Europe Portfolio</strong><button>Q3 scenario</button></div>
        <div className="widget-grid">
          {widgets.map(([title, value, Icon], i) => (
            <motion.div className="widget" key={title} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
              <Icon size={18} />
              <span>{title}</span>
              <strong>{value}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Benefits() {
  return (
    <section className="section light">
      <SectionIntro title="Built for teams that carry climate responsibility." text="Terraviza helps climate, finance, risk and asset teams share one version of the future." />
      <div className="card-grid three">{benefits.map(([title, text, Icon]) => <SpotlightCard key={title} title={title} text={text} Icon={Icon} />)}</div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      {[["Assets Analysed", "12M+"], ["Climate Models", "500+"], ["Countries", "96"], ["Risk Assessments", "42M+"]].map(([label, value]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <SectionIntro title="Trusted by Polish enterprise leaders." text="Real teams use Terraviza to explain climate risk with the clarity required for investment, insurance and public infrastructure decisions." />
      <div className="testimonial-grid">
        {testimonials.map((t) => <article key={t.name}><div className="avatar">{t.name.split(" ").map((n) => n[0]).join("")}</div><p>“{t.quote}”</p><strong>{t.name}</strong><span>{t.role}</span></article>)}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section light" id="pricing">
      <SectionIntro title="Pricing for serious climate programmes." text="Start with climate visibility, then expand into action planning, finance workflows and enterprise integrations." />
      <div className="pricing-grid">{pricing.map(([name, text, price, items]) => <article className="price-card" key={name}><h3>{name}</h3><p>{text}</p><strong>{price}</strong>{items.map((x) => <span key={x}><Check size={16} /> {x}</span>)}<Button href="/request-demo" variant={name === "Map" ? "primary" : "secondary"}>Request Demo</Button></article>)}</div>
    </section>
  );
}

function FAQ({ items = faqs }) {
  return (
    <section className="section faq" id="faq">
      <SectionIntro title="Climate intelligence FAQ." text="Answers for teams evaluating enterprise climate intelligence." />
      <div className="faq-list">{items.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta">
      <p className="eyebrow">Request Demo</p>
      <h2>Prepare every asset for tomorrow's climate.</h2>
      <p>Make faster climate decisions using AI-powered property intelligence.</p>
      <div><Button href="/request-demo">Request Demo</Button><Button href="/request-demo" variant="secondary">Contact Sales</Button></div>
    </section>
  );
}

function DemoForm() {
  return (
    <form className="demo-form">
      <label>Work email<input type="email" placeholder="name@company.com" /></label>
      <label>Organisation<input placeholder="Company or municipality" /></label>
      <label>Primary interest<select><option>Portfolio climate risk</option><option>Adaptation planning</option><option>Insurance and finance impact</option></select></label>
      <button type="button">Submit request</button>
    </form>
  );
}

function SignInPage() {
  return (
    <main className="auth-page signin-page">
      <section className="auth-layout">
        <motion.div className="auth-copy" initial={{ y: 22, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <p className="eyebrow">Terraviza Console</p>
          <h1>Sign in to your climate intelligence workspace.</h1>
          <p>Access portfolio maps, adaptation plans, financial scenarios and executive reports from one secure enterprise console.</p>
          <div className="auth-proof">
            <span><ShieldCheck size={18} /> SSO ready</span>
            <span><Lock size={18} /> Encrypted workspaces</span>
            <span><Gauge size={18} /> Live risk dashboards</span>
          </div>
        </motion.div>
        <motion.form className="auth-card" initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
          <img src={logoSrc} alt="Terraviza" />
          <h2>Welcome back</h2>
          <label>Email address<input type="email" placeholder="name@company.com" /></label>
          <label>Password<input type="password" placeholder="Enter your password" /></label>
          <div className="form-row">
            <label className="checkline"><input type="checkbox" /> Keep me signed in</label>
            <a href="/request-demo">Need access?</a>
          </div>
          <button type="button">Sign In</button>
          <a className="sso-button" href="/request-demo">Continue with enterprise SSO</a>
        </motion.form>
      </section>
    </main>
  );
}

function RequestDemoPage() {
  return (
    <main className="request-page">
      <section className="request-hero">
        <div>
          <p className="eyebrow">Request Demo</p>
          <h1>See how Terraviza turns climate risk into financial action.</h1>
          <p>Tell us about your portfolio, risk workflow or municipality. The Terraviza team will tailor a live walkthrough around your climate decisions.</p>
          <div className="demo-highlights">
            {["Asset-level climate map", "Adaptation recommendation workflow", "Insurance and budget impact model"].map((item) => <span key={item}><Check size={16} /> {item}</span>)}
          </div>
        </div>
        <ClimateMap compact />
      </section>
      <section className="request-body">
        <form className="request-form">
          <h2>Book a tailored walkthrough</h2>
          <div className="form-grid">
            <label>First name<input placeholder="Anna" /></label>
            <label>Last name<input placeholder="Kowalska" /></label>
            <label>Work email<input type="email" placeholder="name@company.com" /></label>
            <label>Phone<input placeholder="+48 000 000 000" /></label>
            <label>Organisation<input placeholder="Company or municipality" /></label>
            <label>Role<select><option>Real estate owner</option><option>Insurer</option><option>Lender</option><option>Municipality</option><option>Climate or risk team</option></select></label>
            <label>Portfolio size<select><option>Under 100 assets</option><option>100-1,000 assets</option><option>1,000-10,000 assets</option><option>10,000+ assets</option></select></label>
            <label>Primary interest<select><option>Terraviza Map</option><option>Terraviza Actions</option><option>Terraviza Finance</option><option>Full platform</option></select></label>
          </div>
          <label>What would you like to evaluate?<textarea placeholder="Flood exposure, insurance renewals, adaptation capex, municipal planning..." /></label>
          <button type="button">Request Demo</button>
        </form>
        <aside className="demo-side-panel">
          <h3>Your demo will include</h3>
          {[
            ["1", "A portfolio-level climate risk walkthrough"],
            ["2", "A sample asset inspection with flood, heat, wildfire and storm layers"],
            ["3", "An adaptation and financial impact scenario"],
            ["4", "A security and integrations discussion"]
          ].map(([num, text]) => <div key={num}><span>{num}</span><p>{text}</p></div>)}
        </aside>
      </section>
    </main>
  );
}

function ProductPage({ page }) {
  const Icon = page.product.icon;
  return (
    <main className="product-page">
      <section className="product-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.hero}</h1>
          <p>{page.intro}</p>
          <Button href="/request-demo">Request Demo</Button>
        </div>
        <ClimateMap compact mode={page.product.slug} />
      </section>
      <section className="split-section">
        <article><span>Problem</span><h2>{page.problem}</h2></article>
        <article><span>Solution</span><h2>{page.solution}</h2></article>
      </section>
      <section className="section workflow-section">
        <SectionIntro title="Interactive workflow." text={`A focused ${page.product.name} workflow designed for specialist teams and executive review.`} />
        <div className="workflow-steps">{page.workflow.map((s, i) => <motion.div key={s} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><span>{String(i + 1).padStart(2, "0")}</span><strong>{s}</strong></motion.div>)}</div>
      </section>
      <section className="section platform"><Dashboard /></section>
      <section className="section">
        <div className="capability-layout">
          <div><Icon size={36} /><h2>{page.product.name} capabilities</h2><p>{page.product.description}</p></div>
          <div className="card-grid two">{page.capabilities.map((c) => <SpotlightCard key={c} title={c} text="Designed for enterprise climate workflows with explainable outputs and exportable evidence." Icon={Sparkles} />)}</div>
        </div>
      </section>
      <section className="section light">
        <SectionIntro title="Industry use cases." text="Purpose-built climate workflows for teams with different decisions but shared risk." />
        <div className="use-grid">{page.uses.map((u) => <article key={u}><Factory /><h3>{u}</h3><p>Combine live climate intelligence, asset context and executive reporting in one workflow.</p></article>)}</div>
      </section>
      <section className="section product-details">
        <article><Database /><h3>Integrations</h3><p>{page.integrations.join(", ")}</p></article>
        <article><Sparkles /><h3>AI Engine</h3><p>{page.ai}</p></article>
        <article><Lock /><h3>Security</h3><p>{page.security}</p></article>
      </section>
      <FAQ items={page.faqs} />
      <CTA />
    </main>
  );
}

function SpotlightCard({ title, text, Icon, link }) {
  return (
    <motion.article className="spotlight-card" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 24 }}>
      <div className="spotlight" />
      <Icon className="card-icon" />
      <h3>{title}</h3>
      <p>{text}</p>
      {link && <a href="#products">Learn More <ChevronRight size={15} /></a>}
    </motion.article>
  );
}

function SectionIntro({ title, text }) {
  return <div className="section-intro"><h2>{title}</h2><p>{text}</p></div>;
}

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div><img src={logoSrc} alt="Terraviza" /><p>Climate intelligence for assets, portfolios and public infrastructure.</p></div>
        <div><strong>Products</strong>{products.map((p) => <a key={p.slug} href={p.href}>{p.name}</a>)}</div>
        <div><strong>Company</strong><a href="/#pricing">Pricing</a><a href="/#faq">FAQ</a><a href="/signin">Sign In</a><a href="/request-demo">Request Demo</a></div>
        <div><strong>Contact</strong><span>Terraviza Sp. z o.o.</span><span>Rondo Daszyńskiego 2B</span><span>00-843 Warsaw</span><span>Poland</span><a href="mailto:hello@terraviza.com">hello@terraviza.com</a></div>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
