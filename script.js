// DevCrafter website script
(function () {
  var WHATSAPP_NUMBER = '917870341191';

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  // "Get a quote" buttons pre-select the package in the form
  var typeSelect = document.getElementById('f-type');
  document.querySelectorAll('[data-plan]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var plan = btn.getAttribute('data-plan');
      if (!typeSelect) return;
      for (var i = 0; i < typeSelect.options.length; i++) {
        if (typeSelect.options[i].text === plan) { typeSelect.selectedIndex = i; return; }
      }
    });
  });

  // Contact form: opens WhatsApp with the details filled in
  var form = document.getElementById('contactForm');
  var errorBox = document.getElementById('formError');
  function F(n) { return form.elements[n]; }
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = F('name').value.trim();
      var phone = F('phone').value.trim();
      F('name').setAttribute('aria-invalid', name ? 'false' : 'true');
      F('phone').setAttribute('aria-invalid', phone ? 'false' : 'true');
      if (!name || !phone) {
        errorBox.hidden = false;
        (name ? F('phone') : F('name')).focus();
        return;
      }
      errorBox.hidden = true;
      var lines = [
        'Hi DevCrafter, I want to start a project.',
        '',
        'Name: ' + name,
        'Phone: ' + phone
      ];
      var email = F('email').value.trim();
      if (email) lines.push('Email: ' + email);
      lines.push('Need: ' + F('type').value);
      lines.push('Budget: ' + F('budget').value);
      var msg = F('message').value.trim();
      if (msg) lines.push('Details: ' + msg);
      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  }
})();
