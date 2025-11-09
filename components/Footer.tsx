export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800 text-gray-300 py-12 px-6 md:px-16 text-sm">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* COLUNA 1 - Credibilidade */}
                <div>
                    <h4 className="text-white font-semibold mb-3 uppercase tracking-wide">
                        Credibilidade e Compliance
                    </h4>
                    <ul className="space-y-1 text-gray-400">
                        <li>OAB/BA 87995</li>
                        <li>CNPJ: 55.514.360/0001-01</li>
                        <li>Vitória da Conquista/BA</li>
                    </ul>
                </div>

                {/* COLUNA 2 - Contato e horários */}
                <div>
                    <h4 className="text-white font-semibold mb-3 uppercase tracking-wide">
                        Contato e Horários
                    </h4>
                    <ul className="space-y-1 text-gray-400">
                        <li>
                            Telefone/WhatsApp:{" "}
                            <a
                                href="https://wa.me/5569992638989"
                                target="_blank"
                                className="text-gray-200 hover:text-gray-100 transition"
                            >
                                (69) 99263-8989
                            </a>
                        </li>
                        <li>
                            E-mail:{" "}
                            <a
                                href="mailto:advogado@leolima.adv.br"
                                className="text-gray-200 hover:text-gray-100 transition"
                            >
                                advogado@leolima.adv.br
                            </a>
                        </li>
                        <li>Atendimento: seg–sex, 8h–18h</li>
                        <li>Plantão: sob disponibilidade</li>
                    </ul>
                </div>

                {/* COLUNA 3 - Links */}
                <div>
                    <h4 className="text-white font-semibold mb-3 uppercase tracking-wide">
                        Links
                    </h4>
                    <ul className="space-y-1 text-gray-400">
                        <li>
                            <a href="/#sobre" className="hover:text-gray-200 transition">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="/#defesa" className="hover:text-gray-200 transition">
                                Defesa imediata
                            </a>
                        </li>
                        <li>
                            <a href="/termos-de-uso" className="hover:text-gray-200 transition">
                                Termos de Uso
                            </a>
                        </li>
                        <li>
                            <a href="/privacidade" className="hover:text-gray-200 transition">
                                Privacidade (LGPD)
                            </a>
                        </li>
                        <li>
                            <a href="/aviso-legal" className="hover:text-gray-200 transition">
                                Aviso Legal
                            </a>
                        </li>
                    </ul>
                </div>

                {/* COLUNA 4 - Aviso legal */}
                <div>
                    <h4 className="text-white font-semibold mb-3 uppercase tracking-wide">
                        Aviso
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                        Conteúdo informativo. Não substitui consulta jurídica individualizada. Cada caso deve ser analisado conforme suas particularidades.
                    </p>
                </div>
            </div>

            {/* LINHA INFERIOR */}
            <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
                © 2025 Dr. Leonardo Lima — Todos os direitos reservados.
            </div>
        </footer>
    );
}
