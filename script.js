function atualizarContador() {
    const dataCasamento = new Date("2026-11-22T08:30:00");
    const agora = new Date();
    const diff = dataCasamento - agora;

    if (diff <= 0) {
        document.getElementById("dias").innerHTML = "0";
        document.getElementById("horas").innerHTML = "0";
        document.getElementById("minutos").innerHTML = "0";
        document.getElementById("segundos").innerHTML = "0";
        return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();
