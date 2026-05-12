"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Download,
  ArrowUpRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03040a] text-white">
      <div className="noise" />

      {/* HEADER */}

      <header className="relative z-20 flex items-center justify-between px-8 py-8 lg:px-16">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ff168c]/50 bg-[#ff168c]/10 text-lg font-black">
            TB
          </div>

          <div>
            <p className="text-xl font-bold">Thomas Bopp</p>
            <p className="text-sm text-white/50">
              Infrastructure • Réseau • Système
            </p>
          </div>
        </div>

        <nav className="hidden gap-10 text-sm text-white/70 md:flex">
          <a href="#about" className="hover:text-white">
            À propos
          </a>

          <a href="#skills" className="hover:text-white">
            Expertise
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}

      <section className="section grid items-center gap-20 lg:grid-cols-2">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="subtitle">
            Administrateur système & réseau
          </p>

          <h1 className="hero-title mt-8">
            Infrastructure
            <br />
            <span className="neon-pink">système</span>{" "}
            <span className="neon-cyan">& réseau</span>
          </h1>

          <p className="hero-description mt-10">
            Administrateur système et réseau basé en Suisse romande,
            spécialisé dans les infrastructures IT, virtualisation,
            cybersécurité et modernisation des environnements
            professionnels.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="/CV.pdf" className="btn-primary">
              <div className="flex items-center gap-2">
                <Download size={18} />
                Télécharger le CV
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/thomas-bopp-184a81295/"
              target="_blank"
              className="btn-secondary"
            >
              <div className="flex items-center gap-2">
                <Linkedin size={18} />
                LinkedIn
              </div>
            </a>

            <a
              href="mailto:thomas.bopp.pro@gmail.com"
              className="btn-secondary"
            >
              <div className="flex items-center gap-2">
                <Mail size={18} />
                Contact
              </div>
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative flex items-center justify-center"
        >
          {/* SYMBOLS */}

          <div className="absolute left-10 top-10">
            <div className="neon-circle" />
          </div>

          <div className="absolute right-10 top-24">
            <div className="neon-square" />
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="neon-triangle" />
          </div>

          {/* CARD */}

          <div className="glass-card w-full max-w-xl p-10">
            <p className="subtitle">
              Contact rapide
            </p>

            <h2 className="mt-5 text-5xl font-black">
              Thomas Bopp
            </h2>

            <div className="mt-10 space-y-6 text-lg text-white/80">
              <div className="flex items-center gap-4">
                <Mail className="text-[#39ffd4]" />
                thomas.bopp.pro@gmail.com
              </div>

              <div className="flex items-center gap-4">
                <ArrowUpRight className="text-[#39ffd4]" />
                bopp-thomas.ch
              </div>

              <div className="flex items-center gap-4">
                <Linkedin className="text-[#39ffd4]" />
                linkedin.com/in/thomas-bopp
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="section pt-0"
      >
        <div className="glass-card p-10 lg:p-14">
          <p className="subtitle">À propos</p>

          <h2 className="mt-5 text-4xl font-black">
            Une approche terrain,
            moderne et fiable.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-white/70">
            Actuellement en poste chez CDS Engineering à Villeneuve,
            j’accompagne différentes entreprises dans la gestion,
            l’évolution et la sécurisation de leurs infrastructures IT.
            Mon travail couvre l’administration système,
            la virtualisation, les sauvegardes, les réseaux,
            les solutions cloud et le support utilisateurs.
          </p>
        </div>
      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="section pt-0"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            "Infrastructure & systèmes",
            "Virtualisation & sauvegarde",
            "Réseaux & cybersécurité",
          ].map((item) => (
            <div
              key={item}
              className="glass-card p-10 transition duration-300 hover:-translate-y-1"
            >
              <p className="subtitle">Expertise</p>

              <h3 className="mt-6 text-3xl font-black">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="section pt-0"
      >
        <div className="glass-card flex flex-col items-start justify-between gap-10 p-10 lg:flex-row lg:items-center">
          <div>
            <p className="subtitle">Contact</p>

            <h2 className="mt-5 text-4xl font-black">
              Discutons de votre infrastructure IT.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:thomas.bopp.pro@gmail.com"
              className="btn-primary"
            >
              Envoyer un email
            </a>

            <a
              href="https://www.linkedin.com/in/thomas-bopp-184a81295/"
              target="_blank"
              className="btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="relative z-20 border-t border-white/10 px-8 py-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Thomas Bopp — Infrastructure & Réseau
      </footer>
    </main>
  );
}
