let currentLang = "ja";

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

function render(lang){
  currentLang = lang;
  const c = SITE_CONTENT[lang];

  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n.split(".");
    let value = c;
    key.forEach(k => value = value?.[k]);
    if(value != null) el.innerHTML = value;
  });

  $("#career-list").innerHTML = c.career.items.map(([date,title]) =>
    `<div class="timeline-item"><span class="date">${date}</span><span>${title}</span></div>`
  ).join("");

  $("#skills-grid").innerHTML = c.skills.items.map(([title,body]) =>
    `<article class="skill-card"><h3>${title}</h3><p>${body}</p></article>`
  ).join("");

  const f = c.projects.featured;
  const featured = `<article class="project-item featured"><div class="project-meta">${f.meta}</div><div><h3>${f.title}</h3><p class="feat-sub">${f.sub}</p><p>${f.lines.join("<br>")}</p><ul class="spec-list">${f.specs.map(x=>`<li>${x}</li>`).join("")}</ul><div class="feat-links">${f.links.map(([l,u])=>`<a class="text-link" href="${u}" target="_blank" rel="noopener noreferrer">${l} <b>↗</b></a>`).join("")}</div></div></article>`;
  $("#project-list").innerHTML = featured + c.projects.items.map(([meta,title,body,link],i) =>
    `<article class="project-item"><div class="project-meta">${String(i+1).padStart(2,"0")} / ${meta}</div><div><h3>${title}</h3><p>${body}</p>${link?`<a class="text-link" href="${link[1]}" target="_blank" rel="noopener noreferrer">${link[0]}</a>`:""}</div></article>`
  ).join("");

  $("#research-list").innerHTML = c.research.items.map(([title,body]) =>
    `<article class="research-item"><h3>${title}</h3><p>${body}</p></article>`
  ).join("");

  $$(".lang-btn").forEach(btn=>{
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active",active);
    btn.setAttribute("aria-pressed",String(active));
  });

  localStorage.setItem("ryu-lang",lang);
}

function setupMenu(){
  const menu = $(".menu-button");
  const nav = $(".nav-links");
  menu.addEventListener("click",()=>{
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded",String(open));
  });
  $$(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
}

document.addEventListener("DOMContentLoaded",()=>{
  $("#year").textContent = new Date().getFullYear();
  const saved = localStorage.getItem("ryu-lang");
  render(saved === "en" ? "en" : "ja");
  $$(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>render(btn.dataset.lang)));
  setupMenu();
});
