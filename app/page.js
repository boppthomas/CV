"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Linkedin,
  Mail,
  ArrowUpRight,
  X,
  ExternalLink,
} from "lucide-react";

const experiences = [
  {
    title: "Administrateur système et réseau",
    company: "CDS Engineering",
    date: "2023 — Aujourd’hui",
    text: [
      "Maintenance de divers parcs informatiques de 20 à 100 employés",
      "Gestion d’un portefeuille de plusieurs clients",
      "Administration VMware, Hyper-V et Proxmox",
      "Mise en place de solutions Fortinet et VPN",
      "Gestion des sauvegardes Veeam et supervision",
      "Support utilisateurs et accompagnement technique",
      "Gestion de réseaux Unifi, Netgear et infrastructures WiFi",
      "Déploiement de solutions de sécurité et virtualisation",
    ],
  },
  {
    title: "Freelance IT",
    company: "ABBCS",
    date: "2018 — 2023",
    text: [
      "Dépannage informatique et assistance utilisateurs",
      "Déploiement de solutions IT adaptées aux clients",
      "Conseil et accompagnement technique",
      "Gestion de projets et maintenance informatique",
    ],
  },
];

const certifications = [
  {
    title: "Proxmox VE Administration",
    issuer: "Proxmox",
    year: "2024",
    file: "/certifications/proxmox-ve.pdf",
  },
  {
    title: "Proxmox Backup Server",
    issuer: "Proxmox",
    year: "2024",
    file: "/certifications/proxmox-backup.pdf",
  },
  {
    title: "Getting Started in Cybersecurity 2.0",
    issuer: "Fortinet Training Institute",
    year: "2023",
    file: "/certifications/fortinet-cybersecurity.pdf",
  },
  {
    title: "Introduction to the Threat Landscape 2.0",
    issuer: "Fortinet Training Institute",
    year: "2023",
    file: "/certifications/fortinet-threat-landscape.pdf",
  },
  {
    title: "CFC Informaticien Généraliste",
    issuer: "ETML Lausanne",
    year: "2017",
    file: "/certifications/cfc.pdf",
  },
];

