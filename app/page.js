"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  Server,
  Shield,
  Cloud,
  Network,
  HardDrive,
  Wrench,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const profile = {
  name: "Thomas Bopp",
  role: "Administrateur système & réseau",
  location: "Bex, Suisse",
  phone: "+41 79 522 23 56",
  email: "thomas.bopp.pro@gmail.com",
  website: "bopp-thomas.ch",
  linkedin: "https://www.linkedin.com/in/thomas-bopp-184a81295/",
};

const skills = [
  { icon: Server, title: "Systèmes", text: "Windows, Linux, serveurs, GPO et administration quotidienne." },
  { icon: Network, title: "Réseaux", text: "Infrastructure, accès distant, Fortinet et sécurité réseau." },
  { icon: HardDrive, title: "Virtualisation", text: "VMware, Hyper-V, Proxmox, sauvegardes et restauration." },
  { icon: Cloud, title: "Cloud", text: "Solutions cloud, migration, modernisation et maintenance." },
  { icon: Shield, title: "Sécurité", text: "Firewall, accès distant sécurisé et protection des données." },
  { icon: Wrench, title: "Support", text: "Dépannage, incidents, utilisateurs, documentation et formation." },
];

const experiences = [
  {
    role: "Administrateur système et réseau",
    company: "CDS Engineering",
    period: "2023 — Aujourd’hui",
    tasks: [
      "Administration et maintenance d’infrastructures multi-clients.",
      "Gestion de parcs informatiques de plus de 100 utilisateurs.",
      "Déploiement de solutions réseau, virtualisation, sauvegarde et sécurité.",
      "Support technique, gestion d’incidents et accompagnement utilisateurs.",
    ],
  },
  {
    role: "Freelance IT",
    company: "ABBCS",
    period: "2018 — 2023",
    tasks: [
      "Gestion et suivi d’un portefeuille clients.",
      "Dépannage et déploiement de solutions informatiques adaptées.",
      "Pilotage de projets de l’analyse du besoin à la mise en production.",
      "Formation et accompagnement des utilisateurs.",
    ],
  },
];

function Button({ href, children, variant = "primary" }) {
  const style =
    variant === "primary"
      ? "bg-squidPink text-white shadow-glow hover:scale-[1.02]"
      : "border border-white/15 bg-white/[0.04] text-white hover:border-squidGreen/50 hover:bg-white/[0.08]";

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${style}`}
    >
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-squidGreen">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8 text-slate-300">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-slate-100">
      <div className="noise pointer-events-none fixed inset-0 opacity-30" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,47,125,.14),transparent_34rem),radial-gradient(circle_at_85%_15%,rgba(22,242,179,.10),transparent_32rem)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-squidPink/50 bg-squidPink/10 font-black text-white">
            TB
          </div>
          <div>
            <p className="font-bold leading-none text-white">{profile.name}</p>
            <p className="mt-1 text-xs text-slate-400">{profile.role}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#expertise" className="hover:text-white">Expertise</a>
          <a href="#experience" className="hover:text-white">Expériences</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.05fr_.95fr] md:px-10 md:pb-28 md:pt-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-squidGreen">
            Infrastructure IT • Systèmes • Réseau
          </p>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Thomas Bopp
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">
            Administrateur système et réseau basé en Suisse romande, orienté infrastructure, sécurité,
            virtualisation et support utilisateur.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/CV.pdf">
              <Download className="mr-2 h-4 w-4" />
              Télécharger le CV
            </Button>

            <Button href={profile.linkedin} variant="secondary">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>

            <Button href={`mailto:${profile.email}`} variant="secondary">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.08 }}>
          <Card className="p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-squidPink">
              Profil
            </p>

            <h2 className="mt-5 text-3xl font-black text-white">
              Administrateur système & réseau
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Actuellement chez CDS Engineering à Villeneuve, je recherche de nouvelles opportunités
              pour évoluer sur des environnements IT exigeants et renforcer mon expertise.
            </p>

            <div className="mt-8 grid gap-4 text-slate-200">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-squidGreen" />
                {profile.phone}
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-squidGreen" />
                {profile.email}
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-squidGreen" />
                {profile.location}
              </div>

              <div className="flex items-center gap-3">
                <ArrowUpRight className="h-5 w-5 text-squidGreen" />
                {profile.website}
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      <section id="expertise" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle
          eyebrow="Expertise"
          title="Domaines d’intervention"
          text="Une approche terrain : stabiliser l’existant, sécuriser les accès, documenter, déployer proprement et accompagner les utilisateurs."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <Card key={skill.title} className="p-7 transition hover:-translate-y-1 hover:border-squidPink/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-squidPink/10 text-squidPink">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-black text-white">{skill.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{skill.text}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="experience" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle eyebrow="Parcours" title="Expériences" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="p-7 md:p-9">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                    <p className="mt-2 text-slate-300">{exp.company}</p>
                  </div>

                  <span className="w-fit rounded-full border border-squidGreen/20 bg-squidGreen/10 px-4 py-2 text-sm font-bold text-squidGreen">
                    {exp.period}
                  </span>
                </div>

                <div className="mt-7 grid gap-3 md:grid-cols-2">
                  {exp.tasks.map((task) => (
                    <div key={task} className="flex gap-3 rounded-2xl bg-white/[0.03] p-4 leading-7 text-slate-300">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-squidPink" />
                      <p>{task}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2 md:px-10">
        <Card className="p-8">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-squidGreen">Formation</p>
          <h2 className="mt-4 text-3xl font-black text-white">ETML Lausanne</h2>
          <p className="mt-3 text-lg text-slate-300">CFC informaticien généraliste</p>
          <p className="mt-2 text-slate-500">2012 — 2017</p>
        </Card>

        <Card className="p-8">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-squidGreen">Qualités</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {["Autonome", "Organisé", "Teamwork", "Jovial", "Méthodique"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </Card>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <Card className="overflow-hidden border-squidPink/20">
          <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-squidPink">Contact</p>
              <h2 className="mt-4 text-4xl font-black text-white">
                Échangeons autour de vos besoins IT.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                Disponible pour discuter d’opportunités en administration système, réseau,
                infrastructure, support ou modernisation.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button href={`mailto:${profile.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>

              <Button href={profile.linkedin} variant="secondary">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Thomas Bopp</p>
        <p>Infrastructure • Réseau • Sécurité</p>
      </footer>
    </main>
  );
}
