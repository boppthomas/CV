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
  ExternalLink
} from "lucide-react";

const experiences = [
  {
    role: "Administrateur système et réseau",
    company: "CDS Engineering",
    location: "Villeneuve",
    period: "2023 – Maintenant",
    tasks: [
      "Gestion et maintenance d’infrastructures informatiques de plusieurs entreprises.",
      "Administration complète de parcs informatiques de plus de 100 employés.",
      "Conception et déploiement de solutions d’amélioration et de remplacement d’infrastructures réseau.",
      "Mise en place de solutions sécurisées pour le travail à distance.",
      "Support technique, dépannage utilisateurs et gestion des incidents.",
      "Administration de systèmes de virtualisation : VMware, Hyper-V et Proxmox.",
      "Gestion de solutions de sauvegarde : Veeam et Proxmox.",
      "Configuration de passerelles Fortinet et automatisation de déploiements GPO, scripts et Atera."
    ]
  },
  {
    role: "Freelance IT",
    company: "ABBCS",
    location: "Bex",
    period: "2018 – 2023",
    tasks: [
      "Gestion et suivi d’un portefeuille de clients.",
      "Dépannage et déploiement de solutions informatiques adaptées aux besoins clients.",
      "Pilotage de projets clients, de l’analyse des besoins à la mise en production.",
      "Formation et accompagnement des utilisateurs sur divers logiciels."
    ]
  }
];

const skills = [
  { icon: Server, title: "Systèmes", items: ["Windows", "Linux", "Administration serveur", "GPO"] },
  { icon: Network, title: "Réseaux", items: ["Infrastructure réseau", "Fortinet", "Accès distant", "Sécurité"] },
  { icon: Cloud, title: "Cloud & services", items: ["Solutions cloud", "Migration", "Déploiement", "Maintenance"] },
  { icon: HardDrive, title: "Virtualisation", items: ["VMware", "Hyper-V", "Proxmox", "Sauvegarde"] },
  { icon: Shield, title: "Sécurité", items: ["Travail à distance sécurisé", "Firewall", "Monitoring", "Protection données"] },
  { icon: Wrench, title: "Support", items: ["Dépannage", "Incidents", "Utilisateurs", "Formation"] }
];

function Button({ href, children, variant = "primary" }) {
  const classes =
    variant === "primary"
      ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
      : "border border-slate-600 bg-white/5 text-white hover:bg-white/10";

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-4 font-semibold transition ${classes}`}
    >
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
        <div className="absolute -top-40 right-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-10 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Administrateur système & réseau
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">Thomas Bopp</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Professionnel IT basé en Suisse romande, spécialisé dans l’administration système,
              les infrastructures réseau, la virtualisation, la sauvegarde et le support technique.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/CV.pdf">
                <Download className="mr-2 h-5 w-5" /> Télécharger le CV
              </Button>
              <Button href="https://www.linkedin.com/in/thomas-bopp-184a81295/" variant="secondary">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Card className="rounded-[2rem] bg-white/10 backdrop-blur">
              <div className="p-8">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-4 border-cyan-300/50 bg-slate-800 text-5xl font-bold text-white shadow-xl">
                  TB
                </div>
                <div className="mt-8 space-y-4 text-slate-200">
                  <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-cyan-300" /> +41 79 522 23 56</div>
                  <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-cyan-300" /> thomas.bopp.pro@gmail.com</div>
                  <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cyan-300" /> Bex, Suisse</div>
                  <div className="flex items-center gap-3"><Linkedin className="h-5 w-5 text-cyan-300" /> LinkedIn</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="md:col-span-2">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white">À propos</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Actuellement en poste chez CDS Engineering à Villeneuve, je suis à la recherche
                de nouvelles opportunités dans le domaine des systèmes et réseaux afin de relever
                de nouveaux défis et enrichir mon expertise.
              </p>
            </div>
          </Card>
          <Card>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white">Formation</h2>
              <div className="mt-4 text-slate-300">
                <p className="font-semibold text-white">ETML Lausanne</p>
                <p>CFC informaticien généraliste</p>
                <p className="mt-2 text-sm text-slate-400">2012 – 2017</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Parcours</p>
        <h2 className="mt-3 text-4xl font-bold text-white">Expériences</h2>

        <div className="mt-10 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div key={exp.role} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <Card>
                <div className="p-8">
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="mt-1 text-slate-300">{exp.company} — {exp.location}</p>
                    </div>
                    <span className="rounded-full bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-6 grid gap-3 text-slate-300 md:grid-cols-2">
                    {exp.tasks.map((task) => (
                      <li key={task} className="rounded-2xl bg-white/[0.03] p-4 leading-7">{task}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Expertise</p>
        <h2 className="mt-3 text-4xl font-bold text-white">Compétences</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card key={skill.title} className="transition hover:bg-white/[0.07]">
                <div className="p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{skill.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <Card className="rounded-[2rem] border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-blue-500/10">
          <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <h2 className="text-3xl font-bold text-white">Envie d’échanger ?</h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Disponible pour discuter d’opportunités en administration système, réseau,
                infrastructure, support IT ou projets de modernisation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="mailto:thomas.bopp.pro@gmail.com"><Mail className="mr-2 h-5 w-5" /> Me contacter</Button>
              <Button href="https://www.linkedin.com/in/thomas-bopp-184a81295/" variant="secondary">
                <ExternalLink className="mr-2 h-5 w-5" /> LinkedIn
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
