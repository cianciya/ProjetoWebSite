document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const slidesContainer = document.querySelector('.slides');
    let index = 0;

    function mostrarSlide() {
        index = (index + 1) % slides.length;
        const translateValue = -index * 100; // Calcula o valor de translação para o próximo slide
        slidesContainer.style.transition = 'transform 0.5s ease'; // Adiciona uma transição suave
        slidesContainer.style.transform = `translateX(${translateValue}%)`;
        setTimeout(() => {
            slidesContainer.style.transition = ''; // Remove a transição após a mudança de slide
        }, 500); // Tempo de espera igual ao tempo de duração da transição
        setTimeout(mostrarSlide, 5000); // Altera os slides a cada 5 segundos (5000 milissegundos)
    } 
    mostrarSlide();
});
/*----------------------------------------------------------------------------------------------------------------*/
function atualizarDataHora() {
    const dataHoraAtual = new Date();
    const data = dataHoraAtual.toLocaleDateString('pt-BR');
    const hora = dataHoraAtual.toLocaleTimeString('pt-BR');
    const rodape = document.querySelector('footer p');
    rodape.textContent = `© ${data} ${hora} - Escritório de Arquitetura. Todos os direitos reservados.`;
}

// Chama a função para atualizar a data e hora a cada segundo
setInterval(atualizarDataHora, 1000);

// Chama a função uma vez para exibir a data e hora inicial
atualizarDataHora();
/*----------------------------------------------------------------------------------------------------------------*/
// Função para rolar suavemente para o topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
/*----------------------------------------------------------------------------------------------------------------*/
// Adiciona um evento de clique ao botão de rolagem suave para o topo
const botaoTopo = document.querySelector('.botao-topo');
botaoTopo.addEventListener('click', scrollToTop);
/*----------------------------------------------------------------------------------------------------------------*/

// Adiciona um evento de clique ao botão do menu de navegação
// const botaoMenu = document.querySelector('.botao-menu');
// botaoMenu.addEventListener('click', toggleMenu);


// Adicionar alerta para envio de email //

document.getElementById("formulario-contato").addEventListener("submit", (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    alert(`Email enviado com sucesso retornaremos para o email: ${email}`);
} )