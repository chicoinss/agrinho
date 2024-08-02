document.addEventListener('DOMContentLoaded', function () {
    const saibaMaisButton = document.getElementById('saiba-mais');
    const voltarButton = document.getElementById('voltar');
    const saibaMaisSection = document.getElementById('saiba-mais-section');
    const inicioSection = document.getElementById('inicio');
    
    // Função para mostrar a seção "Saiba Mais" e ocultar a seção inicial
    function showSaibaMais() {
        inicioSection.classList.add('hidden');
        saibaMaisSection.classList.remove('hidden');
    }

    // Função para voltar para a seção inicial e ocultar a seção "Saiba Mais"
    function hideSaibaMais() {
        saibaMaisSection.classList.add('hidden');
        inicioSection.classList.remove('hidden');
    }

    // Adiciona eventos de clique aos botões
    saibaMaisButton.addEventListener('click', showSaibaMais);
    voltarButton.addEventListener('click', hideSaibaMais);

    // ScrollReveal para animar as seções
    ScrollReveal().reveal('.content-section', {
        distance: '50px',
        duration: 1500,
        delay: 300,
        easing: 'ease-in-out'
    });
});
