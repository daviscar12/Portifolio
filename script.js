const profile = {
  name: "Davi Scartezini",
  role: "Desenvolvedor em formação",
  location: "Brasil",
  email: "seu.email@exemplo.com",
  linkedin: "https://www.linkedin.com/in/davi-henrique-scartezini-851222356/",
  github: "https://github.com/daviscar12",
  summary:
    "Gosto de transformar ideias em experiências digitais simples, úteis e bem construídas. Este espaço reúne meus projetos, minha trajetória e formas de contato.",
  about:
    "Sou uma pessoa curiosa, dedicada a aprender e construir soluções com tecnologia. Estou sempre buscando novos desafios para evoluir e colaborar em projetos que tenham propósito.",
  skills: ["HTML", "CSS", "JavaScript", "Git", "Aprendizado contínuo"],
  projects: [
    {
      name: "Projeto em destaque",
      description:
        "Adicione aqui uma breve descrição de um projeto seu e o problema que ele resolve.",
      tags: ["JavaScript", "Web"],
      url: "https://github.com/seu-usuario",
    },
    {
      name: "Mais um projeto",
      description:
        "Conte em poucas palavras o que você construiu e qual foi sua contribuição.",
      tags: ["HTML", "CSS"],
      url: "https://github.com/seu-usuario",
    },
  ],
};

const apps = {
  portfolio: {
    title: "Meu portfólio",
    icon: "✦",
    color: "#2875bf",
    render: portfolioPage,
  },
  resume: {
    title: "Currículo",
    icon: "CV",
    color: "#f5fbff",
    render: resumePage,
  },
  linkedin: {
    title: "LinkedIn",
    icon: "in",
    color: "#0a75b9",
    render: linkedinPage,
  },
  github: { title: "GitHub", icon: "⌘", color: "#26323c", render: githubPage },
  about: {
    title: "Sobre mim",
    icon: "👤",
    color: "#bc8063",
    render: aboutPage,
  },
};

const desktop = document.querySelector("#desktop");
const windowLayer = document.querySelector("#window-layer");
const taskbarApps = document.querySelector("#taskbar-apps");
const startMenu = document.querySelector("#start-menu");
const pinnedApps = document.querySelector("#pinned-apps");
const quickPanel = document.querySelector("#quick-panel");
const calendarPanel = document.querySelector("#calendar-panel");
const contextMenu = document.querySelector("#context-menu");
let topZ = 20;
let toastTimer;

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
}

function portfolioPage() {
  const projects = profile.projects
    .map(
      (project) => `
    <article class="project-item">
      <div class="project-topline"><h3>${escapeHtml(project.name)}</h3><a class="project-link" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer">Ver projeto ↗</a></div>
      <p>${escapeHtml(project.description)}</p>
      <div class="project-tags">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    </article>`,
    )
    .join("");
  return `<div class="app-page">
    <section class="hero-profile"><div><p class="page-eyebrow">Portfólio pessoal</p><h1>${escapeHtml(profile.name)}</h1><p>${escapeHtml(profile.role)} · ${escapeHtml(profile.location)}<br>${escapeHtml(profile.summary)}</p>
      <div class="profile-actions"><button class="primary-link" data-open="resume">▤ Ver currículo</button><a class="secondary-link" href="${escapeHtml(profile.linkedin)}" target="_blank" rel="noreferrer">in LinkedIn</a><a class="secondary-link" href="${escapeHtml(profile.github)}" target="_blank" rel="noreferrer">⌘ GitHub</a></div></div><div class="avatar avatar-large">DS</div></section>
    <div class="section-heading"><h2>Projetos selecionados</h2><span>${profile.projects.length} projetos</span></div>
    <div class="project-list">${projects}</div>
  </div>`;
}

