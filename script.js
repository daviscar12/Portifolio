const profile = {
  name: "Davi Scartezini",
  role: "Desenvolvedor de front-end em formação",
  location: "Brasil",
  email: "davi.scartezini11@gmail.com",
  linkedin: "https://www.linkedin.com/in/davi-henrique-scartezini-851222356/",
  github: "https://github.com/daviscar12",
  summary:
    "Desenvolvedor front-end em formação, com facilidade para trabalhar em equipe e boa comunicação e oratória. Também gosto muito de audiovisual, especialmente edição de vídeo e fotografia.",
  about:
    "Sou estudante de desenvolvimento front-end e do técnico em Informática para Internet. Gosto de aprender, colaborar em equipe e apresentar ideias com clareza. Também tenho grande interesse por audiovisual, como edição de vídeo e fotografia.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "Trabalho em equipe",
    "Oratória e comunicação",
    "Edição de vídeo",
    "Fotografia",
  ],
  experience: [
    {
      role: "Projeto Autoway — QuesT",
      organization: "Ágora Tech Park",
      description:
        "Participação no projeto Autoway, desenvolvido no QuesT, no Ágora Tech Park.",
    },
    {
      role: "Experiência em cafeteria",
      organization: "Aroma Doce",
      description: "Atuação profissional em uma cafeteria.",
    },
  ],
  education: [
    {
      course: "Ensino Médio — 3º ano e Técnico em Informática para Internet",
      institution: "Senac Hub Joinville",
      status: "Em andamento",
    },
    {
      course: "Ensino Fundamental",
      institution: "Escola Hans Müller",
      status: "Concluído",
    },
  ],
  projects: [
    {
      name: "Autoway",
      description:
        "Projeto desenvolvido no QuesT, no Ágora Tech Park.",
      tags: ["QuesT", "Ágora Tech Park"],
    },
    {
      name: "Communify",
      description:
        "Projeto integrador de desenvolvimento web com Ionic, Firebase e APIs externas.",
      tags: ["JavaScript", "Ionic", "Firebase"],
      url: "https://github.com/daviscar12/comunityApp",
    },
    {
      name: "WalkAlert",
      description:
        "Aplicativo de segurança para gravar e compartilhar rotas com contatos de confiança. Desenvolvido com Ionic, Vue.js, Firebase e API de mapas.",
      tags: ["Ionic", "Vue.js", "Firebase"],
      url: "https://github.com/daviscar12/WalkAlert",
    },
  ],
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const elements = {
  desktop: $("#desktop"),
  windowLayer: $("#window-layer"),
  taskbarApps: $("#taskbar-apps"),
  startMenu: $("#start-menu"),
  pinnedApps: $("#pinned-apps"),
  quickPanel: $("#quick-panel"),
  calendarPanel: $("#calendar-panel"),
  contextMenu: $("#context-menu"),
  appSearch: $("#app-search"),
  startButton: $("#start-button"),
  searchButton: $("#search-button"),
  quickButton: $("#quick-button"),
  clockButton: $("#clock-button"),
  calendarToggle: $("#calendar-toggle"),
  powerButton: $("#power-button"),
  wakeButton: $("#wake-button"),
  brightnessInput: $(".brightness-control input"),
  notificationButton: $(".notification-button"),
  clockTime: $("#clock-time"),
  clockDate: $("#clock-date"),
  calendarDate: $("#calendar-date"),
  calendarGrid: $("#calendar-grid"),
  screenOff: $("#screen-off"),
};

