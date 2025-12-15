// Datos de Skills/Stacks
const skillsCategories = [
  {
    title: "Sistemas Operativos",
    description: "Experiencia completa en múltiples plataformas",
    skills: ["Windows XP-11", "Linux Server", "macOS/Hackintosh"],
  },
  {
    title: "Administración de Sistemas",
    description: "Gestión integral de infraestructura IT para PYMES",
    skills: ["Active Directory", "Windows Server", "SCCM", "NAS", "NAGIOS", "CACTI", "PRTG"],
  },
  {
    title: "Networking",
    description: "Diseño y mantenimiento de redes corporativas",
    skills: ["Cisco", "Firewalls", "VPN", "VLANs", "Cableado Estructurado", "pfSense"],
  },
  {
    title: "Cloud & Virtualización",
    description: "Entornos cloud, hosting y contenedores",
    skills: ["Docker", "VPS", "Hosting", "Backups", "Migraciones", "SSL"],
  },
  {
    title: "Software & Herramientas",
    description: "Plataformas de gestión y comunicación",
    skills: ["Moodle", "Chamilo", "BigBlueButton", "ServiceNow", "Jira", "Freshdesk"],
  },
  {
    title: "Hardware & Soporte",
    description: "Montaje, mantenimiento y solución de incidencias",
    skills: ["Ensamblaje", "Imagenología Dental", "Servidores", "Certificados Digitales", "DNI Electrónico"],
  },
]

// Datos de Proyectos
const projects = [
  {
    title: "Freelance",
    period: "2014 – Actualidad",
    description:
      "Gestión integral de infraestructura IT para clientes particulares y PYMES. Networking avanzado, multi-OS, VPS/Hosting/Docker. Mantenimiento de aulas virtuales, CRM, CMS y plataformas de videoconferencia. Creación de scripts, migraciones de sistemas y soporte técnico especializado.",
    skills: ["Infraestructura IT", "Networking", "Docker", "Scripting", "Soporte Técnico"],
  },
  {
    title: "SegurCaixa S.A.",
    period: "2022–2025 | Administrador L2/L3",
    description:
      "Soporte remoto y presencial a clínicas Adeslas. Administración avanzada de Active Directory y GPO, despliegues con SCCM. Integración con sistemas HIS y soporte de red (VLAN, switches). Mantenimiento preventivo y correctivo de infraestructura crítica.",
    skills: ["Active Directory", "SCCM", "VLAN", "Sistemas HIS", "Soporte Remoto"],
  },
  {
    title: "M2 Sistemas SL / Vithas Sanidad",
    period: "2022 | Administrador L2",
    description:
      "Administración Windows y Linux Server, Active Directory, impresoras y escáneres. Configuración de redes, VPNs y teletrabajo. Soporte a empresas, diseño web y desarrollo básico. Gestión de entornos corporativos multi-sitio.",
    skills: ["Windows Server", "Linux", "VPN", "Redes Corporativas", "Teletrabajo"],
  },
]

// Datos de Contacto
const contactData = [
  {
    title: "Email",
    icon: "✉️",
    link: "mailto:sergioesquinass@gmail.com",
    text: "sergioesquinass@gmail.com",
  },
  {
    title: "WhatsApp",
    icon: "💬",
    link: "https://wa.me/34643624744",
    text: "+34 643 624 744",
    target: "_blank",
  },
  {
    title: "LinkedIn",
    icon: "💼",
    link: "https://www.linkedin.com/in/sergio-e-651408219/",
    text: "Mi Perfil",
    target: "_blank",
  },
  {
    title: "GitHub",
    icon: "💻",
    link: "https://github.com/elunicoantivirus",
    text: "Mi Perfil",
    target: "_blank",
  },
  {
    title: "Curriculum Vitae",
    icon: "📄",
    link: "https://drive.google.com/drive/folders/19wtAQxHcFaaC5SFYytOfTj39hsLB9P_T",
    text: "CV",
    target: "_blank",
  },
]

// Generar Skills
function renderSkills() {
  const skillsGrid = document.getElementById("skillsGrid")
  skillsGrid.innerHTML = skillsCategories
    .map(
      (category) => `
    <div class="skill-card">
      <h4>${category.title}</h4>
      <p>${category.description}</p>
      <div class="skill-tags">
        ${category.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
      </div>
    </div>
  `,
    )
    .join("")
}

// Generar Proyectos
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid")
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
    <div class="project-card">
      <h4>${project.title}</h4>
      <p class="period">${project.period}</p>
      <p>${project.description}</p>
      <div class="project-tags">
        ${project.skills.map((skill) => `<span class="project-tag">${skill}</span>`).join("")}
      </div>
    </div>
  `,
    )
    .join("")
}

// Generar Contacto
function renderContact() {
  const contactGrid = document.getElementById("contactGrid")
  contactGrid.innerHTML = contactData
    .map(
      (contact) => `
    <a href="${contact.link}" ${contact.target ? `target="${contact.target}" rel="noopener noreferrer"` : ""} style="text-decoration: none;">
      <div class="contact-card">
        <p class="contact-icon">${contact.icon}</p>
        <h4>${contact.title}</h4>
        <p>${contact.text}</p>
      </div>
    </a>
  `,
    )
    .join("")
}

// Menu móvil
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const navLinks = document.getElementById("navLinks")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex"
      navLinks.style.flexDirection = "column"
      navLinks.style.gap = "1rem"
      navLinks.style.marginTop = "1rem"
      navLinks.style.paddingTop = "1rem"
      navLinks.style.borderTop = "1px solid #2a2a2a"
    })

    // Cerrar menú al hacer click en un link
    const links = navLinks.querySelectorAll("a")
    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.style.display = "none"
      })
    })
  }
}

// Responsive
function handleResponsive() {
  const navLinks = document.getElementById("navLinks")
  if (window.innerWidth > 768) {
    navLinks.style.display = "flex"
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  renderSkills()
  renderProjects()
  renderContact()
  initMobileMenu()
  handleResponsive()
  window.addEventListener("resize", handleResponsive)
})
