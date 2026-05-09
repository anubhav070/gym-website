import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Dumbbell } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/membership", label: "Membership" },
    { path: "/programs", label: "Programs" },
    { path: "/transformations", label: "Transformations" },
    { path: "/trainers", label: "Trainers" },
    { path: "/store", label: "Store" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <Dumbbell className="w-8 h-8 text-yellow-500 group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-bold">
                <span className="text-yellow-500">IRON</span>
                <span className="text-red-500">FORGE</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm uppercase tracking-wider transition-colors hover:text-yellow-500 ${
                    isActive(link.path) ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/membership"
              className="hidden lg:block px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold rounded hover:shadow-lg hover:shadow-yellow-500/50 transition-all"
            >
              JOIN NOW
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-yellow-500"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-yellow-500/20 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 px-4 rounded transition-colors ${
                      isActive(link.path)
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "text-gray-300 hover:bg-yellow-500/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/membership"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold rounded text-center"
                >
                  JOIN NOW
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="w-6 h-6 text-yellow-500" />
                <span className="text-xl font-bold">
                  <span className="text-yellow-500">IRON</span>
                  <span className="text-red-500">FORGE</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Transform your body, elevate your mind. Join the strongest community in Pune.
              </p>
            </div>

            <div>
              <h3 className="text-yellow-500 font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navLinks.slice(0, 4).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-gray-400 hover:text-yellow-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-yellow-500 font-bold mb-4">Services</h3>
              <div className="space-y-2">
                {navLinks.slice(4).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-gray-400 hover:text-yellow-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-yellow-500 font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Pune, Maharashtra</p>
                <p>Phone: +91 98765 43210</p>
                <p>Email: info@ironforge.in</p>
                <p className="text-yellow-500 font-bold mt-4">24/7 Open</p>
              </div>
            </div>
          </div>

          <div className="border-t border-yellow-500/20 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 IronForge Gym. All rights reserved. Stop Wishing, Start Grinding.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
