"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

// Import dinâmico do componente Particles (evita SSR)
const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });
import { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function Home() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    // Inicializa o engine do tsParticles uma única vez
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => setEngineReady(true));
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* ANIMAÇÃO DE FUNDO */}
      <div className="absolute inset-0 -z-10">
        {engineReady && (
          <Particles
            id="tsparticles"
            options={{
              fullScreen: { enable: false },
              background: { color: { value: "#000" } },
              fpsLimit: 60,
              particles: {
                color: { value: "#777" },
                links: { color: "#444", distance: 150, enable: true, opacity: 0.3 },
                move: { enable: true, speed: 1 },
                number: { value: 60 },
                opacity: { value: 0.4 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
              },
              detectRetina: true,
            }}
          />
        )}
      </div>

      {/* HEADER agora está no layout global */}

      {/* SEÇÃO 1 */}
      <section className="pt-32 pb-16 relative flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16">
        {/* OVERLAY DO TEXTO (SEÇÃO 1)
            - Mobile: este bloco fica sobre a imagem
            - AJUSTE A POSIÇÃO VERTICAL: altere o valor de 'top-[60%]' abaixo
              Ex.: top-[55%] (sobe um pouco) | top-[65%] (abaixa um pouco)
            - Se quiser que o ponto de ancoragem seja no CENTRO do bloco, mantenha '-translate-y-1/2'.
              Para ancorar pelo topo, remova '-translate-y-1/2'.
        */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 right-0 top-[85%] -translate-y-1/2 z-10 px-4 flex items-end md:static md:translate-y-0 md:flex-1 md:px-0 md:z-auto text-center md:text-left"
        >
          {/* FUNDO EM GRADIENTE (legibilidade no mobile)
              - Ajuste a opacidade se precisar: from-black/70 -> from-black/60 ou /80
          */}
          <div className="w-full rounded-2xl md:rounded-none p-4 md:p-0 bg-linear-to-t from-black/70 to-transparent md:bg-none">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-linear-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
              Defesa Criminal <br /> com Inteligência e Tecnologia
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Atuação exclusiva na área criminal. Estratégia jurídica moderna,
              aliada à tecnologia para proteger sua liberdade.
            </p>
            <a
              href="https://wa.me/5569992638989"
              target="_blank"
              className="px-8 py-3 bg-linear-to-r from-gray-600 to-gray-400 text-black font-bold rounded-xl hover:scale-105 hover:shadow-[0_0_20px_#555] transition-all"
            >
              Falar com o Advogado
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-first md:order-0 w-full md:flex-1 flex justify-center"
        >
          {/* IMAGEM DA SEÇÃO 1 (mobile ocupa 100% de largura; md+ tamanho fixo) */}
          <div className="relative w-full h-[420px] md:w-[420px] md:h-[420px] rounded-2xl shadow-lg shadow-gray-800/50 border border-gray-700 overflow-hidden">
            <Image
              src="/advogado.png"
              alt="Foto do advogado"
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              className="object-cover hover:scale-105 transition-all"
            />
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2 */}
      <section className="relative py-24 px-8 text-center md:text-left overflow-hidden">
        {/* Vídeo de fundo suave */}
        <div className="absolute inset-0 z-0 opacity-20">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/tribunal.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Coluna da imagem (esquerda no desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className="order-2 md:order-1 flex justify-center md:justify-start"
            >
              <Image
                src="/foto2.png"
                alt="Advogado na tribuna"
                width={420}
                height={420}
                className="rounded-xl shadow-lg shadow-gray-700/30 border border-gray-700"
              />
            </motion.div>

            {/* Coluna do texto (direita no desktop) */}
            <div className="order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                Sobre o Advogado
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Advogado criminalista com experiência em casos de alta complexidade. Atua com
                comprometimento, técnica e uma visão moderna do Direito Penal. O foco é garantir a
                melhor estratégia de defesa, com atendimento humano e personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - CTA FINAL */}
      <section className="py-24 bg-linear-to-b from-black to-gray-900 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-4xl font-semibold mb-6 bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Precisa de Defesa Criminal Imediata?
          </h4>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Atendimento 24h para situações urgentes. Converse agora com o advogado e garanta seus direitos.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="https://wa.me/5569992638989"
              target="_blank"
              className="px-8 py-4 bg-linear-to-r from-gray-600 to-gray-400 text-black font-bold rounded-xl hover:scale-105 hover:shadow-[0_0_25px_#555] transition-all"
            >
              Falar Agora
            </a>
            <a
              href="#"
              className="px-8 py-4 border border-gray-600 text-white rounded-xl hover:bg-gray-800 hover:scale-105 transition-all"
            >
              Agendar Consulta
            </a>
          </div>
        </motion.div>
      </section>

      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.a
          href="https://wa.me/5569992638989"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-400/40 hover:scale-110 transition-transform"
        >
          {/* Ícone WhatsApp (SVG inline) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="24"
            height="24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.11 17.09c-.29-.15-1.68-.83-1.94-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.33.22-.61.07-.29-.15-1.21-.45-2.31-1.43-.85-.76-1.42-1.7-1.59-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.48-.17 0-.36-.02-.55-.02-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .15.19 2.01 3.24 4.88 4.41.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.68-.69 1.92-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
            <path d="M26.88 5.12C24.03 2.27 20.26.8 16.26.8 8.33.8 1.87 7.26 1.87 15.19c0 2.49.65 4.92 1.89 7.06L1 31l8.98-2.7c2.06 1.12 4.39 1.71 6.76 1.71h.01c7.93 0 14.39-6.46 14.39-14.39 0-3.99-1.56-7.77-4.26-10.51zM16.75 27.47h-.01c-2.17 0-4.29-.58-6.15-1.68l-.44-.26-5.33 1.6 1.61-5.2-.29-.46c-1.17-1.91-1.79-4.1-1.79-6.28 0-6.77 5.51-12.28 12.28-12.28 3.28 0 6.36 1.28 8.68 3.6 2.32 2.32 3.6 5.4 3.6 8.68 0 6.78-5.51 12.28-12.31 12.28z" />
          </svg>
        </motion.a>
      </div>

      {/* FOOTER agora está no layout global */}
    </main>
  );
}
