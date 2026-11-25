/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */
const PORTFOLIO_EVENTS = [
  {
    id: "ajarnyai",
    title: "2027 MDCU Ajarnyai",
    description: "Web platform and data tooling for MDCU Ajarnyai 2570.",
    siteUrl: "https://ajarnyai.docchula.com/",
    projects: [
      {
        name: "mdcu-ajarnyai-2570",
        description:
          "Next.js + Supabase web application for cadaver memorial & donor consent management, featuring CSV import with PATCH updates, special consent statuses, custom Chulalongkorn typography, mobile-first header/scroll optimizations, and maintenance mode.",
        tech: ["Next.js", "Supabase", "Vercel Analytics", "bcryptjs"],
        liveUrl: "https://ajarnyai.docchula.com/",
        githubUrl: "https://github.com/pawinner/mdcu-ajarnyai-2570",
        isPrivate: true,
        notes: "Supporting folders in event: data/ (CSV imports) & Pics from LineOA/."
      }
    ]
  },
  {
    id: "tournament",
    title: "MDCU 4th Medical Tournament",
    description: "Stage presentation, countdown, Jeopardy gameplay, and live leaderboard.",
    siteUrl: "https://pawinner.github.io/mdcu-tournament26/",
    projects: [
      {
        name: "mdcu-tournament26",
        description:
          "Interactive futuristic web app for stage presentation, countdown management, Jeopardy-style competition, and live leaderboard displays for the 4th MDCU Medical Tournament 2026.",
        tech: ["HTML/CSS/JS", "Google Apps Script"],
        liveUrl: "https://pawinner.github.io/mdcu-tournament26/",
        githubUrl: "https://github.com/pawinner/mdcu-tournament26"
      }
    ]
  },
  {
    id: "freshy",
    title: "MDCU Freshy Camp 2026",
    description: "Games, timers, check-in systems, dashboards, and interactive web apps for Freshy Camp & Big Game 2026.",
    siteUrl: "https://knowyournong82.vercel.app",
    projects: [
      {
        name: "MDCU-Night-CheckIn",
        group: "Registrar & Database",
        description:
          "ระบบเช็คชื่อน้อง MDCU Freshy Camp & Night 2026 — collaborative check-in system with PanuwitPuk.",
        tech: ["HTML/JS", "Google Apps Script"],
        liveUrl: "https://freshyxnight2026.vercel.app",
        githubUrl: "https://github.com/PanuwitPuk/MDCU-Night-CheckIn",
        role: "15 commits: Google Apps Script backend integration, cached search/filter speedup, dorm check-in logic, and bug fixes."
      },
      {
        name: "freshy26-knowyournong82",
        group: "Registrar & Database",
        description:
          '"จดหมายถึงพี่รหัส" — interactive web experience for Freshy 82 students with custom Open Graph metadata and responsive typography.',
        tech: ["React", "TypeScript", "Vite", "Vercel"],
        liveUrl: "https://knowyournong82.vercel.app",
        githubUrl: "https://github.com/pawinner/freshy26-knowyournong82"
      },
      {
        name: "freshy26-pline-checkin",
        group: "Registrar & Database",
        description:
          "P-Line check-in web application with location verification toggle, attendance check link, and responsive check-in flow.",
        tech: ["Next.js", "React", "Vercel"],
        liveUrl: "https://freshy26-pline-checkin.vercel.app",
        githubUrl: "https://github.com/pawinner/freshy26-pline-checkin"
      },
      {
        name: "MDCU-BigGame2026",
        group: "Big Game",
        description:
          "Main Big Game 2026 web application built with LiterallyNotCaT (KirikaA).",
        tech: ["Next.js", "NextAuth", "Vercel KV", "Framer Motion"],
        liveUrl: "https://gamehub888.vercel.app",
        githubUrl: "https://github.com/LiterallyNotCaT/MDCU-BigGame2026",
        role: "23 commits: game mode settings, timer/form write error handling, favicon & layout metadata updates."
      },
      {
        name: "biggame26-staff-checkin",
        group: "Big Game",
        description:
          "Staff check-in and QR attendance web app for Big Game 2026 with NextAuth and Google Apps Script OAuth integration.",
        tech: ["Next.js", "NextAuth", "Google Apps Script", "Vercel Analytics"],
        liveUrl: "https://biggame26-checkin.vercel.app",
        githubUrl: "https://github.com/pawinner/biggame26-staff-checkin",
        notes: "Includes local Codex prototype variant (biggame26-staff-checkin-codex xxxx)."
      },
      {
        name: "biggame26-ending",
        group: "Big Game",
        description:
          "Real-time central presentation dashboard, interactive game controllers, wood timer with particle effects, audio-analyzed lottery/slot machine, and ending results display.",
        tech: ["JavaScript", "Firebase", "Vercel Analytics", "Python"],
        liveUrl: "https://biggame26-ending.vercel.app",
        githubUrl: "https://github.com/pawinner/biggame26-ending"
      },
      {
        name: "biggame26-countdown",
        group: "Big Game",
        description:
          "Countdown timer suite for Big Game MDCU Freshy Camp 2026 (Escape, Fair, and Physical game modes with skip-intro & round timing controls).",
        tech: ["HTML/CSS/JS", "GitHub Pages"],
        liveUrl: "https://pawinner.github.io/mdcu-biggame26-countdown/escape",
        githubUrl: "https://github.com/pawinner/mdcu-biggame26-countdown"
      }
    ]
  },
  {
    id: "openhouse",
    title: "MDCU Open House 2026",
    description: "Escape Room web applications (Timer, Crossword, and Hint Quizzes).",
    siteUrl: "https://pawinner.github.io/mdcu-oph26-escape-timer/countdown",
    projects: [
      {
        name: "MDCU OPH Timer",
        description:
          "Countdown Timer for Escape Room MDCU Open House 2026 (mdcu-oph26-escape-timer).",
        tech: ["HTML/CSS/JS", "GitHub Pages"],
        liveUrl: "https://pawinner.github.io/mdcu-oph26-escape-timer/countdown",
        githubUrl: "https://github.com/pawinner/mdcu-oph26-escape-timer"
      },
      {
        name: "MDCU OPH Crossword Gemini",
        description:
          "Crossword Gameplay for Escape Room MDCU Open House 2026 (mdcu-oph26-escape-crossword). Includes earlier MDCU OPH Crossword GPT prototype.",
        tech: ["HTML/CSS/JS", "GitHub Pages"],
        liveUrl: "https://pawinner.github.io/mdcu-oph26-escape-crossword/play",
        githubUrl: "https://github.com/pawinner/mdcu-oph26-escape-crossword"
      },
      {
        name: "MDCU OPH Hint Quiz",
        description:
          "Quizzes for Hints for Escape Room MDCU Open House 2026 (mdcu-oph26-escape-hints).",
        tech: ["HTML/CSS/JS", "GitHub Pages"],
        liveUrl: "https://pawinner.github.io/mdcu-oph26-escape-hints/hint",
        githubUrl: "https://github.com/pawinner/mdcu-oph26-escape-hints"
      }
    ]
  },
  {
    id: "itsmcu",
    title: "IT_SMCU Projects",
    description: "Student Union of the Faculty of Medicine, Chulalongkorn University (docchula) IT projects & contributions.",
    siteUrl: "https://fake-docchula-player.vercel.app",
    projects: [
      {
        name: "DataPrivacySMCU",
        description:
          "SMCU Data Privacy form submission and approval web application (Laravel / PHP). Also includes local working copy DataPrivacySMCU 02.",
        tech: ["Laravel", "PHP", "Bootstrap 5", "Docker"],
        githubUrl: "https://github.com/docchula/DataPrivacySMCU",
        isPrivate: true,
        role: "Server migration & bug fixes: fixed Barney server migration with P'Bebie (9a075a4), restored local storage root to storage/app (818bc06), redirected /login to /redirect with feature tests (f42ccfd), added Bootstrap 5 paginator support with tests (5d69671), and merged PR #10 (f0d126d)."
      },
      {
        name: "fake-el-player",
        description:
          "Forked Docchula Video Player v2 for MDCU E-Learning, deployed as a backup player with status/redirect controls and an interactive autoplay prank.",
        tech: ["Vue 3", "TypeScript", "Vite", "TailwindCSS", "Video.js"],
        liveUrl: "https://fake-docchula-player.vercel.app",
        githubUrl: "https://github.com/pawinner/fake-el-player",
        role: "8 commits: added NoticeModal disclosing backup use (af22057, 917e11f), migrated deployment from GitHub Pages to Vercel (2e47540), enabled Vercel Analytics (7886d37), added site open/redirect status config (86bd07c), and built NextVideoModal + VITE_AUTOPLAY prank (4378525, 235a0fb)."
      },
      {
        name: "el-player",
        description:
          "Official Docchula Video Player v2 for MDCU E-Learning (docchula/el-player).",
        tech: ["Vue 3", "TypeScript", "Vite", "Video.js"],
        githubUrl: "https://github.com/docchula/el-player",
        role: "Upstream reference repository (0 direct commits by Pawinner; forked into fake-el-player)."
      },
      {
        name: "Providence",
        description:
          "SMCU New Student Registration & Google Workspace enrollment web application (docchula/Providence).",
        tech: ["Laravel", "Inertia.js", "Vue 3"],
        githubUrl: "https://github.com/docchula/Providence",
        isPrivate: true,
        role: "Local reference clone (0 commits by Pawinner in git history)."
      }
    ]
  },
  {
    id: "other",
    title: "Other GitHub Repositories",
    description: "Additional public repositories on github.com/pawinner outside the local event folders.",
    siteUrl: null,
    projects: [
      {
        name: "it-issue-nextjs-supabase",
        description: "IT issue tracking web application built with Next.js and Supabase.",
        tech: ["Next.js", "Supabase"],
        githubUrl: "https://github.com/pawinner/it-issue-nextjs-supabase"
      },
      {
        name: "DATA-ANLYS-PYTHON",
        description:
          'Jupyter notebooks following along with the CHULA MOOC Flexi course "Learn Python: Language Basics and Fundamental Data Processing."',
        tech: ["Python", "Jupyter Notebook"],
        liveUrl: "https://www.mycourseville.com/?q=onlinecourse/course/51927",
        githubUrl: "https://github.com/pawinner/DATA-ANLYS-PYTHON"
      },
      {
        name: "baansuan_prannok",
        description: "Forked web project from bluenex/baansuan_prannok.",
        tech: ["Fork"],
        liveUrl: "http://bluenex.github.io/baansuan_prannok/",
        githubUrl: "https://github.com/pawinner/baansuan_prannok"
      }
    ]
  }
];

