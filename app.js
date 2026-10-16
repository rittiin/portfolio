(function () {
  const S = window.SITE || {};
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- hero ---------- */
  const nm = S.nickname || S.name || "";
  $("greeting").textContent = S.greeting || "สวัสดีครับ";
  $("name").textContent = nm;
  $("role").textContent = [S.role, S.org].filter(Boolean).join(" · ");
  $("intro").textContent = S.intro || "";
  $("footName").textContent = S.name || "";
  $("year").textContent = new Date().getFullYear();
  if (nm) $("brand").textContent = [...nm][0];

  // photo or cartoon
  if (S.photo) {
    $("photo").src = S.photo;
    $("photo").alt = S.name || "";
  } else {
    $("photoWrap").hidden = true;
    $("cartoon").hidden = false;
  }

  // floating skill badges around the portrait
  $("floaters").innerHTML = (S.highlights || []).map((h, i) =>
    `<span class="floater f${i}">${esc(h.title)}</span>`).join("");

  // typewriter
  const words = S.typer && S.typer.length ? S.typer : [S.role || ""];
  const typer = $("typer");
  if (reduce) {
    typer.textContent = words[0];
  } else {
    let w = 0, c = 0, del = false;
    (function tick() {
      const chars = [...words[w]];
      typer.textContent = chars.slice(0, c).join("");
      let wait = del ? 40 : 95;
      if (!del && c === chars.length) { del = true; wait = 1700; }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; wait = 350; }
      c += del ? -1 : 1;
      if (c < 0) c = 0;
      setTimeout(tick, wait);
    })();
  }

  /* ---------- highlights ---------- */
  const ART = {
    epi: `<svg viewBox="0 0 200 90" class="art art-epi" aria-hidden="true">
        <g class="epi-bars">${[10,16,26,40,58,66,52,38,24,14,8].map((h, i) =>
          `<rect x="${12 + i * 16}" y="${80 - h}" width="12" height="${h}" rx="2" style="animation-delay:${i * 90}ms"/>`).join("")}</g>
        <path class="epi-line" d="M6 74 L28 70 L44 62 L60 50 L76 30 L92 18 L108 26 L124 40 L140 54 L156 64 L190 72"/>
      </svg>`,
    web: `<svg viewBox="0 0 200 90" class="art art-web" aria-hidden="true">
        <rect x="8" y="6" width="184" height="80" rx="8" class="win"/>
        <path d="M8 22 H192" class="win-line"/>
        <circle cx="20" cy="14" r="3" fill="#E98A6B"/><circle cx="31" cy="14" r="3" fill="#E8B54A"/><circle cx="42" cy="14" r="3" fill="#2F8F83"/>
        <rect x="18" y="32" width="54" height="44" rx="5" class="blk"/>
        <rect x="82" y="32" width="0" height="7" rx="3" class="code c1"/>
        <rect x="82" y="46" width="0" height="7" rx="3" class="code c2"/>
        <rect x="82" y="60" width="0" height="7" rx="3" class="code c3"/>
        <path d="M26 66 L38 54 L48 60 L64 42" class="mini"/>
      </svg>`,
    ai: `<svg viewBox="0 0 200 90" class="art art-ai" aria-hidden="true">
        <g class="links">
          <path d="M30 20 L80 45 L30 70 M80 45 L130 20 M80 45 L130 70 M130 20 L175 45 L130 70 M30 20 L30 70"/>
        </g>
        ${[[30,20],[30,70],[80,45],[130,20],[130,70],[175,45]].map(([x, y], i) =>
          `<circle cx="${x}" cy="${y}" r="7" class="node" style="animation-delay:${i * 250}ms"/>`).join("")}
      </svg>`,
  };
  $("highlights").innerHTML = (S.highlights || []).map((h) => `
    <article class="hl-card reveal ${h.featured ? "featured" : "compact"} hl-${esc(h.art)}">
      <div class="hl-art">${ART[h.art] || ART.ai}</div>
      <div class="hl-body">
        <h3>${esc(h.title)}</h3>
        <p class="hl-sub">${esc(h.subtitle)}</p>
        <ul class="hl-points">${(h.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        <div class="tags">${(h.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div>
    </article>`).join("");

  /* ---------- works ---------- */
  const linkLabel = (w) =>
    w.youtube ? "ดูคลิป" :
    /docs\.google\.com/.test(w.link) ? "เปิดเอกสาร" :
    w.category === "app" ? "เปิดใช้งาน" :
    w.category === "paper" ? "อ่านบทความ" : "ดูเพิ่มเติม";
  const cats = S.categories || { all: "ทั้งหมด" };
  const works = S.works || [];
  const used = new Set(works.map((w) => w.category));
  $("filters").innerHTML = Object.entries(cats)
    .filter(([k]) => k === "all" || used.has(k))
    .map(([k, v], i) => `<button class="chip-btn${i === 0 ? " active" : ""}" data-cat="${esc(k)}" role="tab">${esc(v)}</button>`)
    .join("");

  $("work-grid").innerHTML = works.map((w) => `
    <article class="card work reveal${w.youtube ? " has-thumb" : ""}" data-cat="${esc(w.category)}">
      ${w.youtube ? `<a class="thumb" href="${esc(w.link || "https://youtu.be/" + w.youtube)}" target="_blank" rel="noopener" aria-label="ดูคลิป ${esc(w.title)}"><img src="https://i.ytimg.com/vi/${esc(w.youtube)}/hqdefault.jpg" alt="" loading="lazy"><span class="play"></span></a>` : ""}
      <div class="work-top"><span class="cat cat-${esc(w.category)}">${esc(cats[w.category] || "")}</span>${w.year ? `<span class="year">${esc(w.year)}</span>` : ""}</div>
      ${w.badge ? `<span class="badge">★ ${esc(w.badge)}</span>` : ""}
      <h3>${esc(w.title)}</h3>
      <p>${esc(w.text)}</p>
      ${w.link ? `<a class="more" href="${esc(w.link)}" target="_blank" rel="noopener">${esc(w.linkLabel || linkLabel(w))} →</a>` : ""}
      <div class="tags">${(w.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    </article>`).join("");

  $("filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".chip-btn");
    if (!btn) return;
    document.querySelectorAll(".chip-btn").forEach((b) => b.classList.toggle("active", b === btn));
    const cat = btn.dataset.cat;
    let n = 0;
    document.querySelectorAll(".work").forEach((el) => {
      const match = cat === "all" || el.dataset.cat === cat;
      el.classList.remove("show");
      el.classList.toggle("hide", !match);
      if (match) {
        el.classList.add("in");
        el.style.animationDelay = (n++ % 6) * 50 + "ms";
        void el.offsetWidth;
        el.classList.add("show");
      }
    });
  });

  /* ---------- about ---------- */
  $("about-text").innerHTML = (S.about || []).map((p) => `<p>${esc(p)}</p>`).join("");
  const tl = (arr) => (arr || []).map((x) => `
    <li class="${x.now ? "now" : ""}"><strong>${esc(x.title)}</strong>${x.now ? ' <span class="now-tag">ปัจจุบัน</span>' : ""}<br><span class="muted">${esc(x.place)}</span></li>`).join("");
  $("experience").innerHTML = tl(S.experience);
  $("education").innerHTML = tl(S.education);

  /* ---------- teaching / tools / training / links ---------- */
  $("teaching-list").innerHTML = (S.teaching || []).map((t, i) => `
    <div class="teach reveal"><span class="num">${String(i + 1).padStart(2, "0")}</span>${esc(t)}</div>`).join("");
  $("tools").innerHTML = (S.tools || []).map((t) => `<span>${esc(t)}</span>`).join("");
  $("training").innerHTML = (S.training || []).map((t) => `<li>${esc(t)}</li>`).join("");
  const links = (S.links || []).filter((l) => l.url);
  $("links").innerHTML = links.length
    ? links.map((l) => `<a class="btn ghost" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")
    : '<p class="muted" style="margin:0">ช่องทางติดต่อจะเพิ่มเติมเร็ว ๆ นี้</p>';

  /* ---------- reveal on scroll ---------- */
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i % 4, 3) * 80 + "ms";
      io.observe(el);
    });
  } else {
    items.forEach((el) => el.classList.add("in"));
  }

  /* ---------- theme toggle ---------- */
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
  } catch (e) {}
  $("themeBtn").addEventListener("click", () => {
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });
})();
