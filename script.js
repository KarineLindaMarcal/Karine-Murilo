// ==============================
//  CONTAGEM REGRESSIVA
// ==============================
function iniciarContagem() {
    const dataCasamento = new Date("2026-11-22T08:30:00").getTime();

    setInterval(() => {
        const agora = new Date().getTime();
        const dist = dataCasamento - agora;

        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);

        document.getElementById("dias").textContent = d;
        document.getElementById("horas").textContent = h;
        document.getElementById("minutos").textContent = m;
        document.getElementById("segundos").textContent = s;
    }, 1000);
}

iniciarContagem();

// ==============================
//  ROLAGEM SUAVE DO MENU
// ==============================
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const alvo = document.querySelector(link.getAttribute("href"));
        alvo.scrollIntoView({ behavior: "smooth" });
    });
});

// ==============================
//  ANIMAÇÃO DE ENTRADA
// ==============================
function animar() {
    const elementos = document.querySelectorAll(".animar");
    const limite = window.innerHeight * 0.85;

    elementos.forEach(el => {
        if (el.getBoundingClientRect().top < limite) {
            el.classList.add("aparecer");
        }
    });
}

window.addEventListener("scroll", animar);
window.addEventListener("load", animar);

// ==============================
//  RSVP — ENVIO PARA WHATSAPP
// ==============================
const form = document.getElementById("form-presenca");
const msg = document.getElementById("mensagem-retorno");

form.addEventListener("submit", e => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const confirmacao = document.getElementById("confirmacao").value;

    if (nome.trim() === "") {
        msg.textContent = "Por favor, informe seu nome.";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Obrigado! Sua presença foi registrada.";
    msg.style.color = "green";

    // SEU WhatsApp aqui:
    const numero = "5599999999999"; // coloque o seu!

    const texto =
        `Confirmação de presença:\nNome: ${nome}\nVai ao casamento? ${confirmacao}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

    form.reset();
});