/* ═══════════════════════════════════════════════════════
   COLOR MAP (per event index)
═══════════════════════════════════════════════════════ */
const EVENT_COLORS = [
  { hex: "#a78bfa", grad: "linear-gradient(90deg,#7c3aed,#a78bfa)" },  // violet
  { hex: "#34d399", grad: "linear-gradient(90deg,#059669,#34d399)" },  // emerald
  { hex: "#60a5fa", grad: "linear-gradient(90deg,#2563eb,#60a5fa)" },  // blue
  { hex: "#f472b6", grad: "linear-gradient(90deg,#db2777,#f472b6)" },  // pink
  { hex: "#fb923c", grad: "linear-gradient(90deg,#ea580c,#fb923c)" },  // orange
  { hex: "#38bdf8", grad: "linear-gradient(90deg,#0284c7,#38bdf8)" },  // sky
];

/* ═══════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════ */
const state = { query: "" };

/* ═══════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════ */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Returns the DuckDuckGo favicon URL — returns 404 on failure (onerror fires), no blank globe */
function faviconUrl(href) {
  try {
    const url = new URL(href);
    return `https://icons.duckduckgo.com/ip3/${url.hostname}.ico`;
  } catch {
    return null;
  }
}

function matchesQuery(project, eventTitle, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  const haystack = [
    eventTitle, project.name, project.description,
    project.role || "", project.notes || "",
    project.group || "",
    ...(project.tech || [])
  ].join(" ").toLowerCase();
  return haystack.includes(q);
}