const state = {
  topZ: 20,
  toastTimer: null,
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function renderSkills(skills) {
  return skills.map((skill) => `<span>${escapeHtml(skill)}</span>`).join("");
}

function portfolioPage() {
  const projects = profile.projects
    .map(
      (project) => `
        <article class="project-item">
          <div class="project-topline">
            <h3>${escapeHtml(project.name)}</h3>
            ${project.url ? `<a class="project-link" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer">Ver projeto ↗</a>` : ""}
          </div>
          <p>${escapeHtml(project.description)}</p>
          <div class="project-tags">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        </article>
      `,
    )
    .join("");

  return `
    <div class="app-page">
      <section class="hero-profile">
        <div>
          <p class="page-eyebrow">Portfólio pessoal</p>
          <h1>${escapeHtml(profile.name)}</h1>
          <p>${escapeHtml(profile.role)} · ${escapeHtml(profile.location)}<br>${escapeHtml(profile.summary)}</p>
          <div class="profile-actions">
            <button class="primary-link" data-open="resume">▤ Ver currículo</button>
            <a class="secondary-link" href="${escapeHtml(profile.linkedin)}" target="_blank" rel="noreferrer">in LinkedIn</a>
            <a class="secondary-link" href="${escapeHtml(profile.github)}" target="_blank" rel="noreferrer">⌘ GitHub</a>
          </div>
        </div>
        <div class="avatar avatar-large">DS</div>
      </section>
      <div class="section-heading">
        <h2>Projetos selecionados</h2>
        <span>${profile.projects.length} projetos</span>
      </div>
      <div class="project-list">${projects}</div>
    </div>
  `;
}

function resumePage() {
  return `
    <div class="app-page resume-page">
      <div class="resume-header">
        <div>
          <p class="page-eyebrow">Currículo profissional</p>
          <h1>${escapeHtml(profile.name)}</h1>
          <p>${escapeHtml(profile.role)} · ${escapeHtml(profile.location)}</p>
        </div>
        <button class="primary-link" data-action="print">↓ Salvar como PDF</button>
      </div>
      <div class="resume-contact">
        <a href="mailto:${escapeHtml(profile.email)}">✉ ${escapeHtml(profile.email)}</a>
        <a href="${escapeHtml(profile.linkedin)}" target="_blank" rel="noreferrer">in LinkedIn</a>
        <a href="${escapeHtml(profile.github)}" target="_blank" rel="noreferrer">⌘ GitHub</a>
      </div>
      <section class="resume-section">
        <h2>Perfil</h2>
        <div>
          <p>${escapeHtml(profile.summary)}</p>
        </div>
      </section>
      <section class="resume-section">
        <h2>Experiência</h2>
        <div class="resume-items">
          ${profile.experience.map((item) => `
            <article class="resume-item">
              <h3>${escapeHtml(item.role)}</h3>
              <span class="resume-meta">${escapeHtml(item.organization)}</span>
              <p>${escapeHtml(item.description)}</p>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="resume-section">
        <h2>Formação</h2>
        <div class="resume-items">
          ${profile.education.map((item) => `
            <article class="resume-item">
              <h3>${escapeHtml(item.course)}</h3>
              <span class="resume-meta">${escapeHtml(item.institution)} · ${escapeHtml(item.status)}</span>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="resume-section">
        <h2>Competências</h2>
        <div class="skill-list">${renderSkills(profile.skills)}</div>
      </section>
    </div>
  `;
}

function socialPage(kind) {
  const isLinkedIn = kind === "linkedin";
  const service = isLinkedIn ? "LinkedIn" : "GitHub";
  const link = isLinkedIn ? profile.linkedin : profile.github;
  const text = isLinkedIn
    ? "Conecte-se comigo e acompanhe minha trajetória profissional."
    : "Explore meus repositórios, projetos e experimentos com código.";

  return `
    <div class="app-page">
      <p class="page-eyebrow">Perfil profissional</p>
      <section class="social-banner">
        <div class="social-logo ${isLinkedIn ? "" : "github"}">${isLinkedIn ? "in" : "⌘"}</div>
        <div>
          <h1>${service}</h1>
          <p>${escapeHtml(profile.name)} · ${escapeHtml(profile.role)}</p>
        </div>
      </section>
      <p>${text}</p>
      <div class="social-details">
        <div class="detail-row"><small>Nome</small><strong>${escapeHtml(profile.name)}</strong></div>
        <div class="detail-row"><small>Localização</small><strong>${escapeHtml(profile.location)}</strong></div>
        <div class="detail-row"><small>Área</small><strong>${escapeHtml(profile.role)}</strong></div>
        <div class="detail-row"><small>Contato</small><strong>${escapeHtml(profile.email)}</strong></div>
      </div>
      <a class="primary-link" href="${escapeHtml(link)}" target="_blank" rel="noreferrer">Abrir perfil no ${service} ↗</a>
    </div>
  `;
}

function linkedinPage() {
  return socialPage("linkedin");
}

function githubPage() {
  return socialPage("github");
}

function aboutPage() {
  return `
    <div class="app-page">
      <p class="page-eyebrow">Um pouco sobre mim</p>
      <h1>Olá, eu sou ${escapeHtml(profile.name)}.</h1>
      <div class="about-layout">
        <div>
          <p>${escapeHtml(profile.about)}</p>
          <p>${escapeHtml(profile.summary)}</p>
          <div class="profile-actions">
            <button class="primary-link" data-open="resume">▤ Conheça minha trajetória</button>
            <a class="secondary-link" href="mailto:${escapeHtml(profile.email)}">✉ Entre em contato</a>
          </div>
        </div>
        <aside class="about-note">“Acredito que bons projetos nascem da curiosidade, da colaboração e da vontade de melhorar um pouco a cada versão.”</aside>
      </div>
      <div class="section-heading">
        <h2>Ferramentas que estou usando</h2>
      </div>
      <div class="skill-list">${renderSkills(profile.skills)}</div>
    </div>
  `;
}

function googlePage() {
  return `
    <div class="app-page google-page">
      <div class="google-logo" aria-label="Google">
        <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
      </div>
      <form class="google-search" id="google-search-form" action="https://www.google.com/search" method="get" target="_blank">
        <span class="google-search-icon" aria-hidden="true">⌕</span>
        <input name="q" type="search" placeholder="Pesquise na web" aria-label="Pesquise na web" autocomplete="off" required>
        <button type="submit" aria-label="Pesquisar">⌕</button>
      </form>
      <div class="google-actions">
        <button type="submit" form="google-search-form">Pesquisa Google</button>
        <button type="submit" form="google-search-form" name="btnI" value="1">Estou com sorte</button>
      </div>
      <p class="google-note">Pesquisa feita com o Google</p>
      <div class="google-shortcuts">
        <a href="https://www.google.com/search?q=JavaScript" target="_blank" rel="noreferrer"><span>JS</span>JavaScript</a>
        <a href="https://www.google.com/search?q=desenvolvimento+web" target="_blank" rel="noreferrer"><span>⌘</span>Desenvolvimento web</a>
        <a href="https://www.google.com/search?q=GitHub" target="_blank" rel="noreferrer"><span>GH</span>GitHub</a>
      </div>
    </div>
  `;
}

function initGoogleSearch(win) {
  $(".google-search input", win).focus();
}

const apps = {
  portfolio: { title: "Meu portfólio", icon: "✦", color: "#2875bf", render: portfolioPage },
  resume: { title: "Currículo", icon: "CV", color: "#f5fbff", render: resumePage },
  linkedin: { title: "LinkedIn", icon: "in", color: "#0a75b9", render: linkedinPage },
  github: { title: "GitHub", icon: "⌘", color: "#26323c", render: githubPage },
  about: { title: "Sobre mim", icon: "👤", color: "#bc8063", render: aboutPage },
  google: { title: "Google", icon: "G", color: "#fff", render: googlePage, init: initGoogleSearch },
};

function createAppButton(id) {
  const button = document.createElement("button");
  button.className = "taskbar-app-button";
  button.dataset.taskbar = id;
  button.title = apps[id].title;
  button.setAttribute("aria-label", `Alternar janela ${apps[id].title}`);
  button.innerHTML = `<span>${apps[id].icon}</span>`;
  button.addEventListener("click", () => toggleWindow(id));
  elements.taskbarApps.append(button);
  return button;
}

function focusWindow(win) {
  state.topZ += 1;
  win.style.zIndex = String(state.topZ);

  $$(".taskbar-app-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.taskbar === win.dataset.window);
  });
}

function openWindow(id) {
  const app = apps[id];
  if (!app) return;

  closePanels();

  let win = elements.windowLayer.querySelector(`[data-window="${id}"]`);
  if (!win) {
    win = document.createElement("section");
    win.className = "app-window";
    win.dataset.window = id;
    win.setAttribute("aria-label", `${app.title} - janela`);
    win.innerHTML = `
      <header class="window-titlebar">
        <div class="window-title">
          <span class="window-title-icon" style="background:${app.color};color:${id === "resume" ? "#1673b5" : "#fff"}">${app.icon}</span>
          ${app.title}
        </div>
        <div class="window-controls">
          <button class="window-control" data-window-action="minimize" aria-label="Minimizar">−</button>
          <button class="window-control" data-window-action="maximize" aria-label="Maximizar">□</button>
          <button class="window-control close" data-window-action="close" aria-label="Fechar">×</button>
        </div>
      </header>
      <div class="window-content">${app.render()}</div>
      <footer class="status-bar">
        <span>Pronto</span>
        <span><span>◉ Conectado</span><span>100%</span></span>
      </footer>
    `;

    elements.windowLayer.append(win);
    createAppButton(id);

    win.addEventListener("pointerdown", () => focusWindow(win));
    win.querySelector(".window-titlebar").addEventListener("pointerdown", (event) => beginDrag(event, win));
    win.addEventListener("click", handleWindowClick);
    win.cleanup = app.init?.(win);
  }

  win.classList.remove("minimized");
  focusWindow(win);
}

function toggleWindow(id) {
  const win = elements.windowLayer.querySelector(`[data-window="${id}"]`);
  if (!win) return openWindow(id);

  const isTopWindow = !win.classList.contains("minimized") && Number(win.style.zIndex || 0) === state.topZ;
  if (isTopWindow) {
    win.classList.add("minimized");
    const button = document.querySelector(`[data-taskbar="${id}"]`);
    button?.classList.remove("active");
    button?.classList.add("minimized");
    return;
  }

  win.classList.remove("minimized");
  const button = document.querySelector(`[data-taskbar="${id}"]`);
  button?.classList.remove("minimized");
  focusWindow(win);
}

function closeWindow(win) {
  const id = win.dataset.window;
  win.cleanup?.();
  win.remove();
  document.querySelector(`[data-taskbar="${id}"]`)?.remove();

  const remaining = [...elements.windowLayer.querySelectorAll(".app-window:not(.minimized)")].sort(
    (a, b) => Number(b.style.zIndex) - Number(a.style.zIndex),
  );

  if (remaining[0]) focusWindow(remaining[0]);
}

function handleWindowClick(event) {
  const action = event.target.closest("[data-window-action]")?.dataset.windowAction;
  const openId = event.target.closest("[data-open]")?.dataset.open;
  const customAction = event.target.closest("[data-action]")?.dataset.action;
  const win = event.currentTarget;

  if (action === "close") closeWindow(win);
  if (action === "minimize") {
    win.classList.add("minimized");
    const button = document.querySelector(`[data-taskbar="${win.dataset.window}"]`);
    button?.classList.remove("active");
    button?.classList.add("minimized");
  }
  if (action === "maximize") win.classList.toggle("maximized");
  if (openId) openWindow(openId);
  if (customAction === "print") window.print();
}

function beginDrag(event, win) {
  if (
    event.target.closest(".window-controls") ||
    win.classList.contains("maximized") ||
    event.button !== 0
  ) {
    return;
  }

  const rect = win.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  win.style.left = `${rect.left}px`;
  win.style.top = `${rect.top}px`;
  win.style.transform = "none";

  const move = (moveEvent) => {
    win.style.left = `${Math.max(0, Math.min(innerWidth - 150, moveEvent.clientX - offsetX))}px`;
    win.style.top = `${Math.max(0, Math.min(innerHeight - 100, moveEvent.clientY - offsetY))}px`;
  };

  const stop = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", stop);
  };

  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", stop, { once: true });
  event.preventDefault();
}

function closePanels() {
  elements.startMenu.hidden = true;
  elements.quickPanel.hidden = true;
  elements.calendarPanel.hidden = true;
  elements.contextMenu.hidden = true;
}

function renderStartApps(filter = "") {
  const normalized = filter.trim().toLocaleLowerCase("pt-BR");

  elements.pinnedApps.innerHTML =
    Object.entries(apps)
      .filter(([, app]) => app.title.toLocaleLowerCase("pt-BR").includes(normalized))
      .map(
        ([id, app]) => `
          <button class="pinned-app" data-open="${id}">
            <span class="pinned-app-icon" style="background:${app.color};color:${id === "resume" ? "#1673b5" : "#fff"}">${app.icon}</span>
            <span>${app.title}</span>
          </button>
        `,
      )
      .join("") || '<p class="empty-search">Nenhum aplicativo encontrado.</p>';
}

function showToast(title, message) {
  document.querySelector(".notification-toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "notification-toast";
  toast.innerHTML = `<strong>${escapeHtml(title)}</strong><p>${escapeHtml(message)}</p>`;
  elements.desktop.append(toast);
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.remove(), 3500);
}

function updateClock() {
  const now = new Date();
  elements.clockTime.textContent = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(now);

  elements.clockDate.textContent = new Intl.DateTimeFormat("pt-BR").format(now);
  elements.calendarDate.textContent = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(now);

  renderCalendar(now);
}

function renderCalendar(date) {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  elements.calendarGrid.innerHTML = `${weekdays
    .map((day) => `<span class="weekday">${day}</span>`)
    .join("")}${Array.from({ length: firstDay }, () => "<span></span>").join("")}${Array.from({ length: daysInMonth }, (_, index) => `<span class="${index + 1 === date.getDate() ? "today" : ""}">${index + 1}</span>`).join("")}`;
}

document.addEventListener("click", (event) => {
  const openTarget = event.target.closest("[data-open]");
  if (openTarget) openWindow(openTarget.dataset.open);

  if (!event.target.closest("#start-menu, #start-button, #search-button") && !elements.startMenu.hidden) {
    elements.startMenu.hidden = true;
  }

  if (!event.target.closest("#quick-panel, #quick-button") && !elements.quickPanel.hidden) {
    elements.quickPanel.hidden = true;
  }

  if (!event.target.closest("#calendar-panel, #clock-button, #calendar-toggle") && !elements.calendarPanel.hidden) {
    elements.calendarPanel.hidden = true;
  }
});

elements.startButton.addEventListener("click", () => {
  const wasHidden = elements.startMenu.hidden;
  closePanels();
  elements.startMenu.hidden = !wasHidden;

  if (wasHidden) elements.appSearch.focus();
});

elements.searchButton.addEventListener("click", () => {
  closePanels();
  elements.startMenu.hidden = false;
  elements.appSearch.focus();
});

elements.appSearch.addEventListener("input", (event) => renderStartApps(event.target.value));

elements.quickButton.addEventListener("click", () => {
  const shouldShow = elements.quickPanel.hidden;
  closePanels();
  elements.quickPanel.hidden = !shouldShow;
});

elements.clockButton.addEventListener("click", () => {
  const shouldShow = elements.calendarPanel.hidden;
  closePanels();
  elements.calendarPanel.hidden = !shouldShow;
});

elements.calendarToggle.addEventListener("click", () => {
  elements.quickPanel.hidden = true;
  elements.calendarPanel.hidden = false;
});

$$(".quick-toggle").forEach((button) => {
  button.addEventListener("click", () => button.classList.toggle("active"));
});

elements.brightnessInput.addEventListener("input", (event) => {
  elements.desktop.style.filter = `brightness(${event.target.value / 100})`;
});

elements.powerButton.addEventListener("click", () => {
  closePanels();
  elements.screenOff.hidden = false;
});

elements.wakeButton.addEventListener("click", () => {
  elements.screenOff.hidden = true;
});

elements.notificationButton.addEventListener("click", () => {
  showToast("Notificações", "Você está em dia. Nenhuma notificação nova.");
});

elements.desktop.addEventListener("contextmenu", (event) => {
  if (event.target.closest(".app-window, .taskbar, .start-menu, .quick-panel, .calendar-panel")) {
    return;
  }

  event.preventDefault();
  closePanels();
  elements.contextMenu.hidden = false;
  elements.contextMenu.style.left = `${Math.min(event.clientX, innerWidth - 215)}px`;
  elements.contextMenu.style.top = `${Math.min(event.clientY, innerHeight - 155)}px`;
});

elements.contextMenu.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;

  if (action === "portfolio") openWindow("portfolio");
  if (action === "refresh") showToast("Área de trabalho", "A área de trabalho está atualizada.");
  if (action === "theme") elements.desktop.classList.toggle("light-mode");

  elements.contextMenu.hidden = true;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePanels();
  if (event.key === "Enter" && event.target.matches(".desktop-icon")) {
    openWindow(event.target.dataset.open);
  }

  if (event.altKey && event.key === "F4") {
    const visible = [...elements.windowLayer.querySelectorAll(".app-window:not(.minimized)")].sort(
      (a, b) => Number(b.style.zIndex) - Number(a.style.zIndex),
    )[0];

    if (visible) {
      event.preventDefault();
      closeWindow(visible);
    }
  }
});

renderStartApps();
updateClock();
setInterval(updateClock, 30_000);
