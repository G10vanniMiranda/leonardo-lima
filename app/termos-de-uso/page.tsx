export const metadata = {
  title: "Termos de Uso | Dr. Leonardo Lima",
  description:
    "Termos de Uso do site do advogado criminalista Dr. Leonardo Lima (OAB/BA 87995). Regras de uso, responsabilidades e limitações.",
};

export default function TermosDeUsoPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          Termos de Uso
        </h1>
        <p className="text-gray-400 mb-10">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="prose prose-invert prose-headings:font-bold prose-p:leading-relaxed">
          <h2>1. Aceitação</h2>
          <p>
            Ao acessar e utilizar este site, você concorda com estes Termos de Uso e com as
            legislações aplicáveis. Caso não concorde, interrompa o uso imediatamente.
          </p>

          <h2>2. Conteúdo Informativo</h2>
          <p>
            As informações aqui disponibilizadas possuem caráter meramente informativo e não
            constituem orientação jurídica individualizada. Cada caso exige avaliação técnica
            específica.
          </p>

          <h2>3. Propriedade Intelectual</h2>
          <p>
            Marcas, textos, imagens, layouts e demais conteúdos são protegidos por direitos de
            propriedade intelectual. É vedada a reprodução sem autorização prévia e por escrito.
          </p>

          <h2>4. Conduta do Usuário</h2>
          <p>
            É proibido usar o site para fins ilícitos, ofensivos, que atentem contra a moral ou que
            possam afetar a disponibilidade, integridade e segurança do serviço.
          </p>

          <h2>5. Limitação de Responsabilidade</h2>
          <p>
            Embora envidemos esforços para manter as informações atualizadas e corretas, não nos
            responsabilizamos por perdas decorrentes do uso do conteúdo aqui apresentado.
          </p>

          <h2>6. Links Externos</h2>
          <p>
            Este site pode conter links para páginas de terceiros. Não endossamos nem nos
            responsabilizamos por conteúdos, políticas e práticas desses sites.
          </p>

          <h2>7. Alterações destes Termos</h2>
          <p>
            Podemos atualizar estes Termos de Uso a qualquer tempo para refletir mudanças legais ou
            operacionais. Recomendamos revisar periodicamente esta página.
          </p>

          <h2>8. Contato</h2>
          <p>
            Para dúvidas sobre estes Termos, entre em contato: {" "}
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
