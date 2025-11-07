"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-10 md:px-16 py-2 border-b border-gray-800 bg-black/70 backdrop-blur-xl fixed w-full top-0 z-50">
            {/* Logo do escritório */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                <Link href="/" aria-label="Página inicial">
                    <Image
                        src="/logo.png"
                        alt="Leonardo Lima — OAB 87995/BA"
                        width={220}
                        height={56}
                        priority
                        className="h-20 w-auto sm:h-25 md:h-25"
                    />
                </Link>
            </motion.div>

            {/* CTA WhatsApp */}
            <motion.a
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                href="https://wa.me/5569992638989"
                target="_blank"
                className="px-5 py-2 bg-linear-to-r from-gray-700 to-gray-500 rounded-xl text-white font-semibold hover:scale-105 hover:shadow-[0_0_15px_#555] transition-all"
            >
                Fale Agora
            </motion.a>
        </header>
    );
}
