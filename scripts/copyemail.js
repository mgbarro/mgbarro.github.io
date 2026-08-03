document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.querySelector(".copy-email-btn");
  if (!copyBtn) return;

  const label = copyBtn.querySelector(".copy-email-label");

  copyBtn.addEventListener("click", async () => {
    const email = copyBtn.dataset.email;

    // window.i18n lo expone scripts/i18n.js; si por lo que sea no está
    // cargado, se recurre al texto que ya hay en el botón como fallback.
    const defaultText = window.i18n ? window.i18n.t("contact.copy") : label.textContent;
    const copiedText = window.i18n ? window.i18n.t("contact.copied") : "¡Copiado!";

    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      // Fallback por si el navegador bloquea la Clipboard API (ej. http sin TLS)
      const tempInput = document.createElement("input");
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }

    label.textContent = copiedText;
    copyBtn.classList.add("copied");

    setTimeout(() => {
      label.textContent = defaultText;
      copyBtn.classList.remove("copied");
    }, 2000);
  });
});