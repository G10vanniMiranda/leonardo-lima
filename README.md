# Landing Page — Dr. Leonardo Lima (Criminalista)

Landing page moderna e focada em conversão para captação imediata via WhatsApp. Stack: Next.js + TypeScript + TailwindCSS + Framer Motion + TSParticles.

---

## 📌 Objetivo

Transmitir autoridade, rapidez na resposta (defesa imediata) e modernidade, com CTA destacado (WhatsApp 24h).

---

## 🖼️ Preview das Seções
> Insira seus prints reais em /public/preview (manter nomes):
1. Topbar (`/preview/topBar.jpg`)
2. Header (`/preview/header.jpg`)
3. Hero (`/preview/secao1.jpg`)
4. Sobre (`/preview/secao2.jpg`)
5. CTA Final (`/preview/secao3.jpg`)
6. Footer (`/preview/footer.jpg`)

---

## ⚙️ Tecnologias

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- TSParticles (efeito de fundo)
- Deploy recomendado: Vercel

---

## 🚀 Como Rodar

```bash
npm install
npm run dev
# produção
npm run build
npm start
# lint
npm run lint
```

Acesse: http://localhost:3000

---

## 📁 Estrutura /public (necessário adicionar)
```
public/
  advogado.png
  foto2.png
  tribunal.mp4
  logo.png
  preview/
    topBar.jpg
    header.jpg
    secao1.jpg
    secao2.jpg
    secao3.jpg
    footer.jpg
```

---

## 🎨 Visual / UX

- Paleta: preto/cinza + cinzas neutros.
- Estilo: tecnológico/futurista minimalista.
- Foco: CTA WhatsApp + atendimento 24h.
- Animações suaves (framer-motion).
- Preferência de acessibilidade: pode adicionar em globals.css:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

---

## 🔐 Acessibilidade / SEO

- Alt das imagens inclui nome e função (ex.: “Dr. Leonardo Lima — Advogado Criminalista”).
- Headings sem pular níveis (Hero = h2 porque o título global pode vir do layout).
- Metadados (sugestão em `app/layout.tsx`):
```ts
export const metadata = {
  title: 'Dr. Leonardo Lima | Defesa Criminal Imediata',
  description: 'Advogado criminalista OAB/BA 87995. Defesa em flagrantes e audiências de custódia. Atendimento ágil e humanizado.',
  openGraph: {
    title: 'Defesa Criminal Imediata — Dr. Leonardo Lima',
    type: 'website',
    locale: 'pt_BR',
  },
};
```

---

## 📞 Dados do Cliente

- Nome: Dr. Leonardo Lima
- OAB: OAB/BA 87995
- WhatsApp: +55 69 99263-8989 (link: https://wa.me/5569992638989)
- E-mail: advogado@leolima.adv.br
- Local: Salvador/BA — Centro

---

## 🔒 Aviso Legal (resumo)

Conteúdo informativo; não substitui consulta jurídica individualizada. Cada caso deve ser analisado de forma específica. Veja páginas: /termos-de-uso, /privacidade, /aviso-legal.

---

## ✨ Melhorias futuras (backlog)

- Depoimentos (prova social)
- Log de revisões de documentos legais
- Scroll spy (menu ativo)
- Mensagem pré-formatada no WhatsApp
- Dark/light automatico (mantendo foco escuro)

---

## 📄 Licença / Uso

Uso exclusivo do cliente (Dr. Leonardo Lima). Proibida redistribuição ou comercialização sem autorização expressa.

---

Desenvolvido por Giovanni Miranda.