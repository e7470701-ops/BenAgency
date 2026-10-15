(function () {
  "use strict";
  // Add the official WhatsApp number here in international format, digits only.
  // Example format: 229XXXXXXXX. Keep empty until BenAgency confirms its number.
  var WHATSAPP_NUMBER = "2290144396710";
  var menuButton = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");
  var toast = document.getElementById("site-toast");
  var form = document.getElementById("contact-form");
  var feedback = document.getElementById("form-feedback");
  var toastTimer;

  document.getElementById("year").textContent = String(new Date().getFullYear());

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("show");
    }, 5000);
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      var isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("open", !isOpen);
      menuButton.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Ouvrir le menu");
      });
    });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      var name = document.getElementById("contact-name").value.trim();
      var activity = document.getElementById("contact-type").value;
      var need = document.getElementById("contact-need").value.trim();
      var message = "Bonjour BenAgency !\n\nJe souhaite discuter d'un projet.\nNom / entreprise : " + name + "\nActivité : " + activity + "\nMon besoin : " + need;
      if (!WHATSAPP_NUMBER) {
        feedback.textContent = "Votre demande est prête. WhatsApp va s’ouvrir pour vous permettre de vérifier puis envoyer le message.";
        showToast("Ouverture de WhatsApp en cours.");
        feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
        return;
      }
      var digits = WHATSAPP_NUMBER.replace(/\D/g, "");
      if (digits.length < 8) {
        feedback.textContent = "Le numéro WhatsApp configuré semble incomplet. Vérifiez-le avant de publier le site.";
        showToast("Vérifiez le numéro WhatsApp dans script.js.");
        return;
      }
      window.open("https://wa.me/" + digits + "?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
      feedback.textContent = "WhatsApp s'est ouvert avec votre demande préparée. Vérifiez le message puis envoyez-le.";
    });
  }

  document.querySelectorAll('a[href="#contact"], a[href="#demande"]').forEach(function (link) {
    link.addEventListener("click", function () {
      var target = document.querySelector(link.getAttribute("href"));
      if (target) target.setAttribute("tabindex", "-1");
    });
  });
})();