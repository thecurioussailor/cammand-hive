"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/", label: "New Project" },
    { href: "/chat", label: "Chat" },
    { href: "/myservers", label: "My Servers" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/showcase", label: "Showcase" },
  ];
const Navbar = () => {
    const pathname = usePathname()
  return (
    <nav className="fixed flex justify-between items-center top-0 left-0 right-0 z-50 px-8 h-[72px] bg-white">
        <div className="flex">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Command Hive Logo" width={28} height={28} priority />
            <span className="text-[24px] font-bold text-[#14110E]">Command Hive</span>
          </Link>
        </div>
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
                {navItems.map((item) => (
                    <Link 
                        href={item.href} 
                        key={item.href} 
                        className={`text-[16px] rounded-lg px-4 py-2 transition-all duration-300 ease-in-out font-semibold hover:bg-slate-100 text-gray-500 ${pathname === item.href ? "text-gray-800" : ""}`}>
                        {item.label}
                    </Link>
                ))}
            </div>
            <div className="hidden items-center gap-4 md:flex">
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
    </nav>
  )
}

export default Navbar