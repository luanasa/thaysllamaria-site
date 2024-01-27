
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} //mobile menu

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');

  function revealSections() {
    sections.forEach(section => {
      if (isSectionVisible(section)) {
        section.classList.add('visible'); // Adiciona a classe 'visible' se a seção estiver visível na tela
      }
    });
  }

  function isSectionVisible(section) {
    const rect = section.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  window.addEventListener('scroll', revealSections);
  window.addEventListener('resize', revealSections);
  revealSections(); // Mostra as seções visíveis ao carregar a página
}); //oculta as sessões

document.addEventListener('DOMContentLoaded', function() {
  const arrowDown = document.querySelector('.arrow-down');

  function toggleArrowVisibility() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const pageHeight = document.body.scrollHeight - window.innerHeight;
    
    // Se o usuário estiver perto ou no final da página, oculta a seta para baixo
    if (scrollPosition >= pageHeight - 50) { // Ajuste 50 conforme necessário para definir o ponto de ocultação
      arrowDown.style.display = 'none';
    } else {
      arrowDown.style.display = 'block';
    }
  }

  window.addEventListener('scroll', toggleArrowVisibility);
  toggleArrowVisibility(); // Verifica a visibilidade da seta ao carregar a página
}); //Faz a .arrow-down desaparecer quando chegar no fim da página




