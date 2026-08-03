// Sistema de localización ligero, sin dependencias externas.
// Añade nuevos idiomas agregando una clave más al objeto `translations`
// y reutilizando las mismas claves data-i18n del HTML.

const translations = {
  es: {
    "meta.description": "Portfolio de Mauro García Barro, Ingeniero Informático especializado en Data Science, sistemas virtualizados y cloud.",

    "aria.hamburger": "Abrir menú",
    "aria.theme": "Cambiar tema claro/oscuro",
    "aria.lang": "Cambiar idioma",
    "aria.sendEmail": "Enviar correo",
    "aria.github": "Perfil de GitHub",
    "aria.linkedin": "Perfil de LinkedIn",

    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    "hero.role": "Informático | Sistemas | Data Science",
    "hero.cta": "Sobre mí",

    "about.title": "Sobre mí",
    "about.text": "Soy ingeniero informático recién titulado en el Máster de Ingeniería Informática, con experiencia en Data Science, administración de entornos virtualizados, manejo de incidencias y sistemas en la nube. Persigo la <span class=\"highlight\">mejora continua</span> tanto a nivel técnico como interpersonal, y poder formar parte de proyectos que me permitan crecer y aprovechar al máximo dichos conocimientos.",
    "about.cv": "Ver CV",
    "about.skillsTitle": "Mis competencias",

    "projects.title": "Mis proyectos",
    "projects.tfg.title": "Uso de algoritmos de aprendizaje máquina para la detección de ciberacoso en redes sociales",
    "projects.tfg.desc": "Desarrollo de un <span class=\"highlight\">TFG (Trabajo de Fin de Grado)</span> sobre el contraste de varios modelos de Machine Learning a la hora de predecir el comportamiento de diferentes comentarios en la red social Vine.",
    "projects.tfm.title": "Análisis de necesidades de cómputo intensivo y despliegue de un sistema de colas en un CPD",
    "projects.tfm.desc": "<span class=\"highlight\">TFM (Trabajo de Fin de Máster)</span> elaborado en colaboración con el CITIC como propuesta para la mejora del sistema de peticiones de recursos de cómputo dentro de su infraestructura, a la vez que se lleva a cabo un análisis comparativo de la plataforma de virtualización utilizada frente a otras alternativas del sector.",
    "projects.pdf": "Descargar PDF",
    "projects.code": "Ver Código",

    "experience.title": "Formación y Experiencia",

    "timeline.degree.title": "Grado en Ingeniería Informática",
    "timeline.degree.dates": "Sept. 2019 - Jun. 2023",
    "timeline.master.title": "Máster Universitario en Ingeniería Informática",
    "timeline.master.dates": "Sept. 2023 - Jun. 2025",
    "timeline.aws.title": "Certificado AWS Cloud Practitioner",
    "timeline.aws.dates": "Dic. 2023",
    "timeline.citic.title": "Prácticas de Técnico de Sistemas",
    "timeline.citic.dates": "Sept. 2024 - Feb. 2025",
    "timeline.altia.title": "Técnico de sistemas",
    "timeline.altia.dates": "Feb. 2026 - ",

    "languages.title": "Idiomas",
    "languages.spanish": "Español",
    "languages.english": "Inglés",
    "languages.french": "Francés",
    "languages.native": "Nativo",

    "contact.title": "Contacto",
    "contact.copy": "Copiar",
    "contact.copied": "¡Copiado!",
    "contact.location": "A Coruña, España"
  },

  en: {
    "meta.description": "Portfolio of Mauro García Barro, Computer Engineer specialized in Data Science, virtualized systems and cloud.",

    "aria.hamburger": "Open menu",
    "aria.theme": "Toggle light/dark theme",
    "aria.lang": "Switch language",
    "aria.sendEmail": "Send email",
    "aria.github": "GitHub profile",
    "aria.linkedin": "LinkedIn profile",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.role": "Computer Engineer | Systems | Data Science",
    "hero.cta": "About me",

    "about.title": "About me",
    "about.text": "I'm a computer engineer who recently graduated from the Master's Degree in Computer Engineering, with experience in Data Science, virtualized environment administration, incident management and cloud systems. I pursue <span class=\"highlight\">continuous improvement</span> both technically and interpersonally, and I'm looking to join projects that let me grow and make the most of that knowledge.",
    "about.cv": "View CV",
    "about.skillsTitle": "My skills",

    "projects.title": "My projects",
    "projects.tfg.title": "Use of machine learning algorithms for cyberbullying detection in social networks",
    "projects.tfg.desc": "Development of a <span class=\"highlight\">Bachelor's Thesis</span> comparing several Machine Learning models when it comes to predicting the behavior of different comments on the Vine social network.",
    "projects.tfm.title": "Analysis of high-performance computing needs and deployment of a job queue system in a data center",
    "projects.tfm.desc": "<span class=\"highlight\">Master's Thesis</span> developed in collaboration with CITIC as a proposal to improve the system for requesting computing resources within its infrastructure, alongside a comparative analysis of the virtualization platform used against other alternatives in the field.",
    "projects.pdf": "Download PDF",
    "projects.code": "View Code",

    "experience.title": "Education & Experience",

    "timeline.degree.title": "Bachelor's Degree in Computer Engineering",
    "timeline.degree.dates": "Sep 2019 - Jun 2023",
    "timeline.master.title": "Master's Degree in Computer Engineering",
    "timeline.master.dates": "Sep 2023 - Jun 2025",
    "timeline.aws.title": "AWS Cloud Practitioner Certification",
    "timeline.aws.dates": "Dec 2023",
    "timeline.citic.title": "Systems Technician Internship",
    "timeline.citic.dates": "Sep 2024 - Feb 2025",
    "timeline.altia.title": "Systems Technician",
    "timeline.altia.dates": "Feb 2026 - ",

    "languages.title": "Languages",
    "languages.spanish": "Spanish",
    "languages.english": "English",
    "languages.french": "French",
    "languages.native": "Native",

    "contact.title": "Contact",
    "contact.copy": "Copy",
    "contact.copied": "Copied!",
    "contact.location": "A Coruña, Spain"
  }
};

