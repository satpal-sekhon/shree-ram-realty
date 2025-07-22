'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building,
  LandPlot,
  Hotel,
  Search,
  Phone,
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const propertiesRef = useRef<HTMLDivElement>(null);
  const developersRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const propertyTypes = [
    { name: "Apartments", icon: <Building className="w-4 h-4 mr-2" />, href: "/properties/apartments" },
    { name: "Villas", icon: <Home className="w-4 h-4 mr-2" />, href: "/properties/villas" },
    { name: "Townhouses", icon: <Hotel className="w-4 h-4 mr-2" />, href: "/properties/townhouses" },
    { name: "Plots", icon: <LandPlot className="w-4 h-4 mr-2" />, href: "/properties/plots" },
  ];

  const developers = [
    { name: "Emaar Properties", href: "/developers/emaar", logo: "/emaar-logo.png" },
    { name: "Jubilee", href: "/developers/jubilee", logo: "/jubilee-logo.png" },
    { name: "SBI Homes", href: "/developers/sbi", logo: "/sbi-logo.png" },
    { name: "Horizon Group", href: "/developers/horizon", logo: "/horizon-logo.png" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
        pathname === '/' 
          ? scrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-transparent backdrop-blur-sm'
          : 'bg-white shadow-sm'
      }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={closeAllDropdowns}>
              <Image
                src="/logo.png"
                alt="Elite Properties"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent hidden lg:inline-block">
                Properties
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors flex items-center group"
              onClick={closeAllDropdowns}
            >
              <Home className="h-4 w-4 mr-1 group-hover:text-blue-600 transition-colors" />
              Home
            </Link>

            {/* Properties Dropdown */}
            <div
              className="relative"
              ref={propertiesRef}
              onMouseEnter={() => setActiveDropdown("properties")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors group"
              >
                <Building className="h-4 w-4 mr-1 group-hover:text-blue-600 transition-colors" />
                <span>Properties</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "properties" ? "rotate-180 text-blue-600" : "text-gray-500"}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === "properties" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-64 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-gray-200 focus:outline-none z-50 overflow-hidden"
                  >
                    <div className="py-1">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Property Types
                      </div>
                      {propertyTypes.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeAllDropdowns}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Developers Dropdown */}
            <div
              className="relative"
              ref={developersRef}
              onMouseEnter={() => setActiveDropdown("developers")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors group"
              >
                <span>Developers</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "developers" ? "rotate-180 text-blue-600" : "text-gray-500"}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === "developers" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-72 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-gray-200 focus:outline-none z-50 overflow-hidden"
                  >
                    <div className="py-1">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Our Partners
                      </div>
                      {developers.map((developer) => (
                        <Link
                          key={developer.name}
                          href={developer.href}
                          onClick={closeAllDropdowns}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <div className="relative h-5 w-5 mr-3">
                            <Image
                              src={developer.logo}
                              alt={developer.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          {developer.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={closeAllDropdowns}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={closeAllDropdowns}
            >
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-600">
              <Search className="h-4 w-4" />
            </Button>

            <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white shadow-lg shadow-blue-500/20">
              <Phone className="mr-2 h-4 w-4" />
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-xl overflow-hidden"
            ref={mobileMenuRef}
          >
            <div className="container mx-auto px-4 py-2">
              {/* Search Bar */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search properties..."
                  className="pl-10 w-full"
                />
              </div>

              <div className="flex flex-col space-y-1 pb-3">
                <Link
                  href="/"
                  onClick={closeAllDropdowns}
                  className="flex items-center px-3 py-3 text-base font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  <Home className="h-5 w-5 mr-2" />
                  Home
                </Link>

                <button
                  onClick={() => setActiveDropdown(activeDropdown === "mobile-properties" ? null : "mobile-properties")}
                  className="flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <Building className="h-5 w-5 mr-2" />
                    Properties
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "mobile-properties" ? "rotate-180 text-blue-600" : "text-gray-500"}`} />
                </button>

                {activeDropdown === "mobile-properties" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 space-y-1 ml-5 border-l-2 border-gray-100"
                  >
                    {propertyTypes.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeAllDropdowns}
                        className="flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      >
                        {item.icon}
                        <span className="ml-2">{item.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}

                <button
                  onClick={() => setActiveDropdown(activeDropdown === "mobile-developers" ? null : "mobile-developers")}
                  className="flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  <span>Developers</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "mobile-developers" ? "rotate-180 text-blue-600" : "text-gray-500"}`} />
                </button>

                {activeDropdown === "mobile-developers" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 space-y-1 ml-5 border-l-2 border-gray-100"
                  >
                    {developers.map((developer) => (
                      <Link
                        key={developer.name}
                        href={developer.href}
                        onClick={closeAllDropdowns}
                        className="flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      >
                        <div className="relative h-5 w-5 mr-2">
                          <Image
                            src={developer.logo}
                            alt={developer.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        {developer.name}
                      </Link>
                    ))}
                  </motion.div>
                )}

                <Link
                  href="/about"
                  onClick={closeAllDropdowns}
                  className="px-3 py-3 text-base font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  onClick={closeAllDropdowns}
                  className="px-3 py-3 text-base font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  Contact
                </Link>
              </div>

              <div className="border-t border-gray-200 pt-4 pb-2">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white shadow-lg shadow-blue-500/20">
                  <Phone className="mr-2 h-4 w-4" />
                  Enquire Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}