function resumePage() {
  return `<div class="app-page resume-page">
    <div class="resume-header"><div><p class="page-eyebrow">Currículo profissional</p><h1>${escapeHtml(profile.name)}</h1><p>${escapeHtml(profile.role)} · ${escapeHtml(profile.location)}</p></div><button class="primary-link" data-action="print">↓ Salvar como PDF</button></div>
    <div class="resume-contact"><a href="mailto:${escapeHtml(profile.email)}">✉ ${escapeHtml(profile.email)}</a><a href="${escapeHtml(profile.linkedin)}" target="_blank" rel="noreferrer">in LinkedIn</a><a href="${escapeHtml(profile.github)}" target="_blank" rel="noreferrer">⌘ GitHub</a></div>
    <section class="resume-section"><h2>Perfil</h2><div><p>${escapeHtml(profile.summary)}</p></div></section>
    <section class="resume-section"><h2>Experiência</h2><div><h3>Adicione sua experiência profissional</h3><span class="resume-meta">Empresa · Período</span><p>Descreva aqui suas responsabilidades, resultados e principais aprendizados.</p></div></section>
    <section class="resume-section"><h2>Formação</h2><div><h3>Adicione sua formação</h3><span class="resume-meta">Instituição · Período</span><p>Curso, certificações ou outras formações relevantes.</p></div></section>
    <section class="resume-section"><h2>Competências</h2><div class="skill-list">${profile.skills.map((skill) => `<span>${escapeHtml(skill)}</span>`).join("")}</div></section>
  </div>`;
}

function socialPage(kind) {
  const isLinkedIn = kind === "linkedin";
  const service = isLinkedIn ? "LinkedIn" : "GitHub";
  const link = isLinkedIn ? profile.linkedin : profile.github;
  const text = isLinkedIn
    ? "Conecte-se comigo e acompanhe minha trajetória profissional."
    : "Explore meus repositórios, projetos e experimentos com código.";
  return `<div class="app-page"><p class="page-eyebrow">Perfil profissional</p><section class="social-banner"><div class="social-logo ${isLinkedIn ? "" : "github"}">${isLinkedIn ? "in" : "⌘"}</div><div><h1>${service}</h1><p>${escapeHtml(profile.name)} · ${escapeHtml(profile.role)}</p></div></section>
    <p>${text}</p><div class="social-details"><div class="detail-row"><small>Nome</small><strong>${escapeHtml(profile.name)}</strong></div><div class="detail-row"><small>Localização</small><strong>${escapeHtml(profile.location)}</strong></div><div class="detail-row"><small>Área</small><strong>${escapeHtml(profile.role)}</strong></div><div class="detail-row"><small>Contato</small><strong>${escapeHtml(profile.email)}</strong></div></div>
    <a class="primary-link" href="${escapeHtml(link)}" target="_blank" rel="noreferrer">Abrir perfil no ${service} ↗</a></div>`;
}

function linkedinPage() {
  return socialPage("linkedin");
}
function githubPage() {
  return socialPage("github");
}

function aboutPage() {
  return `<div class="app-page"><p class="page-eyebrow">Um pouco sobre mim</p><h1>Olá, eu sou ${escapeHtml(profile.name)}.</h1><div class="about-layout"><div><p>${escapeHtml(profile.about)}</p><p>${escapeHtml(profile.summary)}</p><div class="profile-actions"><button class="primary-link" data-open="resume">▤ Conheça minha trajetória</button><a class="secondary-link" href="mailto:${escapeHtml(profile.email)}">✉ Entre em contato</a></div></div><aside class="about-note">“Acredito que bons projetos nascem da curiosidade, da colaboração e da vontade de melhorar um pouco a cada versão.”</aside></div><div class="section-heading"><h2>Ferramentas que estou usando</h2></div><div class="skill-list">${profile.skills.map((skill) => `<span>${escapeHtml(skill)}</span>`).join("")}</div></div>`;
}

function createAppButton(id) {
  const button = document.createElement("button");
  button.className = "taskbar-app-button";
  button.dataset.taskbar = id;
  button.title = apps[id].title;
  button.setAttribute("aria-label", `Alternar janela ${apps[id].title}`);
  button.innerHTML = `<span>${apps[id].icon}</span>`;
  button.addEventListener("click", () => toggleWindow(id));
  taskbarApps.append(button);
  return button;
}

