# Portfólio Pessoal — Engenharia de Software

Site estático com 4 seções obrigatórias da atividade: **Sobre Mim**, **Formação**, **Portfólio** e **Contato**.

## Arquivos
- `index.html` — estrutura do site
- `estilo.css` — visual (tema claro, com toques de "terminal/dev")
- `script.js` — menu mobile, efeito de digitação, navegação ativa e validação do formulário

## 1. Conteúdo já personalizado ✅
Os arquivos já estão com os dados do Felipe Pereira São Nicolau (nome, formação, contato). Falta só:
- Trocar o "Ver site ↗" do card de projeto pelo link real depois de publicar no GitHub Pages
- Adicionar sua foto na seção Sobre Mim (troque a div `.about__photo` por uma `<img src="sua-foto.jpg">`)

> O formulário de contato é só front-end (sem servidor). Ele valida os campos e mostra uma mensagem de sucesso, mas não envia email de verdade. Se quiser envio real, é possível integrar gratuitamente com [Formspree](https://formspree.io) ou [EmailJS](https://www.emailjs.com) depois.

## 2. Suba para o GitHub
```bash
cd portfolio
git init
git add .
git commit -m "primeira versão do portfólio"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

## 3. Publique no GitHub Pages
1. No repositório no GitHub, vá em **Settings → Pages**.
2. Em "Source", selecione a branch `main` e a pasta `/ (root)`.
3. Salve e aguarde alguns minutos. O link ficará algo como:
   `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`
4. **Importante** (conforme o enunciado): teste o link em uma aba anônima para garantir que ele abre direto no navegador, sem precisar de `localhost`.

## 4. Para a entrega no Word
- Cole o link publicado e o link do repositório no item 1 do documento.
- Tire um print da estrutura de pastas (Explorer ou VS Code) para o item 2.
- Tire prints das 4 seções do site **com a barra de endereço visível** (sem `127.0.0.1`/`localhost`) para o item 3.
- Só cole o código-fonte no item 4 se não conseguir publicar o site.
