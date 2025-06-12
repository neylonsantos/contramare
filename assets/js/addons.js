/**
 * Contramaré - JavaScript Addons
 * Funções auxiliares para o site
 */

// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function() {

  // Inicializa popovers do Bootstrap
  initializePopovers();

  // Adiciona listeners para melhorar a acessibilidade
  setupAccessibility();
});

/**
 * Toggle do menu de navegação mobile
 */
function show() {
  const menu = document.getElementById("menu");
  const menuBtn = document.querySelector(".menu-btn");

  if (menu) {
    menu.classList.toggle("show");

    // Adiciona classe active ao botão
    if (menuBtn) {
      if (menu.classList.contains("show")) {
        menuBtn.classList.add("active");
      } else {
        menuBtn.classList.remove("active");
      }
    }
  }
}

/**
 * Inicializa os popovers do Bootstrap
 */
function initializePopovers() {
  const popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );

  popoverTriggerList.map(function(element) {
    return new bootstrap.Popover(element);
  });
}

/**
 * Configura melhorias de acessibilidade
 */
function setupAccessibility() {
  // Permite fechar menu com tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const menu = document.getElementById("menu");
      const menuBtn = document.querySelector(".menu-btn");

      if (menu && menu.classList.contains('show')) {
        menu.classList.remove('show');
        if (menuBtn) {
          menuBtn.classList.remove('active');
        }
      }
    }
  });

  // Fecha menu ao clicar fora dele
  document.addEventListener('click', function(e) {
    const menu = document.getElementById("menu");
    const menuBtn = document.querySelector(".menu-btn");

    if (menu && menuBtn &&
        !menu.contains(e.target) &&
        !menuBtn.contains(e.target) &&
        menu.classList.contains('show')) {
      menu.classList.remove('show');
      menuBtn.classList.remove('active');
    }
  });
}