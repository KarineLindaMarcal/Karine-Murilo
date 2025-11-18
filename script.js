// -----------------------------
// Contagem regressiva
// -----------------------------
function iniciarContagem() {
    const casamento = new Date("2026-11-22T08:30:00").getTime();

    setInterval(() => {
        const agora = Date.now();
        const resto = casamento - agora;

        const d = Math.floor(resto / (1000 * 60 * 60 * 24));
        const h = Math.floor((resto % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((resto % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((resto % (1000 * 60)) / 1000);

        document.getElementById("dias").textContent = d;
        document.getElementById("horas").textContent = h;
        document.getElementById("minutos").textContent = m;
        document.getElementById("segundos").textContent = s;
    }, 1000);
}

iniciarContagem();

// -----------------------------
// Rolagem suave
// -----------------------------
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// -----------------------------
// Animação ao aparecer
// -----------------------------
function animar() {
    document.querySelectorAll(".animar").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
            el.classList.add("aparecer");
        }
    });
}

window.addEventListener("scroll", animar);
window.addEventListener("load", animar);

// -----------------------------
// RSVP — WhatsApp
// -----------------------------
const form = document.getElementById("form-presenca");
const retorno = document.getElementById("mensagem-retorno");

form.addEventListener("submit", e => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const presenca = document.getElementById("confirmacao").value;

    if (nome.trim() === "") {
        retorno.textContent = "Digite seu nome antes de enviar.";
        retorno.style.color = "red";
        return;
    }

    retorno.textContent = "Confirmação enviada!";
    retorno.style.color = "green";

    const numero = "5599999999999"; // coloque o seu número

    const mensagem = `Confirmação de presença:%0A%0ANome: ${nome}%0APresença: ${presenca}`;

    window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");

    form.reset();
});
