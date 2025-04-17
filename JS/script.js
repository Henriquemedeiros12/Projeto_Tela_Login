document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.querySelector('.input');
    const senhaInput = document.querySelector('.inputs');
    const emailError = document.querySelector('.e_email');
    const senhaError = document.querySelector('.e_senha');
    const entrarButton = document.querySelector('.entrar');
    const bar = document.querySelector('.wave-group .bar');
    const bars = document.querySelector('.wave-groups .bars');

    // Função para validar o email
    function validarEmail() {
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Valida o email em tempo real
        if (!emailRegex.test(email)) {
            bar.style.setProperty('--bar-color', 'red'); // Altera a borda para vermelha
            emailError.style.visibility = 'visible'; // Mostra a mensagem de erro
            emailError.textContent.value = emailError; // Mensagem de erro
        } else {
            bar.style.setProperty('--bar-color', '#e0e0e0');
            emailInput.style.border = 'visible'; // Restaura a borda padrão se o email estiver correto
            emailError.style.visibility = 'hidden'; // Oculta a mensagem de erro
        }
    }

    // Função para validar a senha
    function validarSenha() {
        const senha = senhaInput.value;

        // Valida a senha em tempo real
        if (senha.length < 8 || senha.length > 12) {
            bars.style.setProperty('--bars-color', 'red'); // Altera a borda para vermelha
            senhaError.style.visibility = 'visible'; // Mostra a mensagem de erro
            senhaError.textContent.value = senhaError; // Mensagem de erro
        } else {
            bars.style.setProperty('--bars-color', '#e0e0e0');
            senhaInput.style.border = 'visible'; // Restaura a borda padrão se a senha estiver correta
            senhaError.style.visibility = 'hidden'; // Oculta a mensagem de erro
        }
    }

    // Função para validar campos ao clicar no botão Entrar
    function validarCampos() {
        const isEmailValido = emailError.style.visibility === 'hidden';
        const isSenhaValida = senhaError.style.visibility === 'hidden';
        const emailVazio = emailInput.value.trim() === '';
        const senhaVazia = senhaInput.value.trim() === '';

        if (emailVazio || senhaVazia || !isEmailValido || !isSenhaValida) {
            alert("Por favor, preencha todos os campos corretamente.");
        } else {
            alert("CARREGANDO . . .");
        }
    }

    // Adiciona ouvintes de eventos
    emailInput.addEventListener('input', validarEmail);
    senhaInput.addEventListener('input', validarSenha);
    entrarButton.addEventListener('click', validarCampos);
});

// script.js

function toggleSenha() {
    const senhaInput = document.getElementById('inputs');
    const cadeado = document.getElementById('cadeado');
    const cadeadoOpen = document.getElementById('cadeadoOpen');

    // Verifica o tipo atual do input
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text'; // Muda para text para mostrar a senha
        cadeado.style.visibility = 'hidden'; // Esconde o cadeado fechado
        cadeadoOpen.style.visibility = 'visible'; // Mostra o cadeado aberto
    } else {
        senhaInput.type = 'password'; // Muda para password para ocultar a senha
        cadeado.style.visibility = 'visible'; // Mostra o cadeado fechado
        cadeadoOpen.style.visibility = 'hidden'; // Esconde o cadeado aberto
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const container = document.querySelector('.container');
    const acceptButton = document.querySelector('.acceptButton');
    const declineButton = document.querySelector('.declineButton');

    // Sempre começa com o card visível e o container escondido
    card.style.visibility = 'visible';
    container.style.visibility = 'hidden';

    // Se o usuário clicar em qualquer botão:
    function esconderCardMostrarContainer() {
        card.style.visibility = 'hidden';
        container.style.visibility = 'visible';
    }

    acceptButton.addEventListener('click', esconderCardMostrarContainer);
    declineButton.addEventListener('click', esconderCardMostrarContainer);
});

