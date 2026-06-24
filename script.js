// =========================================================
// ANO NO FOOTER
// =========================================================
document.getElementById('ano').textContent = new Date().getFullYear();

// =========================================================
// MENU MOBILE
// =========================================================
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// =========================================================
// LINK ATIVO NA NAVEGAÇÃO CONFORME O SCROLL
// =========================================================
const sections = document.querySelectorAll('main .section');
const navLinks = document.querySelectorAll('.nav__link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.dataset.section === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));

// =========================================================
// EFEITO DE "DIGITAÇÃO" NO TERMINAL DO HERO
// =========================================================
const typedEl = document.getElementById('typedLine');
const linhas = [
  'whoami',
  'echo "Felipe Pereira — Eng. de Software"',
  'git log --oneline -3'
];
let linhaAtual = 0;
let charAtual = 0;
let apagando = false;

function digitar() {
  const texto = linhas[linhaAtual];

  if (!apagando) {
    typedEl.textContent = texto.slice(0, charAtual + 1);
    charAtual++;
    if (charAtual === texto.length) {
      apagando = true;
      setTimeout(digitar, 1400);
      return;
    }
  } else {
    typedEl.textContent = texto.slice(0, charAtual - 1);
    charAtual--;
    if (charAtual === 0) {
      apagando = false;
      linhaAtual = (linhaAtual + 1) % linhas.length;
    }
  }

  setTimeout(digitar, apagando ? 30 : 60);
}

if (typedEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  digitar();
} else if (typedEl) {
  typedEl.textContent = linhas[0];
}

// =========================================================
// VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// =========================================================
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

function mostrarErro(inputId, erroId, mensagem) {
  const input = document.getElementById(inputId);
  const erro = document.getElementById(erroId);
  input.classList.toggle('is-invalid', Boolean(mensagem));
  erro.textContent = mensagem || '';
}

function emailValido(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  let valido = true;

  if (nome.length < 2) {
    mostrarErro('nome', 'erroNome', 'Digite seu nome completo.');
    valido = false;
  } else {
    mostrarErro('nome', 'erroNome', '');
  }

  if (!emailValido(email)) {
    mostrarErro('email', 'erroEmail', 'Digite um email válido.');
    valido = false;
  } else {
    mostrarErro('email', 'erroEmail', '');
  }

  if (mensagem.length < 10) {
    mostrarErro('mensagem', 'erroMensagem', 'Escreva uma mensagem com pelo menos 10 caracteres.');
    valido = false;
  } else {
    mostrarErro('mensagem', 'erroMensagem', '');
  }

  if (!valido) {
    feedback.textContent = 'Verifique os campos destacados.';
    feedback.className = 'form__feedback is-error';
    return;
  }

  // Não há backend neste site estático: aqui simulamos o envio.
  // Para enviar de verdade, integre um serviço como Formspree ou EmailJS.
  feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi registrada.`;
  feedback.className = 'form__feedback is-success';
  form.reset();
});
