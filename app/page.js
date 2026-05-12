"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Download,
  ArrowUpRight,
  Server,
  Shield,
  Network,
  HardDrive,
} from "lucide-react";

const profile = {
  name: "Thomas Bopp",
  role: "Administrateur système & réseau",
  email: "thomas.bopp.pro@gmail.com",
  website: "bopp-thomas.ch",
  linkedin: "https://www.linkedin.com/in/thomas-bopp-184a81295/",
};

const skills = [
  {
    icon: Server,
    title: "Systèmes",
    text: "Administration Windows, Linux, serveurs, GPO et environnements utilisateurs.",
  },
  {
    icon: Network,
    title: "Réseaux",
    text: "Infrastructure réseau, accès distant sécurisé, Fortinet et maintenance.",
  },
  {
    icon: HardDrive,
    title: "Virtualisation",
    text: "VMware, Hyper-V, Proxmox, sauvegardes et continuité de service.",
  },
  {
    icon: Shield,
    title: "Sécurité",
    text: "Firewall, protection des accès, bonnes pratiques et accompagnement utilisateurs.",
  },
];

const experiences = [
  {
    title: "Administrateur système et réseau",
    company: "CDS Engineering",
    date: "2023 — Aujourd’hui",
    text: [
              "- Maintenance de divers parcs informatiques de 20 à 100 employés",
              "- Gestion d'un porte-feuille de plusieurs clients",
              "- Mise en place et gestion des divers technologies de virtualisation, Proxmox, Hyper-V et VMware",
              "- Mise en place de normes de sécurités",
              "- Mise en fonction de solutions FortiGate, ainsi que gestion de plusieurs technologies Fortinet",
              "- Mise en place de serveur Printunl sous Linux pour les accès VPN utilisateurs ",
              "- Gestion des ressources de l'entreprise et mise en place de solutions diverses pour mes collègues",
              "- Gestion de réseau WiFi via Unifi et Netgear, ainsi que mise en place de solutions caméra et porte d'accès",
              "- Mise en place de Citizen et Cab pour l'étiquettage de produits ",
              "- Gestion avancée de l'erp Profil3000 ",
           ],
  },
  {
    title: "Freelance IT",
    company: "ABBCS",
    date: "2018 — 2023",
    text: "Dépannage, conseil, déploiement de solutions informatiques et accompagnement clients.",
  },
];

function Button({ href, children, variant = "primary" }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={variant === "primary" ? "btn-primary" : "btn-secondary"}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="noise" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10">
        <a href="#top" className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-sm font-black">
            TB
          </div>
          <div>
            <p className="font-bold">{profile.name}</p>
            <p className="text-xs text-white/45">{profile.role}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/55 md:flex">
          <a href="#expertise" className="hover:text-white">Expertise</a>
          <a href="#parcours" className="hover:text-white">Parcours</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <section
        id="top"
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="label">Infrastructure IT • Suisse romande</p>

          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Thomas Bopp
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-9 text-white/65">
            Administrateur système et réseau spécialisé dans les infrastructures IT,
            la virtualisation, la sécurité, les sauvegardes et le support utilisateur.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/CV.pdf">
              <span className="flex items-center gap-2">
                <Download size={18} />
                Télécharger le CV
              </span>
            </Button>

            <Button href={profile.linkedin} variant="secondary">
              <span className="flex items-center gap-2">
                <Linkedin size={18} />
                LinkedIn
              </span>
            </Button>

            <Button href={`mailto:${profile.email}`} variant="secondary">
              <span className="flex items-center gap-2">
                <Mail size={18} />
                Contact
              </span>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-6 top-8 opacity-50">
            <div className="geo-circle" />
          </div>

          <div className="absolute right-6 top-12 opacity-50">
            <div className="geo-square" />
          </div>

          <div className="absolute bottom-4 left-1/2 opacity-40">
            <div className="geo-triangle scale-75" />
          </div>

          <div className="glass relative rounded-[2rem] p-8 md:p-10">
            <p className="label">Profil</p>

            <h2 className="mt-5 text-3xl font-black md:text-4xl">
              Systèmes, réseau & sécurité.
            </h2>

            <p className="mt-6 leading-8 text-white/62">
              Une approche terrain, structurée et orientée solution pour maintenir,
              sécuriser et faire évoluer des environnements IT professionnels.
            </p>

            <div className="soft-line my-8" />

            <div className="space-y-4 text-white/70">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail size={18} className="text-[#39ffd4]" />
                {profile.email}
              </a>

              <a href="https://bopp-thomas.ch" className="flex items-center gap-3 hover:text-white">
                <ArrowUpRight size={18} className="text-[#39ffd4]" />
                {profile.website}
              </a>

              <a href={profile.linkedin} target="_blank" className="flex items-center gap-3 hover:text-white">
                <Linkedin size={18} className="text-[#39ffd4]" />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="expertise" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="label">Expertise</p>
        <h2 className="mt-5 text-4xl font-black md:text-5xl">
          Domaines d’intervention
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div key={skill.title} className="glass rounded-[1.75rem] p-7">
                <Icon className="text-[#ff168c]" size={26} />
                <h3 className="mt-6 text-xl font-black">{skill.title}</h3>
                <p className="mt-4 leading-7 text-white/58">{skill.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="parcours" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="label">Parcours</p>
        <h2 className="mt-5 text-4xl font-black md:text-5xl">
          Expériences
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {experiences.map((exp) => (
            <div key={exp.title} className="glass rounded-[1.75rem] p-8">
              <p className="text-sm font-bold text-[#39ffd4]">{exp.date}</p>
              <h3 className="mt-4 text-2xl font-black">{exp.title}</h3>
              <p className="mt-2 text-white/50">{exp.company}</p>
              <ul className="mt-6 space-y-3">
              {exp.text.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-white/72"
                >
                  <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#39ffd4]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="glass rounded-[2rem] p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="label">Contact</p>
              <h2 className="mt-5 text-4xl font-black md:text-5xl">
                Échangeons autour de vos besoins IT.
              </h2>
              <p className="mt-6 max-w-2xl leading-8 text-white/62">
                Disponible pour discuter d’opportunités en administration système,
                réseau, infrastructure, support ou modernisation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:flex-col">
              <Button href={`mailto:${profile.email}`}>
                <span className="flex items-center gap-2">
                  <Mail size={18} />
                  Email
                </span>
              </Button>

              <Button href={profile.linkedin} variant="secondary">
                <span className="flex items-center gap-2">
                  <Linkedin size={18} />
                  LinkedIn
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-white/35">
        © {new Date().getFullYear()} Thomas Bopp — Infrastructure • Réseau • Sécurité
      </footer>
    </main>
  );
}