function applyTranslations(lang) {
  const dict = translations[lang] || translations.es;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (dict[key] !== undefined) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  const metaDescription = document.getElementById("meta-description");
  if (metaDescription && dict["meta.description"]) {
    metaDescription.setAttribute("content", dict["meta.description"]);
  }

  document.documentElement.lang = lang;

  const toggleLangBtn = document.getElementById("toggle-lang");
  if (toggleLangBtn) {
    // Muestra el idioma AL QUE SE CAMBIARÍA al pulsar, no el actual.
    toggleLangBtn.textContent = lang === "es" ? "EN" : "ES";
  }
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyTranslations(lang);
}

function getInitialLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "es" || saved === "en") return saved;

  const browserLang = (navigator.language || "es").slice(0, 2);
  return browserLang === "en" ? "en" : "es";
}

document.addEventListener("DOMContentLoaded", () => {
  const currentLang = getInitialLang();
  applyTranslations(currentLang);

  const toggleLangBtn = document.getElementById("toggle-lang");
  if (toggleLangBtn) {
    toggleLangBtn.addEventListener("click", () => {
      const newLang = (localStorage.getItem("lang") || currentLang) === "es" ? "en" : "es";
      setLang(newLang);
    });
  }
});

// Expuesto para que otros scripts (p. ej. copyemail.js) puedan
// consultar la traducción activa sin duplicar el diccionario.
window.i18n = {
  t(key) {
    const lang = localStorage.getItem("lang") || "es";
    return (translations[lang] && translations[lang][key]) || translations.es[key] || key;
  }
};