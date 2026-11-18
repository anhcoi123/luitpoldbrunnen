const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const contactForm = document.querySelector('#kontaktformular');
const formStatus = document.querySelector('#formularstatus');
const contactEmail = '';

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
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactEmail) {
      formStatus.textContent = 'Die Kontaktadresse muss vor Veröffentlichung noch in script.js eingetragen werden.';
      return;
    }

    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`Nachricht von ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('nachricht')}\n\nAntwort an: ${data.get('email')}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  });
}

document.querySelector('#jahr').textContent = new Date().getFullYear();