export default function Home() {
  const [selectedCertification, setSelectedCertification] = useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,0,128,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(0,255,255,0.12),transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-10">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ff0080]/40 bg-black/40 text-xl font-black backdrop-blur">
            TB
          </div>
          <div>
            <h1 className="text-xl font-black">Thomas Bopp</h1>
            <p className="text-sm text-white/40">
              Administrateur système & réseau
            </p>
          </div>
        </div>

        <nav className="hidden gap-10 text-sm text-white/70 md:flex">
          <a href="#expertise" className="transition hover:text-white">
            Expertise
          </a>
          <a href="#parcours" className="transition hover:text-white">
            Parcours
          </a>
          <a href="#certifications" className="transition hover:text-white">
            Certifications
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="label">Infrastructure IT • Suisse romande</p>

          <h2 className="mt-6 text-6xl font-black leading-[0.95] md:text-7xl">
            Thomas Bopp
          </h2>

          <h3 className="mt-5 bg-gradient-to-r from-[#ff0080] to-[#39ffd4] bg-clip-text text-5xl font-black text-transparent md:text-6xl">
            Systèmes & réseau
          </h3>

          <p className="mt-8 max-w-xl text-lg leading-9 text-white/60">
            Administrateur système et réseau spécialisé dans les infrastructures
            IT, la virtualisation, la sécurité, les sauvegardes et le support
            utilisateur.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/CV.pdf"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.03]"
            >
              <Download size={18} />
              Télécharger le CV
            </a>

            <a
              href="https://www.linkedin.com/in/thomas-bopp-184a81295/"
              target="_blank"
              rel="noreferrer"
              className="glass flex items-center gap-2 rounded-full px-6 py-4 transition hover:border-[#39ffd4]/40"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="mailto:thomas.bopp.pro@gmail.com"
              className="glass flex items-center gap-2 rounded-full px-6 py-4 transition hover:border-[#39ffd4]/40"
            >
              <Mail size={18} />
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="glass relative overflow-hidden rounded-[2rem] p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,128,0.15),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.10),transparent_35%)]" />

          <div className="relative z-10">
            <p className="label">Profil</p>

            <h3 className="mt-6 text-5xl font-black leading-tight">
              Systèmes, réseau & sécurité.
            </h3>

            <p className="mt-8 leading-9 text-white/70">
              Une approche terrain, structurée et orientée solution pour
              maintenir, sécuriser et faire évoluer des environnements IT
              professionnels.
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="space-y-5 text-white/70">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#39ffd4]" />
                  thomas.bopp.pro@gmail.com
                </div>

                <div className="flex items-center gap-3">
                  <ArrowUpRight size={18} className="text-[#39ffd4]" />
                  bopp-thomas.ch
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="parcours"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <p className="label">Parcours</p>

        <h2 className="mt-5 text-4xl font-black md:text-5xl">
          Expériences
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="glass rounded-[1.75rem] p-8 transition duration-300 hover:border-[#39ffd4]/30 hover:shadow-[0_0_40px_rgba(57,255,212,0.08)]"
            >
              <p className="text-sm font-bold text-[#39ffd4]">{exp.date}</p>

              <h3 className="mt-4 text-2xl font-black">{exp.title}</h3>

              <p className="mt-2 text-white/50">{exp.company}</p>

              <ul className="mt-8 space-y-4">
                {exp.text.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-[15px] leading-7 text-white/72"
                  >
                    <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#39ffd4]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="certifications"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <p className="label">Certifications</p>

        <h2 className="mt-5 text-4xl font-black md:text-5xl">
          Formations & certifications
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">
          Validation de compétences en cybersécurité, virtualisation et
          infrastructure système.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <button
              type="button"
              key={cert.title}
              onClick={() => setSelectedCertification(cert)}
              className="glass group rounded-[1.75rem] p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-[#39ffd4]/30 hover:shadow-[0_0_40px_rgba(57,255,212,0.08)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#39ffd4]/20 bg-[#39ffd4]/5 text-xl">
                🛡️
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#39ffd4]">
                {cert.issuer}
              </p>

              <h3 className="mt-4 text-2xl font-black leading-tight">
                {cert.title}
              </h3>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-white/40">{cert.year}</span>
                <span className="flex items-center gap-2 text-sm text-white/45 transition group-hover:text-white/80">
                  Voir
                  <ExternalLink size={15} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="glass rounded-[2rem] p-10 md:p-14">
          <p className="label">Contact</p>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Discutons de votre infrastructure IT.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-white/60">
            Disponible pour échanger autour d’opportunités, d’architecture
            système, de réseau, sécurité ou virtualisation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:thomas.bopp.pro@gmail.com"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.03]"
            >
              <Mail size={18} />
              Envoyer un email
            </a>

            <a
              href="https://www.linkedin.com/in/thomas-bopp-184a81295/"
              target="_blank"
              rel="noreferrer"
              className="glass flex items-center gap-2 rounded-full px-6 py-4 transition hover:border-[#39ffd4]/40"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Thomas Bopp — Infrastructure IT &
        systèmes réseau
      </footer>

      {selectedCertification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="glass relative flex h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem]">
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#39ffd4]">
                  {selectedCertification.issuer}
                </p>
                <h3 className="mt-1 text-xl font-black">
                  {selectedCertification.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedCertification.file}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-[#39ffd4]/40 hover:text-white"
                >
                  Ouvrir
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedCertification(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-[#ff0080]/50 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <iframe
              src={selectedCertification.file}
              title={selectedCertification.title}
              className="h-full w-full bg-white"
            />
          </div>
        </div>
      )}
    </main>
  );
}
