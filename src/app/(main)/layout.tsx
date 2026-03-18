import { Navbar } from "@/components/layout/Navbar";

/**
 * (main) group layout — wraps all public site pages with the Navbar.
 * Auth pages live outside this group and get no Navbar.
 */
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
