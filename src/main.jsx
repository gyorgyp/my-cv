import { cvData } from './cvData.js'
import './cv.css'

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
  return h("div", { className: "readouts" },
    cvData.readouts.map((d, i) => h("div", { className: "readout", key: i },
      h("div", { className: "val" }, d.val),
      h("div", { className: "lbl" }, d.lbl)
    ))
  );
}

function Tiles() {
  return h("div", { className: "tiles" },
    cvData.expertise.map((t, i) => h("div", { className: "tile", key: i },
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
    cvData.experience.map((item, i) => h(TimelineItem, { item, key: i }))
  );
}

function Matrix() {
  return h("div", { className: "matrix" },
    cvData.skills.map((g, i) => h("div", { className: "matrix-group", key: i },
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
      cvData.certifications.map((c, i) => h("div", { className: "fc-item", key: i },
        h("div", { className: "fc-main" }, c.name),
        h("div", { className: "fc-sub" }, c.year)
      ))
    ),
    h("div", { className: "foot-col" },
      h("div", { className: "fc-title" }, "Education"),
      cvData.education.map((edu, i) => h("div", { className: "fc-item", key: i },
        h("div", { className: "fc-main" }, edu.school),
        h("div", { className: "fc-sub" }, edu.degree)
      ))
    ),
    h("div", { className: "foot-col" },
      h("div", { className: "fc-title" }, "Languages"),
      cvData.languages.map((l, i) => h("div", { className: "fc-item", key: i },
        h("div", { className: "fc-main" }, l.name),
        h("div", { className: "fc-sub" }, l.level)
      ))
    )
  );
}

function HeroProfile() {
  return h("p", { className: "profile" },
    cvData.hero.profileSegments.map((seg, i) =>
      seg.strong ? h("strong", { key: i }, seg.text) : h(React.Fragment, { key: i }, seg.text)
    )
  );
}

function App() {
  return h("div", { className: "site" },
    h("div", { className: "grid-bg" }),
    h("div", { className: "wrap" },
      h("div", { className: "topbar" },
        h("span", null, cvData.meta.tag),
        h("div", { className: "topbar-right" },
          h("span", { className: "status" }, h("span", { className: "status-dot" }), cvData.meta.status),
          h(ModeToggle, null)
        )
      ),
      h("div", { className: "hero" },
        h("h1", null, cvData.hero.name),
        h("p", { className: "role" }, cvData.hero.role),
        h(HeroProfile, null),
        h("div", { className: "contact-row" },
          h("a", { href: cvData.contact.phoneHref }, cvData.contact.phone),
          h("a", { href: cvData.contact.emailHref }, cvData.contact.email),
          h("a", { href: cvData.contact.linkedinUrl, target: "_blank", rel: "noopener noreferrer" }, cvData.contact.linkedinLabel)
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
        h("span", null, cvData.footer.location),
        h("span", null, cvData.footer.note),
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));