function openWindow(id) {
  const app = apps[id];
  if (!app) return;
  closePanels();
  let win = windowLayer.querySelector(`[data-window="${id}"]`);
  if (!win) {
    win = document.createElement("section");
    win.className = "app-window";
    win.dataset.window = id;
    win.setAttribute("aria-label", `${app.title} - janela`);
    win.innerHTML = `<header class="window-titlebar"><div class="window-title"><span class="window-title-icon" style="background:${app.color};color:${id === "resume" ? "#1673b5" : "#fff"}">${app.icon}</span>${app.title}</div><div class="window-controls"><button class="window-control" data-window-action="minimize" aria-label="Minimizar">−</button><button class="window-control" data-window-action="maximize" aria-label="Maximizar">□</button><button class="window-control close" data-window-action="close" aria-label="Fechar">×</button></div></header><div class="window-content">${app.render()}</div><footer class="status-bar"><span>Pronto</span><span><span>◉ Conectado</span><span>100%</span></span></footer>`;
    windowLayer.append(win);
    createAppButton(id);
    win.addEventListener("pointerdown", () => focusWindow(win));
    win
      .querySelector(".window-titlebar")
      .addEventListener("pointerdown", (event) => beginDrag(event, win));
    win.addEventListener("click", handleWindowClick);
  }
  win.classList.remove("minimized");
  focusWindow(win);
}

function focusWindow(win) {
  topZ += 1;
  win.style.zIndex = topZ;
  document
    .querySelectorAll(".taskbar-app-button")
    .forEach((button) =>
      button.classList.toggle(
        "active",
        button.dataset.taskbar === win.dataset.window,
      ),
    );
}

function toggleWindow(id) {
  const win = windowLayer.querySelector(`[data-window="${id}"]`);
  if (!win) return openWindow(id);
  if (
    !win.classList.contains("minimized") &&
    Number(win.style.zIndex || 0) === topZ
  ) {
    win.classList.add("minimized");
    document
      .querySelector(`[data-taskbar="${id}"]`)
      ?.classList.remove("active");
    document
      .querySelector(`[data-taskbar="${id}"]`)
      ?.classList.add("minimized");
    return;
  }
  win.classList.remove("minimized");
  document
    .querySelector(`[data-taskbar="${id}"]`)
    ?.classList.remove("minimized");
  focusWindow(win);
}

function closeWindow(win) {
  const id = win.dataset.window;
  win.remove();
  document.querySelector(`[data-taskbar="${id}"]`)?.remove();
  const remaining = [
    ...windowLayer.querySelectorAll(".app-window:not(.minimized)"),
  ].sort((a, b) => Number(b.style.zIndex) - Number(a.style.zIndex));
  if (remaining[0]) focusWindow(remaining[0]);
}

function handleWindowClick(event) {
  const action = event.target.closest("[data-window-action]")?.dataset
    .windowAction;
  const openId = event.target.closest("[data-open]")?.dataset.open;
  const customAction = event.target.closest("[data-action]")?.dataset.action;
  const win = event.currentTarget;
  if (action === "close") closeWindow(win);
  if (action === "minimize") {
    win.classList.add("minimized");
    const button = document.querySelector(
      `[data-taskbar="${win.dataset.window}"]`,
    );
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
  )
    return;
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
  startMenu.hidden = true;
  quickPanel.hidden = true;
  calendarPanel.hidden = true;
  contextMenu.hidden = true;
}

function renderStartApps(filter = "") {
  const normalized = filter.trim().toLocaleLowerCase("pt-BR");
  pinnedApps.innerHTML =
    Object.entries(apps)
      .filter(([, app]) =>
        app.title.toLocaleLowerCase("pt-BR").includes(normalized),
      )
      .map(
        ([id, app]) =>
          `<button class="pinned-app" data-open="${id}"><span class="pinned-app-icon" style="background:${app.color};color:${id === "resume" ? "#1673b5" : "#fff"}">${app.icon}</span><span>${app.title}</span></button>`,
      )
      .join("") || '<p class="empty-search">Nenhum aplicativo encontrado.</p>';
}

function showToast(title, message) {
  document.querySelector(".notification-toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "notification-toast";
  toast.innerHTML = `<strong>${escapeHtml(title)}</strong><p>${escapeHtml(message)}</p>`;
  desktop.append(toast);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.remove(), 3500);
}

function updateClock() {
  const now = new Date();
  document.querySelector("#clock-time").textContent = new Intl.DateTimeFormat(
    "pt-BR",
    { hour: "2-digit", minute: "2-digit" },
  ).format(now);
  document.querySelector("#clock-date").textContent = new Intl.DateTimeFormat(
    "pt-BR",
  ).format(now);
  document.querySelector("#calendar-date").textContent =
    new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(now);
  renderCalendar(now);
}

