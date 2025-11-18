// ===== CONTAGEM =====
function atualizarContagem() {
    const dataCasamento = new Date("2026-11-22T08:30:00").getTime();
    const agora = new Date().getTime();
    const diferenca = dataCasamento - agora;

    if (diferenca <= 0) {
        document.getElementById("countdown").innerHTML = "É HOJE!!! 💍❤️";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").innerHTML =
        `${dias} dias • ${horas} horas • ${minutos} min`;
}

setInterval(atualizarContagem, 1000);

// ===== FORMULARIO =====
document.getElementById("rsvpForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const presenca = document.getElementById("presenca").value;
    const acompanhantes = document.getElementById("acompanhantes").value;

    const mensagem = document.getElementById("mensagem");

    if (presenca === "Sim") {
        mensagem.innerHTML = `Obrigado, ${nome}! ❤️<br>Presença confirmada com ${acompanhantes} acompanhante(s).`;
    } else {
        mensagem.innerHTML = `Tudo bem, ${nome}. 💕<br>Sentiremos sua falta!`;
    }
});
