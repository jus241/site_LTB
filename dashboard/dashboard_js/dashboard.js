// Menu réutilisable sur toutes les pages du Dashboard.
const menuItems = [
  { section: "PRINCIPAL" },
  { label: "Accueil", href: "accueil.html", icon: "bi-house-door" },
  { label: "Tableau de bord", href: "index.html", icon: "bi-speedometer2" },
  { section: "GESTION DU CONTENU" },
  { label: "Filières", href: "filieres.html", icon: "bi-book" },
  { label: "Actualités", href: "actualites.html", icon: "bi-newspaper" },
  { label: "Événements", href: "evenements.html", icon: "bi-calendar-event" },
  { label: "Partenaires", href: "partenaires.html", icon: "bi-handshake" },
  { section: "GESTION DES UTILISATEURS" },
  { label: "Élèves", href: "eleves.html", icon: "bi-mortarboard" },
  { label: "Enseignants", href: "enseignants.html", icon: "bi-person-video3" },
  {
    label: "Administrateurs",
    href: "administrateurs.html",
    icon: "bi-shield-lock",
  },
  { section: "COMMUNICATION" },
  {
    label: "Messages / Contacts",
    href: "messages.html",
    icon: "bi-envelope",
    badge: "3",
  },
  { label: "Notifications", href: "notifications.html", icon: "bi-bell" },
  { section: "CONFIGURATION" },
  { label: "Paramètres", href: "parametres.html", icon: "bi-gear" },
];

const sidebarMount = document.getElementById("sidebarMount");
const currentFile = window.location.pathname.split("/").pop() || "index.html";

const sidebarHTML = `
<aside class="sidebar" id="sidebar">
    <div class="sidebar-header">
        <div class="brand-logo"><i class="bi bi-mortarboard-fill"></i></div>
        <div class="brand-name">PROMOTION <strong>TICE</strong></div>
    </div>

    <nav class="sidebar-nav" aria-label="Navigation principale">
        ${menuItems
          .map((item) => {
            if (item.section) {
              return `<p class="menu-title">${item.section}</p>`;
            }
            const active = item.href === currentFile ? "active" : "";
            const badge = item.badge
              ? `<span class="notification-count">${item.badge}</span>`
              : "";
            return `
                <a href="${item.href}" class="nav-link ${active}">
                    <i class="bi ${item.icon}"></i>
                    <span class="nav-label">${item.label}</span>
                    ${badge}
                </a>`;
          })
          .join("")}
    </nav>

    <div class="sidebar-footer">
        <div class="user-profile">
            <div class="user-avatar"><i class="bi bi-person-fill"></i></div>
            <div class="user-info">
                <strong>Administrateur</strong>
                <small>Super administrateur</small>
            </div>
            <button class="profile-menu" type="button" aria-label="Options du profil">
                <i class="bi bi-three-dots-vertical"></i>
            </button>
        </div>
        <a href="connexion.html" class="logout-link">
            <i class="bi bi-box-arrow-left"></i>
            <span>Déconnexion</span>
        </a>
    </div>
</aside>
`;

sidebarMount.innerHTML = sidebarHTML;

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const overlay = document.getElementById("sidebarOverlay");

function closeSidebar() {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
}

function openSidebar() {
  sidebar.classList.add("show");
  overlay.classList.add("show");
  menuToggle.setAttribute("aria-label", "Fermer le menu");
}

menuToggle.addEventListener("click", () => {
  if (sidebar.classList.contains("show")) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

overlay.addEventListener("click", closeSidebar);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSidebar();
});

sidebar.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeSidebar);
});