/* ═══════════════════════════════════════════════════════
   THEME
═══════════════════════════════════════════════════════ */
const themeToggleEl = document.getElementById("themeToggle");
const themeIconEl   = document.getElementById("themeIcon");

function initTheme() {
  const saved   = localStorage.getItem("theme");
  const initial = saved || "dark";
  document.documentElement.setAttribute("data-theme", initial);
  themeIconEl.textContent = initial === "light" ? "🌙" : "☀️";
}

themeToggleEl.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeIconEl.textContent = next === "light" ? "🌙" : "☀️";
});

/* ═══════════════════════════════════════════════════════
   SIDE NAV
═══════════════════════════════════════════════════════ */
const sideNavEl = document.getElementById("sideNav");

function buildSideNav() {
  // Remove old items (keep label)
  sideNavEl.querySelectorAll(".side-nav-item").forEach(el => el.remove());

  PORTFOLIO_EVENTS.forEach((ev, i) => {
    const color = EVENT_COLORS[i % EVENT_COLORS.length];
    const btn = document.createElement("button");
    btn.className = "side-nav-item";
    btn.dataset.eventId = ev.id;
    btn.style.setProperty("--item-color", color.hex);
    btn.setAttribute("type", "button");
    btn.setAttribute("aria-label", `Jump to ${ev.title}`);

    // Dot
    const dot = document.createElement("span");
    dot.className = "side-nav-dot";
    dot.style.setProperty("--item-color", color.hex);
    btn.appendChild(dot);

    // Favicon (from siteUrl or first liveUrl)
    const faviconSrc = ev.siteUrl
      ? faviconUrl(ev.siteUrl)
      : (ev.projects.find(p => p.liveUrl) ? faviconUrl(ev.projects.find(p => p.liveUrl).liveUrl) : null);

    if (faviconSrc) {
      const img = document.createElement("img");
      img.src = faviconSrc;
      img.alt = "";
      img.className = "side-nav-favicon";
      img.width = 14; img.height = 14;
      img.onerror = () => img.remove();
      btn.appendChild(img);
    }

    // Label
    const label = document.createElement("span");
    label.textContent = ev.title;
    btn.appendChild(label);

    btn.addEventListener("click", () => {
      const section = document.getElementById("event-" + ev.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    sideNavEl.appendChild(btn);
  });
}

/* ═══════════════════════════════════════════════════════
   SCROLL SPY — scroll event + manual position check
   Fixes the "last section never activates" problem.
═══════════════════════════════════════════════════════ */
let _scrollSpyRaf = null;

function setupScrollSpy() {
  // Remove any previous listener
  window.removeEventListener("scroll", _scrollSpyHandler);
  window.addEventListener("scroll", _scrollSpyHandler, { passive: true });
  _scrollSpyHandler(); // run once immediately
}

function _scrollSpyHandler() {
  if (_scrollSpyRaf) return;
  _scrollSpyRaf = requestAnimationFrame(() => {
    _scrollSpyRaf = null;

    const sections = [...document.querySelectorAll(".event-section")];
    if (!sections.length) return;

    const winH       = window.innerHeight;
    const docH       = document.documentElement.scrollHeight;
    const nearBottom = window.scrollY + winH >= docH - 40;

    // Derive id from the element's own id attr (data-event-id is never set by renderPortfolio)
    const idOf = el => el.id.replace("event-", "");

    let activeId = idOf(sections[0]); // default: first section

    if (nearBottom) {
      activeId = idOf(sections[sections.length - 1]);
    } else {
      const threshold = winH * 0.35;
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= threshold) {
          activeId = idOf(s);
        }
      }
    }

    sideNavEl.querySelectorAll(".side-nav-item").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.eventId === activeId);
    });
  });
}

