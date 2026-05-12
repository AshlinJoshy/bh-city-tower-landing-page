import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-600 font-bold text-white">
              BH
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-slate-900">
                Better Homes
              </p>
              <p className="text-xs text-slate-500">Agent Portal</p>
            </div>
          </Link>
          <nav className="text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-brand-700">
              Agents
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-400 sm:px-6">
          Better Homes &middot; Internal Agent Portal
        </div>
      </footer>
    </div>
  );
}
