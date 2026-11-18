const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const contactForm = document.querySelector('#kontaktformular');
const formStatus = document.querySelector('#formularstatus');
const contactEmail = 'suedpfalz@stadtbild-deutschland.org';

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Menü öffnen' : 'Menü schließen');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Menü öffnen');
      navigation.classList.remove('is-open');
    }
  });
}

if (contactForm && formStatus) {
  const submitButton = contactForm.querySelector('button[type="submit"]');

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`Nachricht von ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('nachricht')}\n\nAntwort an: ${data.get('email')}`);
    const mailto = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    if (window.location.protocol === 'file:') {
      formStatus.textContent = 'Dein E-Mail-Programm wird mit einer vorbereiteten Nachricht geöffnet.';
      window.location.href = mailto;
      return;
    }

    submitButton.disabled = true;
    formStatus.textContent = 'Nachricht wird gesendet ...';

    try {
      const response = await fetch('api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries()))
      });

      if (!response.ok) throw new Error('Online-Versand nicht verfügbar');

      formStatus.textContent = 'Danke, deine Nachricht wurde gesendet.';
      contactForm.reset();
    } catch {
      formStatus.textContent = 'Online-Versand nicht verfügbar. Dein E-Mail-Programm wird geöffnet.';
      window.location.href = mailto;
    } finally {
      submitButton.disabled = false;
    }
  });
}

document.querySelector('#jahr').textContent = new Date().getFullYear();