/* ═══════════════════════════════════════════════════════
   PROJECT CARD
═══════════════════════════════════════════════════════ */
function createProjectCard(project, colorGrad) {
  const card = document.createElement("article");
  card.className = "card";
  card.style.setProperty("--card-gradient", colorGrad);

  /* — top row — */
  const top = document.createElement("div");
  top.className = "card-top";

  const titleWrap = document.createElement("div");
  titleWrap.className = "card-title-wrap";

  // Favicon on card (from liveUrl or githubUrl)
  const favSrc = project.liveUrl ? faviconUrl(project.liveUrl) : faviconUrl(project.githubUrl);
  if (favSrc) {
    const fav = document.createElement("img");
    fav.src = favSrc;
    fav.alt = "";
    fav.className = "card-favicon";
    fav.width = 18; fav.height = 18;
    fav.onerror = () => fav.remove();
    titleWrap.appendChild(fav);
  }

  const titleEl = document.createElement("h3");
  titleEl.className = "card-title";
  titleEl.textContent = project.name;
  titleWrap.appendChild(titleEl);
  top.appendChild(titleWrap);

  if (project.liveUrl) {
    const badge = document.createElement("span");
    badge.className = "badge badge-live";
    badge.textContent = "Live";
    top.appendChild(badge);
  } else if (project.isPrivate) {
    const badge = document.createElement("span");
    badge.className = "badge badge-private";
    badge.textContent = "Private";
    top.appendChild(badge);
  }

  card.appendChild(top);

  /* — description (expandable) — */
  const descWrap = document.createElement("div");
  descWrap.className = "card-desc-wrap";

  const desc = document.createElement("p");
  desc.className = "card-desc";
  desc.textContent = project.description;
  descWrap.appendChild(desc);

  // "Show more / Show less" toggle
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "desc-toggle";
  toggleBtn.textContent = "Show more ↓";
  toggleBtn.addEventListener("click", () => {
    const expanded = descWrap.classList.toggle("expanded");
    toggleBtn.textContent = expanded ? "Show less ↑" : "Show more ↓";
  });
  descWrap.appendChild(toggleBtn);
  card.appendChild(descWrap);

  /* — role — */
  if (project.role) {
    const roleBox = document.createElement("div");
    roleBox.className = "role-box";
    roleBox.innerHTML = `<strong>My Role / Commits</strong>${escapeHtml(project.role)}`;
    card.appendChild(roleBox);
  }

  /* — notes — */
  if (project.notes) {
    const note = document.createElement("p");
    note.className = "card-desc";
    note.style.fontStyle = "italic";
    note.textContent = project.notes;
    card.appendChild(note);
  }

  /* — tags — */
  if (project.tech && project.tech.length) {
    const tags = document.createElement("div");
    tags.className = "tags";
    project.tech.forEach(t => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = t;
      tags.appendChild(span);
    });
    card.appendChild(tags);
  }

  /* — links — */
  if (project.liveUrl || project.githubUrl) {
    const links = document.createElement("div");
    links.className = "card-links";

    if (project.liveUrl) {
      const a = document.createElement("a");
      a.className = "link-btn primary";
      a.href = project.liveUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.style.background = colorGrad;

      const favSrcLive = faviconUrl(project.liveUrl);
      if (favSrcLive) {
        const fav = document.createElement("img");
        fav.src = favSrcLive;
        fav.alt = "";
        fav.className = "link-btn-favicon";
        fav.onerror = () => fav.remove();
        a.appendChild(fav);
      }

      const txt = document.createElement("span");
      txt.textContent = "Visit Site ↗";
      a.appendChild(txt);
      links.appendChild(a);
    }

    if (project.githubUrl) {
      const a = document.createElement("a");
      a.className = "link-btn";
      a.href = project.githubUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";

      const ghFav = faviconUrl("https://github.com");
      if (ghFav) {
        const fav = document.createElement("img");
        fav.src = ghFav;
        fav.alt = "";
        fav.className = "link-btn-favicon";
        fav.onerror = () => fav.remove();
        a.appendChild(fav);
      }

      const txt = document.createElement("span");
      txt.textContent = "GitHub ↗";
      a.appendChild(txt);
      links.appendChild(a);
    }

    card.appendChild(links);
  }

  return card;
}

