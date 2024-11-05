window.addEventListener("scroll", function(){
  let header = document.querySelector('.cabecalho')
  header.classList.toggle('rolagem', window.scrollY > 300)
})





// Defina a data de término para o contador (formato: 'mm/dd/yyyy hh:mm:ss')
const endDate = new Date('12/12/2023 12:00:00').getTime();

// Função para atualizar o contador a cada segundo
const updateCountdown = () => {
  const now = new Date().getTime();
  const timeRemaining = endDate - now;

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('min').textContent = String(minutes).padStart(2, '0');
    document.getElementById('sec').textContent = String(seconds).padStart(2, '0');
  } else {
    // Quando o contador atinge zero, você pode adicionar alguma ação aqui
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('min').textContent = '00';
    document.getElementById('sec').textContent = '00';
  }
};

// Atualize o contador inicialmente
updateCountdown();

// Atualize o contador a cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);



//Formulario
let login = document.getElementById('login');
let signup = document.getElementById('signup');
let shade = document.getElementById('switch');
let originalH3 = document.querySelector('.original-h3');
let originalP = document.querySelector('.original-p');
let newH3 = document.querySelector('.new-h3');
let newP = document.querySelector('.new-p');

login.addEventListener('click', function () {
    shade.classList.remove('toRight');
    shade.classList.add('toLeft');
    // Ocultar elementos originais, mostrar elementos novos
    originalH3.style.display = 'none';
    originalP.style.display = 'none';
    newH3.style.display = 'block';
    newP.style.display = 'block';
});

signup.addEventListener('click', function () {
    shade.classList.remove('toLeft');
    shade.classList.add('toRight');
    // Ocultar elementos novos, mostrar elementos originais
    originalH3.style.display = 'block';
    originalP.style.display = 'block';
    newH3.style.display = 'none';
    newP.style.display = 'none';
});
