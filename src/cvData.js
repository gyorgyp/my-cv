// All CV content lives here, separate from markup/logic (main.jsx).
// Edit this file to update the CV text without touching components or styles.

export const cvData = {
  meta: {
    tag: "PG / CV / 2026",
    status: "Open to opportunities",
  },

  contact: {
    phone: "+36-70-507-6193",
    phoneHref: "tel:+36705076193",
    email: "gyorgyp@gmail.com",
    emailHref: "mailto:gyorgyp@gmail.com",
    linkedinLabel: "hu.linkedin.com/in/gyorgyp",
    linkedinUrl: "https://hu.linkedin.com/in/gyorgyp/",
  },

  hero: {
    name: "György Péter",
    role: "Software Engineer — Tulip Platform Specialist",
    // Rendered as a sequence of segments so bold spans stay editable as plain text.
    profileSegments: [
      { text: "15+ years", strong: true },
      { text: " in operations-focused software development and DevOps. Recently spent 11 months building production apps on the " },
      { text: "Tulip Interfaces", strong: true },
      { text: " platform, digitizing shop-floor processes for manufacturing clients. Currently deepening Docker, Kubernetes, Ansible, Python and cloud." },
    ],
  },

  readouts: [
    { val: "15+", lbl: "years in operations-focused software & DevOps" },
    { val: "11 mo", lbl: "hands-on building on the Tulip Interfaces platform" },
    { val: "80%", lbl: "faster legacy app logic after optimization" },
  ],

  expertise: [
    {
      tag: "01",
      title: "App building & Functions",
      body: "Designs and ships production Tulip apps end to end, extending logic beyond the visual builder with Tulip Functions.",
    },
    {
      tag: "02",
      title: "Custom queries & aggregations",
      body: "Writes targeted queries and aggregations against operational data to keep apps fast under real shop-floor load.",
    },
    {
      tag: "03",
      title: "Legacy logic optimization",
      body: "Re-worked existing app logic and cut processing time by 80% on a production line without disrupting operators.",
    },
    {
      tag: "04",
      title: "Client-facing delivery",
      body: "Owns the conversation with plant and client stakeholders — from requirements to a naming convention every team follows.",
    },
  ],

  experience: [
    {
      role: "Self training / personal projects",
      company: "Garazstuning Kft.",
      dates: "2026 – Present",
      bullets: [
        "pegedev CV portfolio",
      ],
      tech: "React, GitHub, Azure Cloude",
    },
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
  ],

  skills: [
    { title: "Tulip platform", chips: ["App building", "Tulip Functions", "Custom queries", "Aggregations"] },
    { title: "DevOps & infrastructure", chips: ["Azure DevOps Server (TFS)", "CI/CD", "Ansible", "Icinga", "PowerShell", "Bash"] },
    { title: "Development", chips: ["C#", ".NET / .NET Core", "MSSQL", "ASP.NET (Web Forms, MVC)", "Blazor"] },
    { title: "Ways of working", chips: ["Scrum / Agile", "Git, GitHub", "GitHub Copilot", "Claude", "ChatGPT"] },
  ],

  certifications: [
    { name: "Tulip Interfaces — Basic App Building", year: "2026" },
    { name: "ITIL 4 Foundation", year: "2023" },
    { name: "Ansible Basics", year: "2022" },
    { name: "MS Azure Workshop", year: "2019" },
    { name: "PowerShell Advanced", year: "2019" },
  ],

  education: [
    {
      school: "BME, GTK",
      degree: "Bankinformatics, Expert-Engineer in Informatics of Banking Business · 2002–2007",
    },
    {
      school: "BME, VIK",
      degree: "M.Sc. Electrical Engineering · 1996–2003",
    },
  ],

  languages: [
    { name: "Hungarian", level: "Native" },
    { name: "English", level: "B2 · upper-intermediate" },
    { name: "Currently learning", level: "Docker, Kubernetes, Python, Azure, AWS, Linux" },
  ],

  footer: {
    location: "Lovasberény, Hungary",
    note: "---------",
  },
};
