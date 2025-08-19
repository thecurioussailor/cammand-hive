"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from 'framer-motion'
import { Rows3Icon, X } from 'lucide-react'


const navItems = [
  { href: "/", label: "New Project" },
  { href: "/chat", label: "Chat" },
  { href: "/myservers", label: "My Servers" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/showcase", label: "Showcase" },
]

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Smoother visibility logic for mobile
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setVisible(false)
        setIsMenuOpen(false)
      }
      
      setScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const closeMenus = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`fixed flex justify-between items-center top-0 left-0 right-0 z-50 px-8 h-[72px] transition-all duration-500 ease-out ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm' 
            : 'bg-white border-b border-transparent'
        }`}
        initial={{ y: 0 }}
        animate={{ 
          y: visible ? 0 : -100
        }}
        transition={{ 
          y: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
        }}
      >
        <div className="flex">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Command Hive Logo" width={28} height={28} priority />
            <span className="text-[24px] font-bold text-[#14110E]">Command Hive</span>
          </Link>
        </div>

        {/* Desktop Navigation & Auth - Unchanged */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={`text-[16px] rounded-lg px-4 py-2 transition-all duration-300 ease-in-out font-semibold text-gray-500 ${pathname === item.href ? "bg-slate-100 text-gray-800" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 md:hidden transition-all duration-300 ease-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Rows3Icon className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-[72px] left-0 right-0 z-40 border-t border-gray-200/50 bg-white/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mx-auto max-w-7xl px-8 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: index * 0.08,
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenus}
                      className={`block px-4 py-3 text-base rounded-lg transition-all duration-300 ease-out ${
                        pathname === item.href
                          ? 'text-gray-900 font-extrabold bg-slate-100'
                          : 'text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-100/80'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  className="pt-3 border-t border-gray-200/50 mt-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    delay: navItems.length * 0.08,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <motion.div whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/signin"
                        onClick={closeMenus}
                        className="block w-full px-4 py-3 text-base font-medium text-gray-600 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-300 ease-out text-center"
                      >
                        Sign In
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/signup"
                        onClick={closeMenus}
                        className="block w-full px-4 py-3 text-base font-medium text-white rounded-lg bg-slate-900 hover:bg-slate-800 transition-all duration-300 ease-out text-center"
                      >
                        Sign Up
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar