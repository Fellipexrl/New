document.addEventListener('DOMContentLoaded', (event) => {
    // Função para o botão
    const button = document.getElementById('clickButton');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });

    // Função para o formulário
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previne o envio do formulário

        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        console.log('Name:', name);
        console.log('Password:', password);

        // Aqui você pode adicionar mais lógica, como enviar os dados via AJAX
    });
});