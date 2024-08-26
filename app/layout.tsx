import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import '../styles/globals.css';


export const metadata: Metadata = {
  title: "Task Manangement Next App",
  description: "Developed By Sapphire smith",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
