# [ WAM.dev ] — Portfólio Willians Martins

> Portfólio pessoal de **Willians Alves Martins** — Analista de Tecnologia da Informação · Brasília, DF

🔗 **[martinswillians.github.io/paginapessoal](https://martinswillians.github.io/paginapessoal/)**

---

## 📋 Sobre o projeto

Site portfólio desenvolvido em **HTML, CSS e JavaScript puro** (sem frameworks), hospedado via **GitHub Pages**. Apresenta trajetória profissional, projetos, artigos técnicos, habilidades e formulário de contato integrado com notificações em tempo real.

---

## ✨ Funcionalidades

### 🎨 Visual & UX
- **Splash screen** animada na entrada com barra de progresso
- **Cursor personalizado** com ponto + anel com efeito lag/delay
- **Partículas interativas** no hero (canvas HTML5, rede de constelação)
- **Dark / Light mode** com persistência via `localStorage`
- **Foto circular** com borda giratória em gradiente animado + ponto orbital
- **Scroll reveal** — seções entram com fade + slide ao rolar
- **Typewriter** no hero alternando entre os papéis profissionais
- **Botão voltar ao topo** + **botão compartilhar** (Web Share API)

### 📱 Mobile
- **Menu hamburguer** com drawer fullscreen
- **Carrosséis com swipe** horizontal em 5 seções (Projetos, Blog, GitHub, Sites, Depoimentos)
- **Dots indicadores** sincronizados com o scroll de cada carrossel
- Layout totalmente **responsivo** para todos os tamanhos de tela

### 📄 Conteúdo
| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação, foto, contatos rápidos e botão Baixar CV |
| **Sobre** | Resumo profissional, stats animados e skills com barras |
| **Projetos** | SISPA, Portal Telebrás, BNB, TJCE com cards visuais |
| **Blog** | 3 artigos técnicos com modal de leitura completa |
| **Depoimentos** | Cards de recomendações profissionais |
| **GitHub** | 6 repositórios com dados ao vivo da API do GitHub |
| **Sites** | 8 sites desenvolvidos com preview em hover |
| **Trajetória** | Timeline animada com Dataprev, Engesoftware, Wise Up |
| **Formação** | Graduação, pós-graduação e certificações |
| **Contato** | Formulário + mapa de Brasília + links diretos |

### ⚙️ Técnico
- **Formulário** via [Web3Forms](https://web3forms.com) com notificação no **WhatsApp** (CallMeBot API)
- **Google Analytics GA4** (`G-N1T7YRMLEC`) com eventos customizados
- **GitHub API** para dados ao vivo dos repositórios (estrelas, linguagem, último commit)
- **Preview de sites** via [thum.io](https://thum.io) screenshot service
- **Mapa** via OpenStreetMap embed
- `loading="lazy"` em todas as imagens
- `@media print` otimizado para gerar PDF/CV limpo
- **SEO completo**: meta tags, Open Graph, Twitter Card, favicon SVG inline
- `sitemap.xml` e `robots.txt` incluídos

---

## 🗂️ Estrutura de arquivos

```
paginapessoal/
├── index.html          ← Site completo (HTML + CSS + JS em arquivo único)
├── sitemap.xml         ← Mapa do site para indexação no Google
├── robots.txt          ← Instruções para crawlers
├── og-image.jpg        ← Imagem de preview para compartilhamento (1200×630px)
└── README.md           ← Este arquivo
```

> ⚠️ **Nota:** `og-image.jpg` precisa ser criada e adicionada manualmente para que o preview funcione no LinkedIn e WhatsApp.

---

## 🚀 Como usar / Deploy

O site é 100% estático — basta hospedar o `index.html` em qualquer servidor.

### GitHub Pages (recomendado)
1. Faça o fork ou clone do repositório
2. Vá em **Settings → Pages**
3. Em **Source**, selecione `main` branch, pasta `/ (root)`
4. Acesse em `https://seu-usuario.github.io/paginapessoal/`

### Atualizar o site
1. Edite o `index.html` localmente
2. Faça commit e push para o repositório
3. O GitHub Pages atualiza automaticamente em ~30 segundos

---

## 🔧 Configurações necessárias

### Google Analytics
Substitua o Measurement ID caso queira usar sua própria conta:
```html
<!-- No <head> do index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N1T7YRMLEC"></script>
```

### Formulário de Contato (Web3Forms)
```javascript
// Na função sendMsg() — já configurado
access_key: 'f682c741-7e71-4068-989d-7584d266b275'
```

### Notificação WhatsApp (CallMeBot)
```javascript
// Já ativo — para trocar o número:
// phone=556174037037 → seu número com código do país
// apikey=6972185    → sua chave da CallMeBot
fetch('https://api.callmebot.com/whatsapp.php?phone=556174037037&text='+waTxt+'&apikey=6972185')
```
Para ativar em outro número: envie `I allow callmebot to send me messages` para **+34 644 63 77 06** no WhatsApp.

### Sitemap
Após o deploy, registre o sitemap no **Google Search Console**:
1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione a propriedade `martinswillians.github.io/paginapessoal`
3. Em **Sitemaps**, adicione `sitemap.xml`

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estrutura e semântica |
| CSS3 | Estilos, animações, variáveis, grid, flexbox |
| JavaScript (ES6+) | Interatividade, APIs, animações |
| Canvas API | Partículas do hero |
| Intersection Observer API | Scroll reveal e skill bars |
| Web Share API | Botão compartilhar |
| GitHub API | Dados ao vivo dos repositórios |
| Web3Forms | Backend do formulário de contato |
| CallMeBot API | Notificação WhatsApp |
| OpenStreetMap | Mapa da seção de contato |
| Google Analytics GA4 | Métricas e eventos |
| Devicons CDN | Ícones das tecnologias |
| thum.io | Screenshots dos sites em hover |
| Google Fonts | DM Serif Display, DM Sans, JetBrains Mono |

---

## 📊 Performance & SEO

- ✅ Favicon SVG inline (sem dependência externa)
- ✅ Open Graph completo (LinkedIn, WhatsApp, Facebook)
- ✅ Twitter Card `summary_large_image`
- ✅ Meta description, keywords, robots, canonical
- ✅ `loading="lazy"` em todas as imagens
- ✅ `@media print` para impressão/PDF limpo
- ✅ Sitemap XML registrado no Google Search Console
- ✅ Google Analytics GA4 com eventos customizados

---

## 📬 Contato

**Willians Alves Martins**
- 🔗 [linkedin.com/in/willians-martins-11157313](https://www.linkedin.com/in/willians-martins-11157313/)
- 🐙 [github.com/Martinswillians](https://github.com/Martinswillians)
- 📧 willansmartins.arquienge@gmail.com
- 📱 (61) 97403-7037

---

## 📝 Licença

Este projeto é de uso pessoal. O código pode ser usado como referência e aprendizado, desde que os créditos sejam mantidos.

---

<div align="center">

Desenvolvido com ☕ e muito CSS por **Willians Martins**

*V13 — Maio 2026*

</div>
