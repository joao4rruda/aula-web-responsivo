// Função para validar o formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Previne o envio padrão
    event.preventDefault();
    
    // Obtém os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedbackDiv = document.getElementById('feedback');
    const submitButton = document.querySelector('input[type="submit"]');
    
    // Desabilita o botão de envio para prevenir múltiplos cliques
    submitButton.disabled = true;

    // Limpa a mensagem de feedback anterior
    feedbackDiv.innerHTML = '';
    
    // Validação simples
    if (!name || !email || !message) {
        feedbackDiv.innerHTML = 'Por favor, preencha todos os campos!';
        feedbackDiv.className = 'feedback error';
        submitButton.disabled = false; // Reabilita o botão de envio
        return;
    }

    // Validação do formato do e-mail
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        feedbackDiv.innerHTML = 'Por favor, insira um e-mail válido!';
        feedbackDiv.className = 'feedback error';
        submitButton.disabled = false; // Reabilita o botão de envio
        return;
    }

    // Exibe um alerta de sucesso
    feedbackDiv.innerHTML = 'Formulário enviado com sucesso!';
    feedbackDiv.className = 'Feedback success';

    // Simulando o envio do formulário
    setTimeout(function() {
        // Aqui você pode adicionar uma lógica para enviar o formulário via AJAX, se necessário

        // Limpar os campos após o envio
        document.getElementById('contact-form').reset();
        
        // Reabilita o botão de envio
        submitButton.disabled = false;

        // Opcionalmente, limpar a mensagem de sucesso após alguns segundos
        setTimeout(function() {
            feedbackDiv.innerHTML = '';
        }, 3000);

    }, 1000); // Simula um atraso no envio
});