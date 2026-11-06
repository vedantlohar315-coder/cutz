(() => {
  const content = window.CUTZY_CONTENT;
  const pricing = window.CUTZY_PRICING;
  if (!content || !pricing) return;

  const page = document.documentElement.dataset.page;
  const instagram = content.contact.instagram;

  function renderShell() {
    const header = document.getElementById("site-header");
    if (header) {
      const links = content.nav.map((item) => `<a href="${item.href}" class="nav-link ${page === item.key ? "is-active" : ""}" ${page === item.key ? 'aria-current="page"' : ""}>${item.label}</a>`).join("");
      header.innerHTML = `
        <header class="site-header" id="site-header-bar">
          <a class="brand-link" href="index.html" aria-label="Cutzy Salon & Academy home"><span class="brand-crop"><img src="media/logo.png" alt="Cutzy Salon & Academy by Arjun Dhingra"></span></a>
          <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><i></i><i></i></button>
          <nav class="main-nav" aria-label="Main navigation">${links}<a class="nav-book" href="enquiry.html">Book now <span>↗</span></a></nav>
        </header>`;
    }

    const footer = document.getElementById("site-footer");
    if (footer) {
      const footerLinks = [...content.nav, { label: "Enquiry", href: "enquiry.html", key: "enquiry" }].map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
      footer.innerHTML = `
        <footer class="site-footer">
          <div class="footer-main page-gutter">
            <div class="footer-brand"><a href="index.html" class="footer-logo"><img src="media/logo.png" alt="Cutzy Salon & Academy by Arjun Dhingra" loading="lazy"></a><p>Beauty, made personal.<br>Shahdara, East Delhi.</p></div>
            <div class="footer-col"><span class="eyebrow">Explore</span><nav aria-label="Footer navigation">${footerLinks}</nav></div>
            <div class="footer-col footer-contact"><span class="eyebrow">Visit Cutzy</span><a href="tel:+917397945737">${content.contact.phoneDisplay}</a><a href="https://wa.me/917397945737" target="_blank" rel="noreferrer">WhatsApp the studio ↗</a><p>${content.contact.address}</p><span>${content.contact.hours}</span></div>
            <div class="footer-col"><span class="eyebrow">Follow along</span><a href="${instagram}" target="_blank" rel="noreferrer">${content.contact.instagramHandle} ↗</a><span class="footer-signature">By Arjun Dhingra</span></div>
          </div>
          <div class="footer-bottom page-gutter"><span>© ${new Date().getFullYear()} Cutzy Salon & Academy</span><span>Thoughtfully made in Shahdara, Delhi</span><a href="#top" class="back-top">Back to top ↑</a></div>
        </footer>`;
    }
  }

  function renderFloatingActions() {
    const wa = document.createElement("a");
    wa.className = "floating-whatsapp";
    wa.href = content.contact.whatsapp;
    wa.target = "_blank";
    wa.rel = "noreferrer";
    wa.setAttribute("aria-label", "Chat with Cutzy on WhatsApp");
    wa.innerHTML = `<span class="wa-icon" aria-hidden="true">◔</span><span>Let's talk</span>`;
    document.body.appendChild(wa);

    const mobileBar = document.createElement("div");
    mobileBar.className = "mobile-action-bar";
    mobileBar.innerHTML = `<a href="tel:+917397945737">Call</a><a href="enquiry.html">Book an appointment <span>↗</span></a>`;
    document.body.appendChild(mobileBar);
  }

  function renderPreloader() {
    try { if (sessionStorage.getItem("cutzySeen") === "yes") return; } catch (_) {}
    const overlay = document.createElement("div");
    overlay.className = "preloader";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `<div class="preloader-mark"><img src="media/logo.png" alt=""><span></span><span></span></div>`;
    document.body.appendChild(overlay);
    window.addEventListener("load", () => {
      window.setTimeout(() => {
        overlay.classList.add("preloader-out");
        try { sessionStorage.setItem("cutzySeen", "yes"); } catch (_) {}
        window.setTimeout(() => overlay.remove(), 650);
      }, 500);
    }, { once: true });
  }

  function renderHomeServices() {
    const root = document.getElementById("home-services");
    if (!root) return;
    root.innerHTML = content.serviceCards.map((item, index) => `
      <a class="service-card" href="services.html" data-reveal style="--card-index:${index}">
        <div class="service-card-image"><img src="${item.image}" alt="" aria-hidden="true" loading="lazy"><span class="card-plus">↗</span></div>
        <span class="service-card-index">0${index + 1}</span><h3>${item.name}</h3><p>${item.caption}</p>
      </a>`).join("");
  }

  function renderReels() {
    const root = document.getElementById("home-reels");
    if (!root) return;
    root.innerHTML = content.reels.map((item, index) => `
      <a class="reel-card" href="${instagram}" target="_blank" rel="noreferrer" aria-label="View ${item.label} on Instagram" data-reveal style="--card-index:${index}">
        <img src="${item.image}" alt="${item.label}" loading="lazy"><span class="reel-wash"></span><span class="reel-play" aria-hidden="true">▶</span><span class="reel-meta"><small>Cutzy · Reel</small>${item.label}</span>
      </a>`).join("");
  }

  function renderTestimonials() {
    const quote = document.getElementById("testimonial-quote");
    if (!quote) return;
    let index = 0;
    const source = document.getElementById("testimonial-source");
    const update = () => {
      quote.classList.add("quote-changing");
      window.setTimeout(() => {
        quote.textContent = `“${content.testimonials[index].quote}”`;
        source.textContent = content.testimonials[index].source;
        quote.classList.remove("quote-changing");
      }, 180);
    };
    document.getElementById("testimonial-prev")?.addEventListener("click", () => { index = (index - 1 + content.testimonials.length) % content.testimonials.length; update(); });
    document.getElementById("testimonial-next")?.addEventListener("click", () => { index = (index + 1) % content.testimonials.length; update(); });
    update();
  }

  function renderPricing() {
    const tabs = document.getElementById("pricing-tabs");
    const panel = document.getElementById("pricing-panel");
    if (!tabs || !panel) return;
    let current = 0;
    const draw = () => {
      tabs.innerHTML = pricing.categories.map((category, index) => `<button type="button" role="tab" id="price-tab-${index}" aria-controls="pricing-panel" aria-selected="${index === current}" class="filter-button ${index === current ? "is-selected" : ""}" data-tab-index="${index}">${category.name}</button>`).join("");
      const category = pricing.categories[current];
      panel.setAttribute("aria-labelledby", `price-tab-${current}`);
      panel.innerHTML = `<div class="price-panel-heading"><div><span class="eyebrow">${String(current + 1).padStart(2, "0")} / 06</span><h2>${category.name}<em> services</em></h2></div><a class="text-link" href="enquiry.html?service=${encodeURIComponent(category.name)}">Book this service <span>↗</span></a></div><div class="price-list">${category.services.map((service) => `<article class="price-row"><div class="price-row-main"><h3>${service.name}</h3><span class="price-leader" aria-hidden="true"></span><strong>${service.price}</strong></div><p>${service.description}</p></article>`).join("")}</div>`;
      tabs.querySelectorAll("[data-tab-index]").forEach((button) => button.addEventListener("click", () => { current = Number(button.dataset.tabIndex); draw(); }));
    };
    draw();

    const packages = document.getElementById("package-grid");
    if (packages) packages.innerHTML = pricing.packages.map((pack, index) => `<article class="package-card" data-reveal style="--card-index:${index}"><span class="package-index">0${index + 1}</span><h3>${pack.name}</h3><p>${pack.detail}</p><strong>${pack.price}</strong><ul>${pack.inclusions.map((item) => `<li>${item}</li>`).join("")}</ul><a class="text-link" href="enquiry.html?service=Bridal">Ask about this package <span>↗</span></a></article>`).join("");
  }

  function renderAcademy() {
    const root = document.getElementById("course-grid");
    if (!root) return;
    root.innerHTML = pricing.academy.courses.map((course, index) => `<article class="course-card" data-reveal style="--card-index:${index}"><span class="course-index">0${index + 1}</span><h3>${course.name}</h3><p>${course.detail}</p><div class="course-meta"><span>${course.duration}</span><span>Hands-on learning</span></div></article>`).join("");
    const fee = document.getElementById("academy-fee");
    const cert = document.getElementById("academy-cert");
    if (fee) fee.textContent = pricing.academy.fee;
    if (cert) cert.textContent = pricing.academy.certificate;
  }

  function renderGallery() {
    const filters = document.getElementById("gallery-filters");
    const grid = document.getElementById("gallery-grid");
    if (!filters || !grid) return;
    const options = ["All", "Hair", "Colour", "Makeup", "Bridal", "Men"];
    let selected = "All";
    const paint = () => {
      filters.innerHTML = options.map((filter) => `<button type="button" class="filter-button ${filter === selected ? "is-selected" : ""}" aria-pressed="${filter === selected}" data-filter="${filter}">${filter}</button>`).join("");
      const visible = content.gallery.filter((item) => selected === "All" || item.category === selected);
      grid.innerHTML = visible.map((item, index) => `<button type="button" class="gallery-tile ${item.shape}" data-image="${item.image}" data-title="${item.title}" aria-label="Open ${item.title}" data-reveal style="--card-index:${index}"><img src="${item.image}" alt="${item.title}" loading="lazy"><span>${item.title}<i>↗</i></span></button>`).join("");
      filters.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => { selected = button.dataset.filter; paint(); observeReveal(); }));
      grid.querySelectorAll("[data-image]").forEach((button) => button.addEventListener("click", () => openLightbox(button.dataset.image, button.dataset.title)));
    };
    paint();
  }

  function openLightbox(src, title) {
    const dialog = document.getElementById("lightbox");
    if (!dialog) return;
    const image = dialog.querySelector("img");
    image.src = src;
    image.alt = title;
    dialog.querySelector("p").textContent = title;
    if (typeof dialog.showModal === "function") dialog.showModal();
  }

  function setupLightbox() {
    const dialog = document.getElementById("lightbox");
    if (!dialog) return;
    dialog.querySelector(".lightbox-close")?.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  }

  function setupEnquiryForm() {
    const form = document.getElementById("enquiry-form");
    if (!form) return;
    const service = form.elements.service;
    const requested = new URLSearchParams(window.location.search).get("service");
    if (requested) {
      const normalized = requested.toLowerCase().replace(/[^a-z]/g, "");
      const option = [...service.options].find((item) => item.value.toLowerCase().replace(/[^a-z]/g, "") === normalized);
      if (option) option.selected = true;
    }
    const dateField = form.elements.date;
    const now = new Date();
    dateField.min = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

    const messageFor = (field) => {
      if (field.name === "name") return field.value.trim().length < 2 ? "Please enter your name." : "";
      if (field.name === "phone") return !/^[6-9]\d{9}$/.test(field.value.trim()) ? "Enter a valid 10-digit Indian mobile number." : "";
      if (field.name === "email") return field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()) ? "Enter a valid email address." : "";
      if (field.name === "service") return !field.value ? "Choose a service to continue." : "";
      if (field.name === "date") return !field.value || field.value < dateField.min ? "Choose today or a future date." : "";
      return "";
    };
    const clearErrors = () => form.querySelectorAll(".field").forEach((item) => item.classList.remove("has-error"));
    form.querySelectorAll("input, select, textarea").forEach((field) => field.addEventListener("input", () => {
      const message = messageFor(field);
      if (!message) {
        const parent = field.closest(".field");
        parent?.classList.remove("has-error");
        const err = parent?.querySelector(".field-error");
        if (err) err.textContent = "";
      }
    }));

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      clearErrors();
      const invalid = [];
      [form.elements.name, form.elements.phone, form.elements.email, form.elements.service, form.elements.date].forEach((field) => {
        const message = messageFor(field);
        if (message) {
          invalid.push(field);
          const parent = field.closest(".field");
          parent?.classList.add("has-error");
          const err = parent?.querySelector(".field-error");
          if (err) err.textContent = message;
        }
      });
      const time = form.querySelector('input[name="time"]:checked');
      if (!time) {
        invalid.push(form.querySelector('input[name="time"]'));
        const timeField = form.querySelector(".time-field");
        timeField.classList.add("has-error");
        timeField.querySelector(".field-error").textContent = "Choose a preferred time slot.";
      }
      if (invalid.length) {
        invalid[0]?.focus({ preventScroll: false });
        return;
      }
      if (form.elements.website.value) {
        document.getElementById("form-success").classList.add("is-visible");
        form.querySelector(".submit-button").disabled = true;
        return;
      }
      const submit = form.querySelector(".submit-button");
      const label = submit.querySelector(".submit-label");
      submit.disabled = true;
      submit.classList.add("is-submitting");
      label.textContent = "Preparing your request";
      const fields = new FormData(form);
      const text = [
        "Hello Cutzy, I'd like to request an appointment.",
        `Name: ${fields.get("name").trim()}`,
        `Phone: +91 ${fields.get("phone").trim()}`,
        `Email: ${fields.get("email") || "Not provided"}`,
        `Service: ${fields.get("service")}`,
        `Preferred date: ${fields.get("date")}`,
        `Preferred time: ${fields.get("time")}`,
        `Message: ${fields.get("message")?.trim() || "Not provided"}`
      ].join("\n");
      const wa = `${content.contact.whatsapp}?text=${encodeURIComponent(text)}`;
      window.setTimeout(() => {
        submit.classList.remove("is-submitting");
        submit.classList.add("is-complete");
        label.textContent = "Request ready";
        document.getElementById("form-success").classList.add("is-visible");
        const newTab = window.open(wa, "_blank", "noopener,noreferrer");
        if (!newTab) {
          const fallback = document.createElement("a");
          fallback.href = wa;
          fallback.target = "_blank";
          fallback.rel = "noreferrer";
          fallback.className = "text-link whatsapp-fallback";
          fallback.textContent = "Open WhatsApp to send your request ↗";
          document.getElementById("form-success").appendChild(fallback);
        }
      }, 460);
    });
  }

  function setupHeader() {
    const header = document.getElementById("site-header-bar");
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    const updateScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    toggle?.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
      nav?.classList.toggle("nav-open", !open);
      document.body.classList.toggle("menu-open", !open);
    });
    nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("nav-open");
      toggle?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }));
  }

  function setupPageTransitions() {
    document.querySelectorAll('a[href$=".html"], a[href*=".html?"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === "_blank") return;
        const url = new URL(link.href, window.location.href);
        if (url.origin !== window.location.origin) return;
        event.preventDefault();
        document.body.classList.add("is-leaving");
        window.setTimeout(() => { window.location.href = url.href; }, 180);
      });
    });
  }

  let revealObserver;
  function observeReveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("[data-reveal], .reveal").forEach((item) => item.classList.add("is-visible"));
      return;
    }
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal], .reveal").forEach((item) => item.classList.add("is-visible"));
      return;
    }
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.14, rootMargin: "0px 0px -35px 0px" });
    document.querySelectorAll("[data-reveal]:not(.is-visible), .reveal:not(.is-visible)").forEach((item) => revealObserver.observe(item));
  }

  function animateCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animate = (node) => {
      const target = Number(node.dataset.count);
      const decimals = Number(node.dataset.decimals || 0);
      const suffix = node.dataset.suffix || "";
      if (reduce) {
        node.textContent = decimals ? target.toFixed(decimals) + suffix : target.toLocaleString("en-IN") + suffix;
        return;
      }
      const started = performance.now();
      const duration = 1250;
      const frame = (time) => {
        const progress = Math.min((time - started) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const value = target * eased;
        node.textContent = (decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-IN")) + suffix;
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };
    if (!("IntersectionObserver" in window)) return counters.forEach(animate);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { animate(entry.target); observer.unobserve(entry.target); }
    }), { threshold: 0.5 });
    counters.forEach((counter) => observer.observe(counter));
  }

  function setupParallax() {
    const hero = document.querySelector(".hero-home");
    const image = hero?.querySelector(".hero-image");
    if (!hero || !image || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 681) return;
    let ticking = false;
    const update = () => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height) - .5));
      document.body.classList.add("parallax-ready");
      image.style.setProperty("--parallax", `${progress * 20}px`);
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  function setupGalleryParallax() {
    if (!document.querySelector(".gallery-grid") || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 681) return;
    const update = () => {
      document.querySelectorAll(".gallery-tile").forEach((tile) => {
        const rect = tile.getBoundingClientRect();
        const offset = Math.max(-4, Math.min(4, (window.innerHeight * .5 - (rect.top + rect.height * .5)) / 90));
        tile.style.setProperty("--gallery-shift", `${offset}px`);
      });
    };
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) { requestAnimationFrame(() => { update(); ticking = false; }); ticking = true; }
    }, { passive: true });
    update();
  }

  renderShell();
  renderFloatingActions();
  renderPreloader();
  renderHomeServices();
  renderReels();
  renderTestimonials();
  renderPricing();
  renderAcademy();
  renderGallery();
  setupLightbox();
  setupEnquiryForm();
  setupHeader();
  setupPageTransitions();
  setupParallax();
  setupGalleryParallax();
  observeReveal();
  animateCounters();
  window.addEventListener("load", observeReveal, { once: true });
})();
