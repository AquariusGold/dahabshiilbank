/**
 * Auth layout — renders auth pages WITHOUT the main site Navbar.
 * The root layout's Navbar is overridden by nesting this layout.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
