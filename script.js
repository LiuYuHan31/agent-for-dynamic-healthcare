const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function closeMobileNav() {
  document.body.classList.remove("nav-open");
  siteNav?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: "-20% 0px -62% 0px",
    threshold: [0.08, 0.2, 0.45, 0.7],
  }
);

sections.forEach((section) => observer.observe(section));

const peopleData = window.workshopPeople || { speakers: [], organizers: [] };
const fallbackImage = "assets/images/avatar-placeholder.svg";

function makeExternalLink(href, text) {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = text;
  if (!href.startsWith("mailto:")) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  return link;
}

function createPersonCard(person) {
  const article = document.createElement("article");
  article.className = "person-card";

  const top = document.createElement("div");
  top.className = "person-top";

  const image = document.createElement("img");
  image.className = "person-photo";
  image.src = person.image || fallbackImage;
  image.alt = person.imageAlt || `Placeholder avatar for ${person.name}`;
  image.loading = "lazy";
  image.addEventListener("error", () => {
    image.src = fallbackImage;
    image.alt = `Placeholder avatar for ${person.name}`;
  });

  const headingWrap = document.createElement("div");
  const name = document.createElement("h3");
  name.textContent = person.name;
  const role = document.createElement("p");
  role.className = "person-role";
  role.textContent = person.role;
  const affiliation = document.createElement("p");
  affiliation.className = "person-affiliation";
  affiliation.textContent = person.affiliation;
  headingWrap.append(name, role, affiliation);
  top.append(image, headingWrap);

  const body = document.createElement("div");
  body.className = "person-body";
  const bio = document.createElement("p");
  bio.className = "person-bio";
  bio.textContent = person.bio;

  const links = document.createElement("div");
  links.className = "person-links";
  if (person.profileUrl) links.append(makeExternalLink(person.profileUrl, person.profileLabel || "Profile"));
  if (person.email) links.append(makeExternalLink(`mailto:${person.email}`, "Email"));

  body.append(bio, links);
  article.append(top, body);
  return article;
}

document.querySelectorAll("[data-people]").forEach((container) => {
  const key = container.getAttribute("data-people");
  const people = peopleData[key] || [];
  const fragment = document.createDocumentFragment();
  people.forEach((person) => fragment.append(createPersonCard(person)));
  container.replaceChildren(fragment);
});

let ticking = false;

function updateHeroParallax() {
  const shift = Math.min(window.scrollY * 0.12, 72);
  document.documentElement.style.setProperty("--hero-shift", `${shift}px`);
  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!ticking) {
      window.requestAnimationFrame(updateHeroParallax);
      ticking = true;
    }
  },
  { passive: true }
);