function renderCalendar(date) {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();
  document.querySelector("#calendar-grid").innerHTML =
    `${weekdays.map((day) => `<span class="weekday">${day}</span>`).join("")}${Array.from({ length: firstDay }, () => "<span></span>").join("")}${Array.from({ length: daysInMonth }, (_, index) => `<span class="${index + 1 === date.getDate() ? "today" : ""}">${index + 1}</span>`).join("")}`;
}

document.addEventListener("click", (event) => {
  const openTarget = event.target.closest("[data-open]");
  if (openTarget) openWindow(openTarget.dataset.open);
  if (
    !event.target.closest("#start-menu, #start-button, #search-button") &&
    !startMenu.hidden
  )
    startMenu.hidden = true;
  if (
    !event.target.closest("#quick-panel, #quick-button") &&
    !quickPanel.hidden
  )
    quickPanel.hidden = true;
  if (
    !event.target.closest("#calendar-panel, #clock-button, #calendar-toggle") &&
    !calendarPanel.hidden
  )
    calendarPanel.hidden = true;
});

document.querySelector("#start-button").addEventListener("click", () => {
  const wasHidden = startMenu.hidden;
  closePanels();
  startMenu.hidden = !wasHidden;
  if (wasHidden) document.querySelector("#app-search").focus();
});
document.querySelector("#search-button").addEventListener("click", () => {
  closePanels();
  startMenu.hidden = false;
  document.querySelector("#app-search").focus();
});
document
  .querySelector("#app-search")
  .addEventListener("input", (event) => renderStartApps(event.target.value));
document.querySelector("#quick-button").addEventListener("click", () => {
  const show = quickPanel.hidden;
  closePanels();
  quickPanel.hidden = !show;
});
document.querySelector("#clock-button").addEventListener("click", () => {
  const show = calendarPanel.hidden;
  closePanels();
  calendarPanel.hidden = !show;
});
document.querySelector("#calendar-toggle").addEventListener("click", () => {
  quickPanel.hidden = true;
  calendarPanel.hidden = false;
});
document
  .querySelectorAll(".quick-toggle")
  .forEach((button) =>
    button.addEventListener("click", () => button.classList.toggle("active")),
  );
document
  .querySelector(".brightness-control input")
  .addEventListener("input", (event) => {
    desktop.style.filter = `brightness(${event.target.value / 100})`;
  });
document.querySelector("#power-button").addEventListener("click", () => {
  closePanels();
  document.querySelector("#screen-off").hidden = false;
});
document.querySelector("#wake-button").addEventListener("click", () => {
  document.querySelector("#screen-off").hidden = true;
});
document
  .querySelector(".notification-button")
  .addEventListener("click", () =>
    showToast("Notificações", "Você está em dia. Nenhuma notificação nova."),
  );

desktop.addEventListener("contextmenu", (event) => {
  if (
    event.target.closest(
      ".app-window, .taskbar, .start-menu, .quick-panel, .calendar-panel",
    )
  )
    return;
  event.preventDefault();
  closePanels();
  contextMenu.hidden = false;
  contextMenu.style.left = `${Math.min(event.clientX, innerWidth - 215)}px`;
  contextMenu.style.top = `${Math.min(event.clientY, innerHeight - 155)}px`;
});
contextMenu.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "portfolio") openWindow("portfolio");
  if (action === "refresh")
    showToast("Área de trabalho", "A área de trabalho está atualizada.");
  if (action === "theme") desktop.classList.toggle("light-mode");
  contextMenu.hidden = true;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePanels();
  if (event.key === "Enter" && event.target.matches(".desktop-icon"))
    openWindow(event.target.dataset.open);
  if (event.altKey && event.key === "F4") {
    const visible = [
      ...windowLayer.querySelectorAll(".app-window:not(.minimized)"),
    ].sort((a, b) => Number(b.style.zIndex) - Number(a.style.zIndex))[0];
    if (visible) {
      event.preventDefault();
      closeWindow(visible);
    }
  }
});

renderStartApps();
updateClock();
setInterval(updateClock, 30_000);
