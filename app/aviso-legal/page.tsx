export const metadata = {
  title: "Aviso Legal | Dr. Leonardo Lima",
  description:
    "Aviso legal e isenções de responsabilidade do site do advogado criminalista Dr. Leonardo Lima (OAB/BA 87995).",
};

export default function AvisoLegalPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          Aviso Legal
        </h1>
        <p className="text-gray-400 mb-10">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="prose prose-invert prose-headings:font-bold prose-p:leading-relaxed">
          <h2>Conteúdo Informativo</h2>
          <p>
            O conteúdo deste site tem caráter meramente informativo e educacional. Não substitui uma
            consulta jurídica formal, tampouco cria relação advogado-cliente.
          </p>

          <h2>Sem Garantias</h2>
          <p>
            Embora busquemos oferecer informações precisas e atualizadas, não garantimos
            integralidade, exatidão ou atualização dos conteúdos publicados.
          </p>

          <h2>Resultados Variam</h2>
          <p>
            Cada caso possui particularidades. Resultados mencionados em textos, notícias ou
            publicações passadas não garantem resultados semelhantes em casos futuros.
          </p>

          <h2>Comunicação</h2>
          <p>
            O envio de mensagens por formulários ou aplicativos (como WhatsApp) não cria vínculo
            profissional automático. O atendimento e a contratação dependem de avaliação e aceite.
          </p>

          <h2>Responsabilidade</h2>
          <p>
            Em nenhuma hipótese seremos responsáveis por danos diretos ou indiretos decorrentes do
            acesso, uso ou incapacidade de uso deste site.
          </p>

          <h2>Contato</h2>
          <p>
            Em caso de dúvidas sobre este Aviso Legal, escreva para {" "}
            <a className="text-gray-300 underline" href="mailto:advogado@leolima.adv.br">
              advogado@leolima.adv.br
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
