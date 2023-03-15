function enviarMensagem() {
    let mensagem = 'Olá, tudo bem? gostaria de serviço da VM-Technology!'
    const numero = '5565981417835';

    let linkWhatsapp = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;

    window.open(linkWhatsapp);
    
}