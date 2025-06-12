/**
 * CONTRAMARE - Post Reading Enhancements
 * Modern reading experience features
 */

document.addEventListener('DOMContentLoaded', function() {

  // Create and insert reading progress bar
  function createReadingProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(progressBar, document.body.firstChild);
    return progressBar;
  }

  // Update reading progress
  function updateReadingProgress() {
    const progressBar = document.querySelector('.reading-progress');
    if (!progressBar) return;

    const article = document.querySelector('.main.container');
    if (!article) return;

    const articleTop = article.offsetTop;
    const articleHeight = article.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;

    // Calculate progress
    const articleStart = articleTop - windowHeight * 0.3;
    const articleEnd = articleTop + articleHeight - windowHeight * 0.7;
    const progress = Math.max(0, Math.min(100,
      ((scrollTop - articleStart) / (articleEnd - articleStart)) * 100
    ));

    progressBar.style.width = progress + '%';
  }

  // Smooth scroll for anchor links
  function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();

          const offsetTop = targetElement.offsetTop - 80; // Account for header

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Add fade-in animation to paragraphs on scroll
  function setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe paragraphs, headings, and blockquotes
    const elementsToAnimate = document.querySelectorAll('.main.container p, .main.container h2, .main.container h3, .main.container blockquote');
    elementsToAnimate.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      observer.observe(el);
    });
  }

  // Improve image loading experience
  function setupImageEnhancements() {
    const images = document.querySelectorAll('.main.container img');

    images.forEach(img => {
      img.addEventListener('load', function() {
        this.style.animation = 'fadeInUp 0.4s ease-out';
      });

      // Add loading placeholder
      if (!img.complete) {
        img.style.opacity = '0.3';
        img.style.filter = 'blur(5px)';

        img.addEventListener('load', function() {
          this.style.opacity = '1';
          this.style.filter = 'none';
          this.style.transition = 'opacity 0.3s ease, filter 0.3s ease';
        });
      }
    });
  }

  // Add copy-to-clipboard functionality for code blocks
  function setupCodeBlockEnhancements() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(block => {
      const pre = block.parentNode;

      // Create copy button
      const copyButton = document.createElement('button');
      copyButton.innerHTML = '<i class="bi bi-clipboard"></i>';
      copyButton.className = 'code-copy-btn';
      copyButton.style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        color: #e2e8f0;
        padding: 0.25rem 0.5rem;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 0.8rem;
      `;

      copyButton.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 0.2)';
      });

      copyButton.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.1)';
      });

      copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(block.textContent).then(() => {
          this.innerHTML = '<i class="bi bi-check"></i>';
          setTimeout(() => {
            this.innerHTML = '<i class="bi bi-clipboard"></i>';
          }, 2000);
        });
      });

      pre.style.position = 'relative';
      pre.appendChild(copyButton);
    });
  }

  // Enhanced table responsiveness
  function setupTableEnhancements() {
    const tables = document.querySelectorAll('table');

    tables.forEach(table => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'overflow-x: auto; margin: 2rem 0;';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }

  // Initialize all enhancements
  function init() {
    // Only run on post pages
    if (!document.querySelector('.main.container')) return;

    createReadingProgressBar();
    setupSmoothScrolling();
    setupScrollAnimations();
    setupImageEnhancements();
    setupCodeBlockEnhancements();
    setupTableEnhancements();

    // Event listeners
    window.addEventListener('scroll', updateReadingProgress, { passive: true });
    window.addEventListener('resize', updateReadingProgress, { passive: true });
  }

  // Run initialization
  init();
});