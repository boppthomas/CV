import "./globals.css";

export const metadata = {
  title: "Thomas Bopp | Administrateur système & réseau",
  description: "CV en ligne de Thomas Bopp, administrateur système et réseau en Suisse romande."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
