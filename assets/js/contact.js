/* ================================
   CONTACT PAGE JAVASCRIPT
   ================================ */

// Analytics tracking para cliques no email
function trackEmailClick() {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', 'contact_email_click', {
      'event_category': 'engagement',
      'event_label': 'contact_page'
    });
  }

  // Console log para debug
  console.log('Email link clicked - Contact page');
}

// Função para mostrar notificações
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #2789ce;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(39, 137, 206, 0.3);
    z-index: 1000;
    animation: slideInRight 0.3s ease-out;
  `;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Inicialização quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  const emailLink = document.querySelector('.email-link');

  if (emailLink) {
    // Adicionar tooltip
    emailLink.title = 'Clique para abrir seu cliente de email';

    // Opção de copiar email (ctrl+click)
    emailLink.addEventListener('click', function(e) {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();

        // Copiar email para clipboard
        const email = 'contato@contramare.com.br';
        navigator.clipboard.writeText(email).then(function() {
          // Mostrar feedback visual
          showNotification('Email copiado para a área de transferência!');
        });
      }
    });
  }
});