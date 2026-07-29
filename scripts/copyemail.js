document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.querySelector(".copy-email-btn");
  if (!copyBtn) return;

  const label = copyBtn.querySelector(".copy-email-label");
  const defaultText = label.textContent;

  copyBtn.addEventListener("click", async () => {
    const email = copyBtn.dataset.email;

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

    label.textContent = "¡Copiado!";
    copyBtn.classList.add("copied");

    setTimeout(() => {
      label.textContent = defaultText;
      copyBtn.classList.remove("copied");
    }, 2000);
  });
});