window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  })

  const menuBtn = document.querySelector('.menu-btn')
  const navigation = document.querySelector('.navigation')
  const navigationItems = document.querySelectorAll('.navigation a')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    navigation.classList.toggle('active')
  })

  navigationItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      navigation.classList.remove('active')
    })
  })

  const scrollBtn = document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500)
  })
  scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal')

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active')
      }
    }
  })
})
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();  // Formani odatdagi tarzda yuborishni bloklaymiz

  // Formadagi qiymatlarni olish
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Telegram bot API tokeni va chat ID
  const botToken = 'YOUR_BOT_API_TOKEN';
  const chatId = 'YOUR_CHAT_ID';  // O'zingiz yoki guruhingiz chat ID'sini kiriting

  // Yuboriladigan xabarni yaratish
  const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  // Telegram API ga ma'lumot yuborish
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: text
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Error sending message');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error sending message');
    });
});
``