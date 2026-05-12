import "./globals.css";

export const metadata = {
  title: "Thomas Bopp - CV",
  description: "CV en ligne de Thomas Bopp, administrateur système et réseau"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
