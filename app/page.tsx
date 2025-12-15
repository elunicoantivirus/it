"use client"

import { useState, useEffect } from "react"

export default function BackupOSPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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

  return (
    <div style={{ minWidth: 0, overflowX: "hidden" }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#0f0f0f",
          borderBottom: "2px solid #00ff41",
          padding: isMobile ? "1rem 20px" : "1.5rem 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: isMobile ? "1.5rem" : "2rem",
              fontWeight: 900,
              color: "#00ff41",
              letterSpacing: "-0.02em",
            }}
          >
            Sergio Sánchez
          </div>

          {/* Desktop Nav */}
          {!isMobile && (
            <nav
              style={{ display: "flex", gap: "2rem", alignItems: "center", padding: isMobile ? "1rem" : "1.5rem 3rem" }}
            >
              <a href="#expertise" style={{ color: "#b0b0b0", textDecoration: "none", transition: "color 0.3s" }}>
                Sobre mí
              </a>
              <a href="#expertise" style={{ color: "#b0b0b0", textDecoration: "none", transition: "color 0.3s" }}>
                Stacks/Skills
              </a>
              <a href="#projects" style={{ color: "#b0b0b0", textDecoration: "none", transition: "color 0.3s" }}>
                Proyectos
              </a>
              <a href="#contact" style={{ color: "#b0b0b0", textDecoration: "none", transition: "color 0.3s" }}>
                Contacto
              </a>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: "none",
                border: "none",
                color: "#00ff41",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            >
              ☰
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "1rem",
              paddingTop: "1rem",
              borderTop: "1px solid #1a1a1a",
            }}
          >
            <a
              href="#expertise"
              style={{ color: "#b0b0b0", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre mí
            </a>
            <a
              href="#expertise"
              style={{ color: "#b0b0b0", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Stacks/Skills
            </a>
            <a
              href="#projects"
              style={{ color: "#b0b0b0", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Proyectos
            </a>
            <a
              href="#contact"
              style={{ color: "#b0b0b0", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        style={{
          background: "#0f0f0f",
          padding: isMobile ? "3rem 20px" : "5rem 40px",
          textAlign: "center",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            padding: isMobile ? "2rem 1rem" : "3rem",
          }}
        >
          <p style={{ color: "#7a7a7a", fontSize: "1.1rem", marginBottom: "1rem" }}>Hola, soy</p>
          <h2
            style={{
              fontSize: isMobile ? "2.5rem" : "4rem",
              fontWeight: 800,
              color: "#00ff41",
              marginBottom: "1.5rem",
            }}
          >
            Sergio Sánchez
          </h2>
          <p
            style={{
              fontSize: isMobile ? "0.9rem" : "1.1rem",
              color: "#b0b0b0",
              marginBottom: "0.5rem",
              lineHeight: "1.6",
            }}
          >
            Administrador de Sistemas & Infraestructura IT
          </p>
          <p
            style={{
              fontSize: isMobile ? "0.9rem" : "1.1rem",
              color: "#7a7a7a",
              maxWidth: "600px",
              margin: "1rem auto 0",
              lineHeight: "1.6",
            }}
          >
            +15 años de experiencia en infraestructura IT, networking avanzado y soporte técnico para PYMES y empresas.
            Especialista en Windows Server, Linux, administración de redes y virtualización en entornos críticos.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: "#000000", padding: isMobile ? "3rem 20px" : "4rem 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: isMobile ? "1.5rem" : "2rem",
            }}
          >
            <div
              style={{
                border: "2px solid #00ff41",
                borderRadius: "12px",
                padding: isMobile ? "1.5rem 1rem" : "2rem",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 255, 65, 0.1)"
                e.currentTarget.style.transform = "translateY(-5px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <p style={{ fontSize: isMobile ? "2rem" : "2.5rem", color: "#00ff41", fontWeight: 700, margin: 0 }}>
                15+
              </p>
              <p style={{ color: "#b0b0b0", marginTop: "0.5rem" }}>Años de Experiencia</p>
            </div>
            <div
              style={{
                border: "2px solid #00ff41",
                borderRadius: "12px",
                padding: isMobile ? "1.5rem 1rem" : "2rem",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 255, 65, 0.1)"
                e.currentTarget.style.transform = "translateY(-5px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <p style={{ fontSize: isMobile ? "2rem" : "2.5rem", color: "#00ff41", fontWeight: 700, margin: 0 }}>
                50+
              </p>
              <p style={{ color: "#b0b0b0", marginTop: "0.5rem" }}>Clientes Satisfechos</p>
            </div>
            <div
              style={{
                border: "2px solid #00ff41",
                borderRadius: "12px",
                padding: isMobile ? "1.5rem 1rem" : "2rem",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 255, 65, 0.05)"
                e.currentTarget.style.borderColor = "#00ff41"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
              }}
            >
              <p style={{ fontSize: isMobile ? "2rem" : "2.5rem", color: "#00ff41", fontWeight: 700, margin: 0 }}>
                99.9%
              </p>
              <p style={{ color: "#b0b0b0", marginTop: "0.5rem" }}>Disponibilidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" style={{ background: "#0f0f0f", padding: isMobile ? "3rem 20px" : "4rem 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: isMobile ? "2rem" : "2.5rem",
              color: "#00ff41",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          >
            Stacks/Skills
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: isMobile ? "1.5rem" : "2rem",
            }}
          >
            {skillsCategories.map((category, idx) => (
              <div
                key={idx}
                style={{
                  border: "2px solid #00ff41",
                  borderRadius: "12px",
                  padding: isMobile ? "1.5rem 1rem" : "2rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 255, 65, 0.05)"
                  e.currentTarget.style.borderColor = "#00ff41"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"
                }}
              >
                <h4 style={{ color: "#00ff41", fontSize: isMobile ? "1.2rem" : "1.4rem", marginBottom: "0.5rem" }}>
                  {category.title}
                </h4>
                <p style={{ color: "#7a7a7a", fontSize: "0.95rem", marginBottom: "1.5rem" }}>{category.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                  {category.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      style={{
                        border: "2px solid #00ff41",
                        color: "#00ff41",
                        padding: "0.6rem 1.2rem",
                        borderRadius: "25px",
                        fontSize: "0.9rem",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#00ff41"
                        e.currentTarget.style.color = "#0f0f0f"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent"
                        e.currentTarget.style.color = "#00ff41"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ background: "#000000", padding: isMobile ? "3rem 20px" : "4rem 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: isMobile ? "2rem" : "2.5rem",
              color: "#00ff41",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          >
            Últimos Proyectos
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(1, 1fr)",
              gap: isMobile ? "1.5rem" : "2rem",
            }}
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                style={{
                  border: "2px solid #00ff41",
                  borderRadius: "12px",
                  padding: isMobile ? "1.5rem 1rem" : "2rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 255, 65, 0.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"
                }}
              >
                <h4 style={{ color: "#00ff41", fontSize: isMobile ? "1.2rem" : "1.4rem", margin: "0 0 0.3rem 0" }}>
                  {project.title}
                </h4>
                <p style={{ color: "#7a7a7a", fontSize: "0.95rem", margin: "0 0 1rem 0" }}>{project.period}</p>
                <p
                  style={{
                    color: "#b0b0b0",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                  {project.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      style={{
                        border: "2px solid #00ff41",
                        color: "#00ff41",
                        padding: "0.6rem 1.2rem",
                        borderRadius: "25px",
                        fontSize: "0.9rem",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#00ff41"
                        e.currentTarget.style.color = "#0f0f0f"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent"
                        e.currentTarget.style.color = "#00ff41"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "#0f0f0f",
          padding: isMobile ? "3rem 20px" : "4rem 40px",
          textAlign: "center",
          borderTop: "2px solid #00ff41",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: isMobile ? "1.8rem" : "2.5rem",
              color: "#00ff41",
              marginBottom: "1rem",
            }}
          >
            Iniciemos una Conversación
          </h3>
          <p
            style={{
              fontSize: isMobile ? "0.95rem" : "1.1rem",
              color: "#b0b0b0",
              marginBottom: "2rem",
              lineHeight: "1.6",
            }}
          >
            ¿Tienes un proyecto desafiante o necesitas optimizar tu infraestructura? Estoy disponible para nuevas
            oportunidades y colaboraciones.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ background: "#000000", padding: isMobile ? "2rem 20px" : "3rem 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: isMobile ? "1.5rem" : "2rem",
              marginBottom: "2rem",
            }}
          >
            {/* Email */}
            <a href="mailto:sergioesquinass@gmail.com" style={{ textDecoration: "none" }}>
              <div
                style={{
                  border: "2px solid #00ff41",
                  borderRadius: "12px",
                  padding: isMobile ? "1.5rem 1rem" : "2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 255, 65, 0.1)"
                  e.currentTarget.style.transform = "translateY(-5px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <p style={{ fontSize: "2rem", margin: "0 0 0.5rem 0" }}>✉️</p>
                <h4 style={{ color: "#ffffff", margin: "0.5rem 0" }}>Email</h4>
                <p style={{ color: "#00ff41", margin: "0.5rem 0 0 0", fontSize: "0.95rem" }}>
                  sergioesquinass@gmail.com
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/34643624744"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  border: "2px solid #00ff41",
                  borderRadius: "12px",
                  padding: isMobile ? "1.5rem 1rem" : "2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 255, 65, 0.1)"
                  e.currentTarget.style.transform = "translateY(-5px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <p style={{ fontSize: "2rem", margin: "0 0 0.5rem 0" }}>💬</p>
                <h4 style={{ color: "#ffffff", margin: "0.5rem 0" }}>WhatsApp</h4>
                <p style={{ color: "#00ff41", margin: "0.5rem 0 0 0", fontSize: "0.95rem" }}>+34 643 624 744</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sergio-e-651408219/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  border: "2px solid #00ff41",
                  borderRadius: "12px",
                  padding: isMobile ? "1.5rem 1rem" : "2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 255, 65, 0.1)"
                  e.currentTarget.style.transform = "translateY(-5px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <p style={{ fontSize: "2rem", margin: "0 0 0.5rem 0" }}>💼</p>
                <h4 style={{ color: "#ffffff", margin: "0.5rem 0" }}>LinkedIn</h4>
                <p style={{ color: "#00ff41", margin: "0.5rem 0 0 0", fontSize: "0.95rem" }}>Mi Perfil</p>
              </div>
            </a>
          </div>

          {/* Additional contact options - second row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: isMobile ? "1.5rem" : "2rem",
            }}
          >
            {/* GitHub */}
            <a
              href="https://github.com/elunicoantivirus"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  border: "2px solid #00ff41",
                  borderRadius: "12px",
                  padding: isMobile ? "1.5rem 1rem" : "2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 255, 65, 0.1)"
                  e.currentTarget.style.transform = "translateY(-5px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <p style={{ fontSize: "2rem", margin: "0 0 0.5rem 0" }}>💻</p>
                <h4 style={{ color: "#ffffff", margin: "0.5rem 0" }}>GitHub</h4>
                <p style={{ color: "#00ff41", margin: "0.5rem 0 0 0", fontSize: "0.95rem" }}>Mi Perfil</p>
              </div>
            </a>

            {/* Curriculum Vitae */}
            <a
              href="https://drive.google.com/drive/folders/19wtAQxHcFaaC5SFYytOfTj39hsLB9P_T"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  border: "2px solid #00ff41",
                  borderRadius: "12px",
                  padding: isMobile ? "1.5rem 1rem" : "2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 255, 65, 0.1)"
                  e.currentTarget.style.transform = "translateY(-5px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <p style={{ fontSize: "2rem", margin: "0 0 0.5rem 0" }}>📄</p>
                <h4 style={{ color: "#ffffff", margin: "0.5rem 0" }}>Curriculum Vitae</h4>
                <p style={{ color: "#00ff41", margin: "0.5rem 0 0 0", fontSize: "0.95rem" }}>CV</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#000000",
          borderTop: "2px solid #00ff41",
          padding: isMobile ? "2rem 20px" : "3rem 40px",
          textAlign: "center",
          color: "#7a7a7a",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.95rem" }}>
          © 2025 BackupOS - Administrador de Sistemas. Optimizando infraestructuras IT.
        </p>
      </footer>
    </div>
  )
}
