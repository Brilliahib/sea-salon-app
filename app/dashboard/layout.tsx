import type { Metadata } from "next";

// Components
import Sidebar from "@/components/sidebar/side-bar";
import NavbarDashboard from "@/components/navbar/nav-dashboard";

export const metadata: Metadata = {
  title: "SEA Salon | Dashboard",
  description: "A safe-haven for my experiments and explorations.",
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarDashboard />
      <section
        id="playground"
        className="relative flex h-full w-full grow flex-col md:flex-row pad-x"
      >
        <Sidebar />
        <div className="w-full">
          <main className="shiki flex w-full grow flex-col overflow-x-hidden px-4 pb-6 md:px-8 py-4 md:py-8 md:pb-8 lg:pb-12 lg:pr-0">
            {children}
          </main>
        </div>
      </section>
    </>
  );
}
