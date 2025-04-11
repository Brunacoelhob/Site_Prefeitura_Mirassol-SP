document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.carrossel-wrapper');
    const cards = document.querySelectorAll('.card-noticia');
    const dots = document.querySelectorAll('.dot');
  
    const visibleCards = 4;              // Quantos aparecem por vez
    const totalCards = cards.length;
    const cardWidth = 262 + 10;          // Largura do card + gap de 10px
    const maxIndex = totalCards - visibleCards;
  
    let currentIndex = 0;
  
    function updateCarrossel() {
      const offset = -(currentIndex * cardWidth);
      wrapper.style.transform = `translateX(${offset}px)`;
  
      // Atualiza os dots se houver
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
      }
    }
  
    function autoScroll() {
      currentIndex++;
      if (currentIndex > maxIndex) {
        currentIndex = 0;
      }
      updateCarrossel();
    }
  
    // Adiciona clique nas bolinhas, se quiser manter a navegação manual
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarrossel();
      });
    });
  
    // Começa a rotação automática a cada 4 segundos
    setInterval(autoScroll, 4000);
  
    // Inicializa na primeira posição
    updateCarrossel();
  });