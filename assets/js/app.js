(() => {
  'use strict';
  const config = window.PLAQUEALO_CONFIG;
  const data = window.PLAQUEALO_DATA;
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const icon = (name) => {
    const paths = {
      menu:'<path d="M4 7h16M4 12h16M4 17h16"/>', close:'<path d="m6 6 12 12M18 6 6 18"/>',
      search:'<circle cx="11" cy="11" r="7"/><path d="m16 16 4 4"/>', car:'<path d="M5 17h14l-1.5-6H6.5L5 17Z"/><path d="m7 11 2-4h6l2 4M7 17v2M17 17v2"/>',
      shield:'<path d="M12 3 5 6v5c0 4.5 3 7.7 7 10 4-2.3 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
      pin:'<path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/>',
      file:'<path d="M7 3h7l4 4v14H7V3Z"/><path d="M14 3v5h5M10 13h5M10 17h5"/>',
      tag:'<path d="m3 12 9 9 9-9-9-9H3v9Z"/><circle cx="8" cy="8" r="1"/>',
      grid:'<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/>',
      book:'<path d="M4 5h7a3 3 0 0 1 3 3v11a3 3 0 0 0-3-3H4V5Z"/><path d="M20 5h-3a3 3 0 0 0-3 3v11a3 3 0 0 1 3-3h3V5Z"/>',
      chevron:'<path d="m8 10 4 4 4-4"/>', whatsapp:'<path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z"/><path d="M9 8.5c.5 2.7 2 4.2 4.7 5"/>',
      user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'
    };
    return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.file}</svg>`;
  };

  function brandLogo() {
    const logoSource = config.brand.logoBase64 || config.brand.logoSrc;
    if (logoSource) return `<img src="${logoSource}" alt="${config.brand.name}">`;
    return `<span class="automotor-mark" aria-hidden="true">${icon('car')}</span><span class="brand-word">AUTOMOTOR<em>.pe</em></span>`;
  }
  qsa('.brand').forEach((brand) => {
    brand.innerHTML = brandLogo();
    brand.setAttribute('aria-label', `${config.brand.name}, consulta vehicular`);
  });
  qsa('.report-logo').forEach((el) => el.textContent = config.brand.name);

  const productServiceLinks = Object.values(data.services).map((service, index) => {
    const serviceIcon = index === 0 ? 'file' : index === 1 ? 'shield' : 'pin';
    return `<a class="service-nav-item" href="#/${service.route}" data-route="${service.route}"><span class="nav-icon">${icon(serviceIcon)}</span><span><strong>${service.name}</strong><small>${service.short}</small></span></a>`;
  }).join('');
  const serviceLinks = `<div class="services-dropdown-head"><span>Servicios Automotor</span><small>Herramientas para comprar, proteger y administrar vehículos.</small></div><div class="services-dropdown-grid"><div class="services-column"><b>Consulta y valor</b><a class="service-nav-item" href="#/consulta-vehicular" data-route="consulta-vehicular"><span class="nav-icon">${icon('search')}</span><span><strong>Consulta vehicular</strong><small>Accede gratis a fuentes oficiales.</small></span></a><a class="service-nav-item" href="#/tasacion" data-route="tasacion"><span class="nav-icon">${icon('tag')}</span><span><strong>Tasación</strong><small>Obtén una referencia de valor.</small></span></a></div><div class="services-column"><b>Protección y control</b>${productServiceLinks}</div></div>`;

  const nav = qs('.nav');
  nav.innerHTML = `
    <a class="brand" href="#/inicio" data-route="inicio" aria-label="${config.brand.name}, inicio">${brandLogo()}</a>
    <div class="nav-links">
      <a class="nav-plaquealo" href="#/plaquealo" data-route="plaquealo">Plaquealo</a>
      <a href="#/empresas" data-route="empresas">Empresas y flotas</a>
      <a href="#/vehiculos" data-route="vehiculos">Vehículos</a>
      <div class="services-menu"><button class="services-trigger" type="button" aria-haspopup="true" aria-expanded="false">Otros servicios ${icon('chevron')}</button><div class="services-dropdown">${serviceLinks}</div></div>
      <a href="#/blog" data-route="blog">Blog</a>
    </div>
    <div class="nav-actions"><button class="header-login google-login" type="button">${icon('user')}<span>Ingresar</span></button><button class="header-publish publish-open" type="button">${icon('car')}<span>Publicar vehículo</span><b>+</b></button><button class="menu-btn" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobileDrawer" type="button">${icon('menu')}</button></div>`;

  document.body.insertAdjacentHTML('beforeend', `
    <div class="drawer-backdrop" aria-hidden="true"></div>
    <aside class="mobile-drawer" id="mobileDrawer" aria-hidden="true" aria-label="Menú principal">
      <div class="drawer-head"><a class="brand" href="#/inicio">${brandLogo()}</a><button class="drawer-close" type="button" aria-label="Cerrar menú">${icon('close')}</button></div>
      <nav class="drawer-nav">
        <a class="drawer-link drawer-plaquealo" href="#/plaquealo" data-route="plaquealo">${icon('file')} Plaquealo</a>
        <a class="drawer-link" href="#/empresas" data-route="empresas">${icon('car')} Empresas y flotas</a>
        <a class="drawer-link" href="#/vehiculos" data-route="vehiculos">${icon('grid')} Marketplace</a>
        <span class="drawer-section-label">Otros servicios</span>
        <a class="drawer-service-link" href="#/consulta-vehicular" data-route="consulta-vehicular">${icon('search')} Consulta vehicular</a>
        <a class="drawer-service-link" href="#/tasacion" data-route="tasacion">${icon('tag')} Tasación</a>
        <a class="drawer-service-link" href="#/servicios/soat" data-route="servicios/soat">${icon('file')} SOAT</a>
        <a class="drawer-service-link" href="#/servicios/seguro-vehicular" data-route="servicios/seguro-vehicular">${icon('shield')} Seguro Vehicular</a>
        <a class="drawer-service-link" href="#/servicios/gps" data-route="servicios/gps">${icon('pin')} GPS Vehicular</a>
        <a class="drawer-link" href="#/blog" data-route="blog">${icon('book')} Blog</a>
      </nav>
      <div class="drawer-foot"><button class="btn btn-red publish-open" type="button">Publicar vehículo</button><button class="google-button google-login" type="button"><b>G</b> Continuar con Google</button><div class="drawer-legal"><a href="#/legal/terminos">Legal</a><a href="#/legal/privacidad">Privacidad</a><a href="#/legal/cookies">Cookies</a></div></div>
    </aside>`);

  const servicesMenu = qs('.services-menu');
  const servicesTrigger = qs('.services-trigger');
  servicesTrigger.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = servicesMenu.classList.toggle('open');
    servicesTrigger.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (event) => {
    if (servicesMenu.contains(event.target)) return;
    servicesMenu.classList.remove('open');
    servicesTrigger.setAttribute('aria-expanded', 'false');
  });

  const main = qs('main');
  Object.entries(data.services).forEach(([key, service], index) => {
    main.insertAdjacentHTML('beforeend', `
      <section class="section service-page" data-view="${service.route}" id="${service.route.replaceAll('/','-')}">
        <div class="container service-layout">
          <div class="service-copy"><span class="service-icon-large">${icon(index === 0 ? 'file' : index === 1 ? 'shield' : 'pin')}</span><p class="eyebrow">Servicios PLAQUÉALO</p><h1 class="section-title">${service.title}</h1><p class="section-copy">${service.description}</p><ul class="service-benefits">${service.benefits.map((item) => `<li>${item}</li>`).join('')}</ul><div class="service-partners"><span>${key === 'gps' ? 'Tecnología y monitoreo con' : 'Trabajamos con'}</span><div>${(service.partners || []).map((partner) => `<strong>${partner}</strong>`).join('')}</div><p>${key === 'gps' ? 'Soluciones de ubicación y seguimiento vehicular para particulares y flotas.' : 'La disponibilidad y condiciones dependen de la evaluación de cada aseguradora.'}</p></div></div>
          <form class="quote-card service-quote-form" data-service="${key}" novalidate><h2>Solicita tu cotización por WhatsApp</h2><p>Completa los datos y un asesor te responderá con el siguiente paso.</p><div class="quote-grid">
            <div class="quote-field"><label for="${key}-plate">Número de placa *</label><input id="${key}-plate" name="plate" placeholder="Ej: ABC-123" maxlength="8" autocomplete="off"><span class="field-error" data-error="plate"></span></div>
            <div class="quote-field"><label for="${key}-place">Lugar donde circulará *</label><input id="${key}-place" name="place" placeholder="Ej: Lima, Callao, Arequipa" autocomplete="address-level1"><span class="field-error" data-error="place"></span></div>
            <div class="quote-field full"><label for="${key}-document">DNI o RUC *</label><input id="${key}-document" name="document" inputmode="numeric" pattern="[0-9]*" maxlength="11" placeholder="Ej: DNI o RUC"><span class="field-error" data-error="document"></span></div>
            <fieldset class="usage-group"><legend>Tipo de uso *</legend><div class="usage-options"><div class="radio-card"><input id="${key}-particular" name="usage" type="radio" value="Particular"><label for="${key}-particular">Particular</label></div><div class="radio-card"><input id="${key}-taxi" name="usage" type="radio" value="Taxi"><label for="${key}-taxi">Taxi</label></div></div><span class="field-error" data-error="usage"></span></fieldset>
            <button class="btn btn-red" type="submit">${icon('whatsapp')} Enviar por WhatsApp</button></div><p class="quote-note">Tus datos solo se usarán para responder esta solicitud.</p><p class="quote-feedback" role="status"></p></form>
        </div>
      </section>`);
  });

  main.insertAdjacentHTML('beforeend', `
    <section class="section legal-page" data-view="legal"><div class="container"><div class="legal-box"><p class="eyebrow">Información legal</p><h1 class="section-title" id="legalTitle">Documento legal</h1><p>Contenido provisional pendiente de revisión y aprobación legal. Esta ruta está preparada para incorporar el documento definitivo.</p><a class="btn btn-outline" href="#/inicio">Volver al inicio</a></div></div></section>`);

  const promise = qs('.promise');
  promise.insertAdjacentHTML('afterend', `<section class="section metrics-band active" data-view="inicio"><div class="container metrics-grid"><div class="metric-intro"><p class="eyebrow">Actividad de la plataforma</p><h2>Datos preparados para una fuente real.</h2><span class="demo-label">Valores pendientes de API</span></div><div class="metric-card"><strong data-metric="total">—</strong><span>Consultas realizadas</span></div><div class="metric-card"><strong data-metric="monthly">—</strong><span>Consultas este mes</span></div><div class="metric-card"><strong>${config.metrics.availableSources}+</strong><span>Fuentes disponibles</span></div></div></section>`);

  const report = qs('.report');
  report.insertAdjacentHTML('beforebegin', `<section class="section home-marketplace active" data-view="inicio"><div class="container"><div class="listings-head"><div><p class="eyebrow">Marketplace demo</p><h2 class="section-title">Vehículos que puedes explorar.</h2><p class="section-copy">Datos demostrativos separados de la interfaz y listos para conectarse a un servicio real.</p></div><a class="btn btn-outline" href="#/vehiculos">Ver Marketplace</a></div><div class="vehicles" id="homeVehicles"></div></div></section>`);
  report.insertAdjacentHTML('afterend', `<section class="section testimonials active" data-view="inicio"><div class="container"><p class="eyebrow">Comentarios de demostración</p><h2 class="section-title">Una experiencia pensada para decidir con claridad.</h2><span class="demo-label">Contenido demo — reemplazar por opiniones reales</span><div class="testimonial-track">${data.demoTestimonials.map((item)=>`<article class="testimonial-card"><div class="testimonial-person"><span class="testimonial-avatar">${item.initial}</span><div><h3>${item.name}</h3><small>${item.location}</small></div></div><p>${item.text}</p></article>`).join('')}</div></div></section>`);

  qs('#homeVehicles').innerHTML = data.demoVehicles.map((vehicle) => `<article class="vehicle" data-type="${vehicle.type}"><div class="vehicle-media"><img loading="lazy" src="${vehicle.image}" alt="${vehicle.name}"><span class="verified ${vehicle.status === 'sold' ? 'sold' : ''}">${vehicle.status === 'sold' ? 'VENDIDO' : '✓ Reporte disponible'}</span></div><div class="vehicle-body"><div class="vehicle-top"><h3>${vehicle.name}</h3><span class="vehicle-price">${vehicle.price}</span></div><div class="vehicle-meta"><span>${vehicle.year}</span><span>${vehicle.km}</span><span>${vehicle.transmission}</span></div><p class="vehicle-location">${vehicle.location}</p></div></article>`).join('');

  const sourcesIntro = qs('.sources-intro');
  sourcesIntro.insertAdjacentHTML('afterend', `<div class="sources-toolbar"><label class="sr-only" for="sourceSearch">Buscar fuente</label><input class="source-search" id="sourceSearch" type="search" placeholder="Buscar entidad, ciudad o información"><label class="sr-only" for="sourceFilter">Filtrar categoría</label><select class="source-filter" id="sourceFilter"><option value="all">Todas las categorías</option><option value="identidad">Propiedad y registro</option><option value="multas">Multas y papeletas</option><option value="tecnico">Estado técnico y seguros</option><option value="seguridad">Documentos y seguridad</option></select></div><div class="source-empty" id="sourceEmpty">No encontramos fuentes con esos criterios.</div>`);
  qsa('.source-group').forEach((group, index) => group.dataset.category = index === 0 || index === 6 ? 'identidad' : [1,3,4,5].includes(index) ? 'multas' : index === 2 ? 'tecnico' : 'seguridad');
  const officialSourceLinks = [
    { match: /SUNARP|propietario|historial de propietarios|anotaciones/i, url: 'https://consultavehicular.sunarp.gob.pe/consulta-vehicular/inicio' },
    { match: /SOAT|APESEG/i, url: 'https://www.apeseg.org.pe/consultas-soat/' },
    { match: /SUTRAN/i, url: 'https://www.sutran.gob.pe/consultas/record-de-infracciones/' },
    { match: /inspección|revisión técnica|MTC/i, url: 'https://portal.mtc.gob.pe/reportedgtt/form/frmconsultaplacaitv.aspx' },
    { match: /ATU/i, url: 'https://www.atu.gob.pe/' },
    { match: /robo|PNP|lunas polarizadas/i, url: 'https://sistemas.policia.gob.pe/recuperados/' },
    { match: /SAT|papeleta|impuesto|captura/i, url: 'https://www.sat.gob.pe/Websitev9' }
  ];
  qsa('.source-item').forEach((item) => {
    const source = officialSourceLinks.find((entry) => entry.match.test(item.textContent));
    const link = document.createElement('a');
    link.className = 'source-action';
    link.href = source?.url || 'https://automotor.pe/consulta-vehicular/';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Abrir fuente para ${qs('strong', item).textContent}`);
    link.textContent = 'Consultar ↗';
    item.append(link);
  });

  const footer = qs('.footer');
  footer.innerHTML = `<div class="container"><div class="footer-grid"><div class="footer-brand"><a class="brand" href="#/inicio">${brandLogo()}</a><p class="footer-about">Información vehicular para tomar mejores decisiones.</p><div class="footer-socials" id="socialLinks"></div></div><div class="footer-group"><button class="footer-toggle" type="button" aria-expanded="false" aria-controls="footer-services"><span>Servicios</span>${icon('chevron')}</button><div class="footer-panel" id="footer-services" hidden><a href="#/consulta-vehicular">Consulta vehicular gratuita</a><a href="#/plaquealo">PLAQUÉALO</a><a href="#/tasacion">Tasación</a><a href="#/vehiculos">Marketplace</a><a href="#/servicios/soat">SOAT</a><a href="#/servicios/seguro-vehicular">Seguro Vehicular</a><a href="#/servicios/gps">GPS Vehicular</a></div></div><div class="footer-group"><button class="footer-toggle" type="button" aria-expanded="false" aria-controls="footer-resources"><span>Recursos</span>${icon('chevron')}</button><div class="footer-panel" id="footer-resources" hidden><a href="#/consulta-vehicular">Fuentes oficiales</a><a href="#/blog">Blog</a><a href="#/plaquealo">Preguntas frecuentes</a></div></div><div class="footer-group"><button class="footer-toggle" type="button" aria-expanded="false" aria-controls="footer-legal"><span>Legal</span>${icon('chevron')}</button><div class="footer-panel" id="footer-legal" hidden><a href="#/legal/terminos">Términos de uso</a><a href="#/legal/privacidad">Política de privacidad</a><a href="#/legal/cookies">Cookies</a><a href="mailto:${config.contact.email || 'contacto@example.com'}">Contacto</a></div></div></div><div class="footer-bottom"><span>© 2026 ${config.brand.name}</span><span>Una iniciativa vehicular de ${config.brand.corporateBackup}.</span></div></div>`;

  const footerMedia = window.matchMedia('(max-width: 680px)');
  const syncFooterAccordion = () => {
    qsa('.footer-toggle').forEach((toggle) => {
      const panel = document.getElementById(toggle.getAttribute('aria-controls'));
      if (footerMedia.matches) {
        panel.hidden = toggle.getAttribute('aria-expanded') !== 'true';
      } else {
        toggle.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
      }
    });
  };
  qsa('.footer-toggle').forEach((toggle) => toggle.addEventListener('click', () => {
    if (!footerMedia.matches) return;
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    document.getElementById(toggle.getAttribute('aria-controls')).hidden = expanded;
  }));
  footerMedia.addEventListener?.('change', () => {
    qsa('.footer-toggle').forEach((toggle) => toggle.setAttribute('aria-expanded', footerMedia.matches ? 'false' : 'true'));
    syncFooterAccordion();
  });
  syncFooterAccordion();

  const socialContainer = qs('#socialLinks');
  Object.entries(config.socialLinks).filter(([,url])=>url).forEach(([name,url])=>socialContainer.insertAdjacentHTML('beforeend',`<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${name}">${name.slice(0,1).toUpperCase()}</a>`));
  if (!socialContainer.children.length) socialContainer.hidden = true;

  const modal = qs('#publishModal');
  modal.classList.add('publish-modal');
  modal.innerHTML = `<div class="modal-card"><div class="modal-top"><div><p class="eyebrow">Publicar vehículo</p><h2 id="modalTitle">Crea una publicación clara</h2></div><button class="modal-close" type="button" aria-label="Cerrar">${icon('close')}</button></div><div class="wizard-progress" aria-label="Progreso"><span class="wizard-step-indicator active"></span><span class="wizard-step-indicator"></span><span class="wizard-step-indicator"></span><span class="wizard-step-indicator"></span></div><form id="publishForm" novalidate>
    <section class="wizard-panel active" data-step="0"><h3>1. Identificación</h3><div class="form-grid"><div class="field"><label for="pubPlate">Placa</label><input id="pubPlate" maxlength="8" placeholder="ABC-123" required></div><div class="field"><label for="pubYear">Año</label><input id="pubYear" inputmode="numeric" maxlength="4" placeholder="2021" required></div><div class="field"><label for="pubBrand">Marca</label><select id="pubBrand" required><option value="">Cargando marcas…</option></select><span class="select-state" id="brandState"></span></div><div class="field"><label for="pubModel">Modelo</label><select id="pubModel" disabled required><option value="">Selecciona una marca</option></select><span class="select-state" id="modelState"></span></div></div></section>
    <section class="wizard-panel" data-step="1"><h3>2. Características</h3><div class="form-grid"><div class="field"><label for="pubKm">Kilometraje</label><input id="pubKm" inputmode="numeric" placeholder="42,000"></div><div class="field"><label for="pubTransmission">Transmisión</label><select id="pubTransmission"><option>Automática</option><option>Mecánica</option></select></div><div class="field"><label for="pubFuel">Combustible</label><select id="pubFuel"><option>Gasolina</option><option>Diésel</option><option>Híbrido</option><option>Eléctrico</option></select></div><div class="field"><label for="pubVersion">Versión</label><input id="pubVersion" placeholder="Ej. Full equipo"></div></div></section>
    <section class="wizard-panel" data-step="2"><h3>3. Publicación</h3><div class="form-grid"><div class="field"><label for="pubPrice">Precio</label><input id="pubPrice" inputmode="decimal" placeholder="US$ 18,500"></div><div class="field"><label for="pubLocation">Ubicación</label><input id="pubLocation" placeholder="Lima, Perú"></div><div class="field full"><label for="pubDescription">Descripción</label><input id="pubDescription" placeholder="Describe el estado y los puntos importantes"></div><div class="field full"><label for="pubPhotos">Fotos</label><input id="pubPhotos" type="file" accept="image/*" multiple></div></div></section>
    <section class="wizard-panel" data-step="3"><h3>4. Verificación</h3><div class="report-features"><div class="report-feature">Publicación estándar</div><div class="report-feature">Verificada por PLAQUÉALO</div></div><p class="modal-note">La verificación ayuda a presentar la información disponible con mayor claridad. No reemplaza una inspección física ni constituye garantía legal.</p><div class="auth-gate" id="authGate"><h3>Guarda y publica tu vehículo</h3><p>Continúa con Google para finalizar sin perder la información ingresada.</p><button class="google-button google-login" type="button"><b>G</b> Continuar con Google</button></div></section>
    <div class="wizard-actions"><button class="btn btn-outline" id="wizardBack" type="button">Atrás</button><button class="btn btn-red" id="wizardNext" type="button">Continuar</button></div><p class="modal-note" id="publishStatus" role="status">Los datos se conservan en esta sesión de demostración.</p></form></div>`;

  if (config.contact.whatsapp) document.body.insertAdjacentHTML('beforeend', `<button class="whatsapp-fab" type="button" aria-label="Contactar por WhatsApp">${icon('whatsapp')}</button>`);

  const routeGroups = {inicio:'inicio',home:'inicio','consulta-vehicular':'consulta-vehicular',fuentes:'consulta-vehicular',plaquealo:'plaquealo',consulta:'plaquealo',reporte:'plaquealo',empresas:'empresas',tasacion:'tasacion',vehiculos:'vehiculos',blog:'blog','servicios/soat':'servicios/soat','servicios/seguro-vehicular':'servicios/seguro-vehicular','servicios/gps':'servicios/gps','legal/terminos':'legal','legal/privacidad':'legal','legal/cookies':'legal'};
  const currentRoute = () => location.hash.replace(/^#\/?/,'') || 'inicio';
  function closeDrawer() { document.body.classList.remove('drawer-open'); qs('#mobileDrawer').setAttribute('aria-hidden','true'); qs('.menu-btn').setAttribute('aria-expanded','false'); }
  function renderView() {
    const route = currentRoute(); const group = routeGroups[route] || 'inicio';
    document.body.dataset.route = route;
    qsa('main>[data-view]').forEach((view) => view.classList.toggle('active', view.dataset.view === group));
    qsa('[data-route]').forEach((link) => link.classList.toggle('active', link.dataset.route === route));
    if (group === 'legal') qs('#legalTitle').textContent = route.endsWith('privacidad') ? 'Política de privacidad' : route.endsWith('cookies') ? 'Política de cookies' : 'Términos de uso';
    qsa(`main>[data-view="${group}"] .reveal`).forEach((el) => el.classList.add('visible'));
    closeDrawer(); window.scrollTo(0,0);
  }
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]'); if (!link) return;
    const route = link.getAttribute('href').replace(/^#\/?/,''); if (!routeGroups[route]) return;
    event.preventDefault(); history.pushState(null,'',`#/${route}`); renderView();
  });
  window.addEventListener('popstate', renderView);

  qs('.menu-btn').addEventListener('click', () => { document.body.classList.add('drawer-open'); qs('#mobileDrawer').setAttribute('aria-hidden','false'); qs('.menu-btn').setAttribute('aria-expanded','true'); qs('.drawer-close').focus(); });
  qs('.drawer-close').addEventListener('click', closeDrawer); qs('.drawer-backdrop').addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (event) => { if(event.key === 'Escape'){ closeDrawer(); closeModal(); servicesMenu.classList.remove('open'); servicesTrigger.setAttribute('aria-expanded','false'); } });

  const plateInput = qs('#plateInput'); const plateStatus = qs('#plateStatus'); const previewPlate = qs('#previewPlate');
  const sanitizePlate = (value) => value.toUpperCase().replace(/[^A-Z0-9-]/g,'').slice(0,8);
  const reportTopics = {
    multas: { source: 'Consulta SAT y municipalidades', detail: 'No se encontraron papeletas en la vista de ejemplo.' },
    soat: { source: 'Consulta APESEG', detail: 'La póliza figura vigente en la vista de ejemplo.' },
    gravamenes: { source: 'Consulta SUNARP', detail: 'Se encontró un registro que conviene revisar antes de comprar.' }
  };
  plateInput.value = '';
  plateInput.placeholder = 'ABC-123';
  plateStatus.textContent = 'Ingresa una placa peruana para continuar.';
  plateInput.addEventListener('input', () => { plateInput.value = sanitizePlate(plateInput.value); previewPlate.textContent = plateInput.value || 'ABC-123'; const valid = plateInput.value.replace('-','').length >= 6; plateStatus.textContent = valid ? `Placa ${plateInput.value} lista para consultar.` : 'Ingresa una placa peruana para continuar.'; plateStatus.style.color = valid ? 'var(--success)' : 'var(--danger)'; });
  qs('#consulta').addEventListener('submit', (event) => { event.preventDefault(); const valid = plateInput.value.replace('-','').length >= 6; plateStatus.textContent = valid ? `Demo de consulta preparada para ${plateInput.value}.` : 'Ingresa una placa válida.'; if(valid) qs('.quick-results').scrollIntoView({behavior:'smooth',block:'center'}); });

  const homePlateForm = qs('#homePlateForm'); const homePlateInput = qs('#homePlateInput'); const homePlateStatus = qs('#homePlateStatus');
  homePlateInput.addEventListener('input', () => {
    homePlateInput.value = sanitizePlate(homePlateInput.value);
    const valid = homePlateInput.value.replace('-','').length >= 6;
    homePlateStatus.textContent = valid ? `Placa ${homePlateInput.value} lista para continuar.` : 'Consulta inicial sin costo · Tus datos están protegidos';
    homePlateStatus.className = `home-plate-status${valid ? ' valid' : ''}`;
  });
  homePlateForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = sanitizePlate(homePlateInput.value); const valid = value.replace('-','').length >= 6;
    if (!valid) { homePlateStatus.textContent = 'Ingresa una placa peruana válida.'; homePlateStatus.className = 'home-plate-status error'; homePlateInput.focus(); return; }
    plateInput.value = value; plateInput.dispatchEvent(new Event('input'));
    history.pushState(null,'','#/inicio'); renderView();
  });

  qsa('[data-report-topic]').forEach((button) => button.addEventListener('click', () => {
    qsa('[data-report-topic]').forEach((item) => { item.classList.toggle('selected', item === button); item.setAttribute('aria-expanded', item === button ? 'true' : 'false'); });
    const topic = reportTopics[button.dataset.reportTopic];
    const insight = qs('#reportInsight');
    insight.innerHTML = `<span>${topic.source}</span><p>${topic.detail}</p>`;
  }));

  qsa('.filter').forEach((button) => button.addEventListener('click', () => { qsa('.filter').forEach((item)=>item.classList.remove('active')); button.classList.add('active'); qsa('#vehiculos .vehicle').forEach((card)=>card.hidden = button.dataset.filter !== 'all' && card.dataset.type !== button.dataset.filter); }));

  const sourceSearch = qs('#sourceSearch'); const sourceFilter = qs('#sourceFilter');
  function filterSources() { const term = sourceSearch.value.trim().toLowerCase(); const category = sourceFilter.value; let visible = 0; qsa('.source-group').forEach((group)=>{ const categoryMatch = category === 'all' || group.dataset.category === category; let groupVisible = 0; qsa('.source-item',group).forEach((item)=>{ const show = categoryMatch && item.textContent.toLowerCase().includes(term); item.hidden = !show; if(show) groupVisible++; }); group.hidden = groupVisible === 0; visible += groupVisible; }); qs('#sourceEmpty').classList.toggle('visible',visible === 0); }
  sourceSearch.addEventListener('input',filterSources); sourceFilter.addEventListener('change',filterSources);

  qsa('.service-quote-form').forEach((form) => form.addEventListener('submit', (event) => {
    event.preventDefault(); const values = Object.fromEntries(new FormData(form)); const errors = {};
    values.plate = sanitizePlate(values.plate || '');
    if(values.plate.replace('-','').length < 6) errors.plate = 'Ingresa una placa válida.';
    if(!(values.place || '').trim()) errors.place = 'Indica dónde circulará el vehículo.';
    if(!/^(\d{8}|\d{11})$/.test(values.document || '')) errors.document = 'Ingresa un DNI de 8 o RUC de 11 dígitos.';
    if(!values.usage) errors.usage = 'Selecciona el tipo de uso.';
    qsa('.field-error',form).forEach((el)=>el.textContent = errors[el.dataset.error] || ''); qsa('input',form).forEach((input)=>input.setAttribute('aria-invalid',String(Boolean(errors[input.name]))));
    if(Object.keys(errors).length) return;
    const service = data.services[form.dataset.service]; const message = `Hola, deseo solicitar una cotización de ${service.name}.\n\nPlaca: ${values.plate}\nLugar donde circulará: ${values.place}\nDNI/RUC: ${values.document}\nTipo de uso: ${values.usage}\n\nQuisiera recibir información sobre la cotización.`;
    if(!config.contact.whatsapp){ qs('.quote-feedback',form).textContent = 'Formulario validado. Falta configurar CONTACT_CONFIG.whatsapp para abrir WhatsApp.'; return; }
    window.open(`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
  }));
  qsa('input[name="document"]').forEach((input)=>input.addEventListener('input',()=>input.value=input.value.replace(/\D/g,'').slice(0,11)));

  const publishModal = qs('#publishModal'); let wizardStep = 0;
  function openModal(){ publishModal.classList.add('open'); document.body.style.overflow='hidden'; qs('#pubPlate').focus(); }
  function closeModal(){ publishModal.classList.remove('open'); document.body.style.overflow=''; }
  function paintWizard(){ qsa('.wizard-panel').forEach((panel,index)=>panel.classList.toggle('active',index===wizardStep)); qsa('.wizard-step-indicator').forEach((item,index)=>item.classList.toggle('active',index<=wizardStep)); qs('#wizardBack').disabled = wizardStep===0; qs('#wizardNext').textContent = wizardStep===3 ? 'Finalizar publicación' : 'Continuar'; }
  document.addEventListener('click',(event)=>{ if(event.target.closest('.publish-open')) openModal(); if(event.target.closest('.modal-close')) closeModal(); if(event.target === publishModal) closeModal(); });
  qs('#wizardBack').addEventListener('click',()=>{wizardStep=Math.max(0,wizardStep-1);paintWizard()});
  qs('#wizardNext').addEventListener('click',()=>{ if(wizardStep===0 && (!qs('#pubPlate').value || !qs('#pubYear').value || !qs('#pubBrand').value || !qs('#pubModel').value)){qs('#publishStatus').textContent='Completa placa, año, marca y modelo para continuar.';return} if(wizardStep<3){wizardStep++;paintWizard();return} qs('#authGate').classList.add('visible'); qs('#publishStatus').textContent='Autenticación Google pendiente de configuración; tus datos siguen en el formulario.'; });
  (async()=>{ try{const brands=await window.vehicleCatalogService.getBrands();qs('#pubBrand').innerHTML='<option value="">Selecciona una marca</option>'+brands.map((brand)=>`<option>${brand}</option>`).join('');qs('#brandState').textContent='Catálogo demo desacoplado del formulario.'}catch{qs('#brandState').textContent='No se pudo cargar. Reintenta.'} })();
  qs('#pubBrand').addEventListener('change',async(event)=>{const select=qs('#pubModel');select.disabled=true;select.innerHTML='<option>Cargando modelos…</option>';try{const models=await window.vehicleCatalogService.getModels(event.target.value);select.innerHTML='<option value="">Selecciona un modelo</option>'+models.map((model)=>`<option>${model}</option>`).join('');select.disabled=!models.length;qs('#modelState').textContent=models.length?'Modelos disponibles.':'No hay modelos disponibles.'}catch{select.innerHTML='<option>Error al cargar</option>';qs('#modelState').textContent='Reintenta cambiando la marca.'}});

  qsa('.google-login').forEach((button)=>button.addEventListener('click',async()=>{try{await window.authService.signInWithGoogle()}catch{alert('Google Login está preparado, pero requiere configurar un proveedor OAuth seguro. No se almacenaron datos.')}}));
  qs('#valuationForm').addEventListener('submit',(event)=>{event.preventDefault();const input=qs('#valuationPlate');input.value=sanitizePlate(input.value);qs('#valuationStatus').textContent=input.value.replace('-','').length>=6?`Tasación demo preparada para ${input.value}.`:'Ingresa una placa válida.'});
  qs('.mini-search').addEventListener('submit',(event)=>{event.preventDefault();plateInput.value=sanitizePlate(qs('input',event.currentTarget).value);history.pushState(null,'','#/plaquealo');renderView();plateInput.dispatchEvent(new Event('input'))});

  const observer = new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.1}); qsa('.reveal').forEach((el)=>observer.observe(el));
  renderView(); paintWizard();
})();
