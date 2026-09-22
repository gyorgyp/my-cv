import { createRoot } from 'react-dom/client'

const h = React.createElement;
const { useState, useEffect } = React;
const THEME_KEY = "pg-cv-theme";

function getInitialTheme() {
  try {
    const saved = window.localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {}
  return "light";
}

function ModeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}
  }, [theme]);

  const isLight = theme === "light";
  return h("button", {
    className: "mode-toggle",
    onClick: () => setTheme(isLight ? "dark" : "light"),
    "aria-pressed": isLight,
    title: isLight ? "Switch to night mode" : "Switch to day mode",
  },
    h("span", { className: "mode-label" }, isLight ? "Day" : "Night"),
    h("span", { className: "track" }, h("span", { className: "thumb" }))
  );
}

const EXPERTISE = [
  { tag: "01", title: "App building & Functions", body: "Designs and ships production Tulip apps end to end, extending logic beyond the visual builder with Tulip Functions." },
  { tag: "02", title: "Custom queries & aggregations", body: "Writes targeted queries and aggregations against operational data to keep apps fast under real shop-floor load." },
  { tag: "03", title: "Legacy logic optimization", body: "Re-worked existing app logic and cut processing time by 80% on a production line without disrupting operators." },
  { tag: "04", title: "Client-facing delivery", body: "Owns the conversation with plant and client stakeholders — from requirements to a naming convention every team follows." },
];

const EXPERIENCE = [
  {
    role: "Software Developer — Tulip Interfaces Platform",
    company: "Prysprove Kft.",
    dates: "2025 – 2026",
    tulip: true,
    open: true,
    bullets: [
      "Digitized shop-floor / operational processes for manufacturing clients on the Tulip Interfaces platform, from app design to delivery.",
      "Built automated app version-update logic and refactored app logic for reliable operation.",
      "Integrated standalone modules and contributed to web app design on Blazor / Microservices.",
      "Adopted Tulip's Functions feature to extend app logic beyond out-of-the-box capability.",
      "Queried and filtered data via aggregations, sped up legacy logic within existing apps by 80%.",
      "Built a custom query for a specific client request, earning positive direct client feedback.",
      "Established the team's naming convention standard for Tulip apps.",
      "Maintained direct contact with clients throughout app development and rollout.",
    ],
    tech: "Tulip Interfaces, C#, Blazor, Microservices, REST API Development, GitHub, Lucid, Jira, Confluence",
  },
  {
    role: "DevOps Engineer",
    company: "evosoft Hungary Kft.",
    dates: "2017 – 2025",
    bullets: [
      "Build Management Service Engineer for four years.",
      "Automation: built an HTML-based tool for TFS (REST API) synchronization.",
      "Chatbot development with a cross-country team using LUIS and Azure Bot Services.",
      "Migrated CI/CD pipelines from XAML to vNext.",
      "Visual Studio extension developer: extended Siemens-specific tooling (C#, WPF, design patterns).",
    ],
    tech: "Ansible, VMware, Icinga, PowerShell, Azure DevOps Server, LUIS, TypeScript, Azure Bot Services",
  },
  {
    role: "Full-Stack / Senior .NET Developer",
    company: "SDA Stúdió Kft.",
    dates: "2004 – 2017",
    bullets: [
      "13 years across the Neptun.NET ecosystem (Hungary's unified educational system): web platform optimization, a mobile companion app, a middleware layer and supporting tools.",
      "Delivered a full project-lifecycle management web application end-to-end for an external client.",
      "Built a Html2Pdf conversion tool with automated installer and a Microsoft software download portal.",
    ],
    tech: "ASP.NET Web Forms/MVC 3, MSSQL, custom Entity Framework, jQuery, Ajax, Windows Forms, Android, WP, Xamarin, Windows InstallShield, Infragistics, MS Project, Delphi",
  },
  {
    role: "Junior .NET Developer",
    company: "Ecobit Kft.",
    dates: "2001 – 2004",
    bullets: [
      "Full-stack development on an ERP system: Windows Forms front end, MSSQL back end and stored procedures.",
    ],
    tech: "Windows Forms, MSSQL, Enterprise Architect",
  },
];

const SKILLS = [
  { title: "Tulip platform", chips: ["App building", "Tulip Functions", "Custom queries", "Aggregations"] },
  { title: "DevOps & infrastructure", chips: ["Azure DevOps Server (TFS)", "CI/CD", "Ansible", "Icinga", "PowerShell", "Bash"] },
  { title: "Development", chips: ["C#", ".NET / .NET Core", "MSSQL", "ASP.NET (Web Forms, MVC)", "Blazor"] },
  { title: "Ways of working", chips: ["Scrum / Agile", "Git, GitHub", "GitHub Copilot", "Claude", "ChatGPT"] },
];

function Bracket() {
  return h(React.Fragment, null,
    h("span", { className: "bracket tl" }),
    h("span", { className: "bracket br" })
  );
}

function SectionHead({ num, title }) {
  return h("div", { className: "section-head" },
    h("span", { className: "section-num" }, num),
    h("h2", { className: "section-title" }, title),
    h("span", { className: "section-rule" })
  );
}

function Readouts() {
  const data = [
    { val: "15+", lbl: "years in operations-focused software & DevOps" },
    { val: "11 mo", lbl: "hands-on building on the Tulip Interfaces platform" },
    { val: "80%", lbl: "faster legacy app logic after optimization" },
  ];
  return h("div", { className: "readouts" },
    data.map((d, i) => h("div", { className: "readout", key: i },
      h("div", { className: "val" }, d.val),
      h("div", { className: "lbl" }, d.lbl)
    ))
  );
}

