// Função para abrir WhatsApp com mensagem pré-definida para supermercado
function openWhatsApp() {
  const phoneNumber = "5511333344444";
  const message = encodeURIComponent(
    "Olá! 👋\n\n" +
      "Gostaria de fazer um pedido no SuperMart! 🛒\n\n" +
      "Poderia me ajudar com:\n" +
      "• Informações sobre produtos disponíveis\n" +
      "• Preços e promoções atuais\n" +
      "• Horários de entrega na minha região\n" +
      "• Formas de pagamento aceitas\n\n" +
      "Aguardo seu retorno! 😊"
  );

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");
}

// Função para redirecionar para redes sociais
function abrirRedeSocial(platform) {
  const urls = {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  };

  if (platform === "whatsapp") {
    openWhatsApp();
  } else if (urls[platform]) {
    window.open(urls[platform], "_blank");
  }
}

// Menu Mobile Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }
});

// Scroll suave para seções
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Efeito de scroll no header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "white";
    header.style.backdropFilter = "none";
  }
});

// Animação de entrada dos elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observar elementos para animação
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".promocao-card, .jornal-card, .categoria-card, .produto-card, .feature, .info-card"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Efeito de parallax suave no hero
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector(".hero-image img");
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

// Função para detectar dispositivo móvel
function isMobile() {
  return window.innerWidth <= 768;
}

// Ajustar comportamentos para mobile
window.addEventListener("resize", function () {
  if (!isMobile()) {
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");

    if (navMenu && hamburger) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  }
});

// Adicionar estilos para animações
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .loading {
        opacity: 0.7;
        pointer-events: none;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);