/* ═══════════════════════════════════════════════════════
   RENDER PORTFOLIO
═══════════════════════════════════════════════════════ */
const statsEl  = document.getElementById("statsBar");
const rootEl   = document.getElementById("portfolioRoot");
const searchEl = document.getElementById("searchInput");

function renderPortfolio() {
  rootEl.innerHTML = "";

  const q = state.query;

  const filteredEvents = PORTFOLIO_EVENTS
    .map((ev, i) => ({
      ...ev,
      _color: EVENT_COLORS[i % EVENT_COLORS.length],
      _idx: i,
      projects: ev.projects.filter(p => matchesQuery(p, ev.title, q))
    }))
    .filter(ev => ev.projects.length > 0);

  const totalProjects = filteredEvents.reduce((acc, ev) => acc + ev.projects.length, 0);
  const liveCount     = filteredEvents.reduce((acc, ev) => acc + ev.projects.filter(p => p.liveUrl).length, 0);

  statsEl.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:.6;flex-shrink:0"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
    Showing <strong style="color:var(--text)">${totalProjects}</strong> project${totalProjects === 1 ? "" : "s"}
    across <strong style="color:var(--text)">${filteredEvents.length}</strong> event${filteredEvents.length === 1 ? "" : "s"}
    &mdash; <strong style="color:var(--green)">${liveCount}</strong> with live sites
  `;

  if (!filteredEvents.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `<p style="font-size:2rem;margin-bottom:8px">🔍</p><p>No matching projects found.</p>`;
    rootEl.appendChild(empty);
    return;
  }

  filteredEvents.forEach(ev => {
    const color = ev._color;
    const section = document.createElement("section");
    section.className = "event-section";
    section.id = "event-" + ev.id;

    // Header
    const hdr = document.createElement("div");
    hdr.className = "event-header";

    const colorBar = document.createElement("div");
    colorBar.className = "event-color-bar";
    colorBar.style.background = color.grad;
    hdr.appendChild(colorBar);

    const hdrText = document.createElement("div");
    hdrText.className = "event-header-text";

    const h2 = document.createElement("h2");
    h2.textContent = ev.title;

    // Event favicon (siteUrl)
    const evFavSrc = ev.siteUrl ? faviconUrl(ev.siteUrl) : null;
    if (evFavSrc) {
      const img = document.createElement("img");
      img.src = evFavSrc;
      img.alt = "";
      img.style.cssText = "width:18px;height:18px;border-radius:4px;vertical-align:middle;margin-right:7px;";
      img.onerror = () => img.remove();
      h2.prepend(img);
    }

    hdrText.appendChild(h2);

    if (ev.description) {
      const descEl = document.createElement("p");
      descEl.className = "event-desc";
      descEl.textContent = ev.description;
      hdrText.appendChild(descEl);
    }

    hdr.appendChild(hdrText);

    const countEl = document.createElement("span");
    countEl.className = "event-count";
    countEl.textContent = `${ev.projects.length} project${ev.projects.length === 1 ? "" : "s"}`;
    hdr.appendChild(countEl);

    section.appendChild(hdr);

    // Projects Grid (grouped if any project specifies a group, else flat)
    const hasGroups = ev.projects.some(p => p.group);
    if (!hasGroups) {
      const grid = document.createElement("div");
      grid.className = "projects-grid";
      ev.projects.forEach(p => grid.appendChild(createProjectCard(p, color.grad)));
      section.appendChild(grid);
    } else {
      const groupMap = new Map();
      ev.projects.forEach(p => {
        const gName = p.group || "Other";
        if (!groupMap.has(gName)) groupMap.set(gName, []);
        groupMap.get(gName).push(p);
      });

      groupMap.forEach((gProjects, gName) => {
        const groupEl = document.createElement("div");
        groupEl.className = "project-group";

        const groupHdr = document.createElement("div");
        groupHdr.className = "project-group-header";

        const groupTitle = document.createElement("h3");
        groupTitle.className = "project-group-title";
        groupTitle.textContent = gName;
        groupHdr.appendChild(groupTitle);

        const groupCount = document.createElement("span");
        groupCount.className = "project-group-count";
        groupCount.textContent = `${gProjects.length} project${gProjects.length === 1 ? "" : "s"}`;
        groupHdr.appendChild(groupCount);

        groupEl.appendChild(groupHdr);

        const grid = document.createElement("div");
        grid.className = "projects-grid";
        gProjects.forEach(p => grid.appendChild(createProjectCard(p, color.grad)));
        groupEl.appendChild(grid);

        section.appendChild(groupEl);
      });
    }

    rootEl.appendChild(section);
  });

  // Re-setup scroll spy after rendering
  setupScrollSpy();
}

/* ═══════════════════════════════════════════════════════
   SEARCH
═══════════════════════════════════════════════════════ */
searchEl.addEventListener("input", e => {
  state.query = e.target.value.trim();
  renderPortfolio();
  buildSideNav();
});

/* ═══════════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════════ */
initTheme();
buildSideNav();
renderPortfolio();
