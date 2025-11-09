"use client";

import { motion } from "framer-motion";

export default function TopBar() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 w-full bg-linear-to-r from-gray-900/80 via-gray-800/60 to-black/80 backdrop-blur-xl border-b border-gray-700 text-gray-300 text-sm z-60"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-center px-6 py-2">
                <span className="tracking-widest text-gray-400 text-center">
                    ⚖️ Dr. Leonardo Lima • OAB/BA 87995 — Atendimento 24h
                </span>
            </div>
        </motion.div>
    );
}