function Tiles() {
  return h("div", { className: "tiles" },
    EXPERTISE.map((t, i) => h("div", { className: "tile", key: i },
      h("span", { className: "tag" }, t.tag),
      h("h3", null, t.title),
      h("p", null, t.body)
    ))
  );
}

function TimelineItem({ item }) {
  const [open, setOpen] = useState(!!item.open);
  return h("div", { className: "tl-item" + (open ? " open" : "") + (item.tulip ? " active tulip" : "") },
    h("span", { className: "tl-node" }),
    h("button", {
      className: "tl-btn",
      onClick: () => setOpen(!open),
      "aria-expanded": open,
    },
      h("span", { className: "tl-head-text" },
        h("span", { className: "tl-role" }, item.role),
        h("span", { className: "tl-meta" }, h("span", { className: "co" }, item.company) + "  ·  " + item.dates)
      ),
      h("span", { className: "tl-toggle" }, open ? "–" : "+")
    ),
    h("div", { className: "tl-body" },
      h("div", { className: "tl-body-inner" },
        h("ul", null, item.bullets.map((b, i) => h("li", { key: i }, b))),
        h("div", { className: "tech-line" }, "Tech — " + item.tech)
      )
    )
  );
}

function Timeline() {
  return h("div", { className: "timeline" },
    EXPERIENCE.map((item, i) => h(TimelineItem, { item, key: i }))
  );
}

function Matrix() {
  return h("div", { className: "matrix" },
    SKILLS.map((g, i) => h("div", { className: "matrix-group", key: i },
      h("div", { className: "mg-title" }, g.title),
      h("div", { className: "chip-row" },
        g.chips.map((c, j) => h("span", { className: "chip", key: j }, c))
      )
    ))
  );
}

function FootGrid() {
  return h("div", { className: "foot-grid" },
    h("div", { className: "foot-col" },
      h("div", { className: "fc-title" }, "Certifications"),
      [
        ["Tulip Interfaces — Basic App Building", "2025"],
        ["ITIL 4 Foundation", "2023"],
        ["Ansible Basics", "2022"],
        ["MS Azure Workshop", "2019"],
        ["PowerShell Advanced", "2019"],
      ].map((c, i) => h("div", { className: "fc-item", key: i },
        h("div", { className: "fc-main" }, c[0]),
        h("div", { className: "fc-sub" }, c[1])
      ))
    ),
    h("div", { className: "foot-col" },
      h("div", { className: "fc-title" }, "Education"),
      h("div", { className: "fc-item" },
        h("div", { className: "fc-main" }, "BME, GTK"),
        h("div", { className: "fc-sub" }, "Bankinformatics, Expert-Engineer in Informatics of Banking Business · 2002–2007")
      ),
      h("div", { className: "fc-item" },
        h("div", { className: "fc-main" }, "BME, VIK"),
        h("div", { className: "fc-sub" }, "M.Sc. Electrical Engineering · 1996–2003")
      )
    ),
    h("div", { className: "foot-col" },
      h("div", { className: "fc-title" }, "Languages"),
      h("div", { className: "fc-item" },
        h("div", { className: "fc-main" }, "Hungarian"),
        h("div", { className: "fc-sub" }, "Native")
      ),
      h("div", { className: "fc-item" },
        h("div", { className: "fc-main" }, "English"),
        h("div", { className: "fc-sub" }, "B2 · upper-intermediate")
      ),
      h("div", { className: "fc-item" },
        h("div", { className: "fc-main" }, "Currently learning"),
        h("div", { className: "fc-sub" }, "Docker, Kubernetes, Python, Azure, AWS, Linux")
      )
    )
  );
}

function App() {
  return h("div", { className: "site" },
    h("div", { className: "grid-bg" }),
    h("div", { className: "wrap" },
      h("div", { className: "topbar" },
        h("span", null, "PG / CV / 2026"),
        h("div", { className: "topbar-right" },
          h("span", { className: "status" }, h("span", { className: "status-dot" }), "Open to opportunities"),
          h(ModeToggle, null)
        )
      ),
      h("div", { className: "hero" },
        h("h1", null, "GYöRGY Péter"),
        h("p", { className: "role" }, "Software Engineer - Tulip Platform Specialist"),
        h("p", { className: "profile" },
          h("strong", null, "15+ years"), " in operations-focused software development and DevOps. ",
          "Recently spent 11 months building production apps on the ", h("strong", null, "Tulip Interfaces"),
          " platform, digitizing shop-floor processes for manufacturing clients. Currently deepening Docker, Kubernetes, Ansible, Python and cloud."
        ),
        h("div", { className: "contact-row" },
          h("a", { href: "tel:+36705076193" }, "+36 70 507 6193"),
          h("a", { href: "mailto:gyorgyp@gmail.com" }, "gyorgyp@gmail.com"),
          h("a", { href: "https://hu.linkedin.com/in/gyorgyp/", target: "_blank", rel: "noopener noreferrer" }, "hu.linkedin.com/in/gyorgyp")
        )
      ),
      h(Readouts, null),

      h("div", { className: "section" },
        h(SectionHead, { num: "§1", title: "Tulip platform expertise" }),
        h(Tiles, null)
      ),

      h("div", { className: "section" },
        h(SectionHead, { num: "§2", title: "Experience" }),
        h(Timeline, null)
      ),

      h("div", { className: "section" },
        h(SectionHead, { num: "§3", title: "Skills" }),
        h(Matrix, null)
      ),

      h("div", { className: "section" },
        h(SectionHead, { num: "§4", title: "Certifications, education & languages" }),
        h(FootGrid, null)
      ),

      h("footer", { className: "sitefoot" },
        h("span", null, "Budapest, Hungary"),
        h("span", null, "Built for the Tulip Interfaces Solutions Engineer application")
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));