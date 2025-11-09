export const metadata = {
  title: "Política de Privacidade (LGPD) | Dr. Leonardo Lima",
  description:
    "Política de Privacidade conforme a LGPD do site do advogado criminalista Dr. Leonardo Lima (OAB/BA 87995).",
};

export default function PrivacidadePage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          Política de Privacidade (LGPD)
        </h1>
        <p className="text-gray-400 mb-10">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="prose prose-invert prose-headings:font-bold prose-p:leading-relaxed">
          <h2>1. Controlador dos Dados</h2>
          <p>
            O controlador dos dados pessoais coletados neste site é o advogado Dr. Leonardo Lima —
            OAB/BA 87995.
          </p>

          <h2>2. Dados Coletados</h2>
          <p>
            Podemos coletar dados de contato (nome, e-mail, telefone), informações enviadas via
            formulários e metadados técnicos (IP, dispositivo, navegador) para segurança e melhoria
            do serviço.
          </p>

          <h2>3. Bases Legais</h2>
          <p>
            Tratamos dados com base no consentimento, execução de contrato, cumprimento de
            obrigação legal e legítimo interesse, conforme os arts. 7º e 11 da LGPD.
          </p>

          <h2>4. Finalidades</h2>
          <ul>
            <li>Responder solicitações de contato e agendamentos;</li>
            <li>Prestar informações sobre serviços jurídicos;</li>
            <li>Garantir segurança e prevenção à fraude;</li>
            <li>Melhorar a experiência de navegação e desempenho do site.</li>
          </ul>

          <h2>5. Compartilhamento</h2>
          <p>
            Dados podem ser compartilhados com prestadores de serviço (hospedagem, e-mail,
            analytics) sob contratos que asseguram confidencialidade e proteção de dados.
          </p>

          <h2>6. Direitos do Titular</h2>
          <p>
            Você pode solicitar confirmação de tratamento, acesso, correção, anonimização,
            portabilidade, eliminação e informação sobre compartilhamentos, além de revogar
            consentimentos a qualquer momento.
          </p>

          <h2>7. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger os dados pessoais contra
            acessos não autorizados, incidentes e uso indevido.
          </p>

          <h2>8. Retenção</h2>
          <p>
            Os dados são mantidos apenas pelo tempo necessário às finalidades informadas e conforme
            exigências legais e regulatórias aplicáveis.
          </p>

          <h2>9. Cookies e Tecnologias Semelhantes</h2>
          <p>
            Utilizamos tecnologias para estatísticas de uso e melhoria do site. Você pode gerenciar
            preferências no navegador.
          </p>

          <h2>10. Contato do DPO/Encarregado</h2>
          <p>
            E-mail para privacidade e proteção de dados: {" "}
            <a className="text-gray-300 underline" href="mailto:advogado@leolima.adv.br">
              advogado@leolima.adv.br
            </a>
            .
          </p>

          <h2>11. Alterações desta Política</h2>
          <p>
            Esta Política pode ser atualizada a qualquer momento. Publicaremos a nova versão nesta
            página com a data de atualização.
          </p>
        </div>
      </section>
    </main>
  );
}
