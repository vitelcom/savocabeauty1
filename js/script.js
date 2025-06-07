document.addEventListener("DOMContentLoaded", () => {
  // ========== Menú burger ==========
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      burger.classList.toggle('open');
    });

    const links = nav.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        burger.classList.remove("open");
      });
    });
  }

  // ========== Formulaire de connexion ==========
  const connexionForm = document.getElementById("rendezvous-form");

  if (connexionForm) {
    connexionForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const identifiant = document.getElementById("identifiant").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (identifiant === "") {
        alert("Veuillez entrer votre identifiant.");
        return;
      }

      if (!validateEmail(email)) {
        alert("Veuillez entrer un email valide.");
        return;
      }

      if (password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        return;
      }

      alert("Connexion réussie !");
      connexionForm.reset();
    });
  }

  // ========== Validation email ==========
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // ========== Modale mot de passe oublié ==========
  const openModalBtn = document.getElementById("open-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const modal = document.getElementById("modal");

  if (openModalBtn && closeModalBtn && modal) {
    openModalBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // ========== Changer vers formulaire de création de compte ==========
  const showRegisterBtn = document.getElementById('show-register');
  const registerContainer = document.getElementById('register-container');
  const connexionSection = document.getElementById('connexion-section');

  if (showRegisterBtn && registerContainer && connexionSection) {
    showRegisterBtn.addEventListener('click', function (e) {
      e.preventDefault();
      registerContainer.classList.remove('hidden');
      connexionSection.classList.add('hidden');
    });
  }

  // ========== Création de compte ==========
  const registerForm = document.getElementById('register-form');

  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const prenom = document.getElementById('prenom').value.trim();
      const nom = document.getElementById('nom').value.trim();
      const email = document.getElementById('register-email').value.trim();
      const password = document.getElementById('register-password').value.trim();

      if (prenom === '' || nom === '' || email === '' || password === '') {
        alert('Veuillez remplir tous les champs.');
        return;
      }

      if (!validateEmail(email)) {
        alert("L'adresse email n'est pas valide.");
        return;
      }

      if (password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        return;
      }

      alert(`Bienvenue ${prenom} ! Votre compte a été créé avec succès.`);
      registerForm.reset();

      // Revenir au formulaire de connexion
      registerContainer.classList.add('hidden');
      connexionSection.classList.remove('hidden');
    });
  }

  // ========== Fade-in animation ==========
  const fadeElements = document.querySelectorAll('.fade-in-bottom');
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // ========== Bandeau de cookies ==========
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesBtn = document.getElementById("accept-cookies");

  if (cookieBanner) {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (cookiesAccepted === "true") {
      cookieBanner.style.display = "none";
    } else {
      cookieBanner.style.display = "flex";

      if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener("click", () => {
          localStorage.setItem("cookiesAccepted", "true");
          cookieBanner.style.display = "none";
        });
      }
    }
  }
});