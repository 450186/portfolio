"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/types/NavLink";

export default function Navbar() {
    const pathName = usePathname();
    const navLinks: NavLink[] = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];
    return (
        <nav className={styles.navbar}>
            <Link  href="/" className={styles.logo}>
                Jack Simcox
            </Link>
            <div className={styles.links}>
                {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                    styles.link,
                    (
                        pathName === link.href ||
                        (link.href !== "/" && pathName.startsWith(link.href))
                    ) && styles.active
                    )}
                    >
                    {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}