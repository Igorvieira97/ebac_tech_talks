AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();


const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasAteoEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
    const horasAteoEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteoEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteoEvento = Math.floor((distanciaAteOEvento % (1000 * 60) / 1000)); 

document.getElementById('contador').innerHTML = `${diasAteoEvento}d ${horasAteoEvento}h ${minutosAteoEvento}m ${segundosAteoEvento}s`;

if (distanciaAteOEvento < 0) {
    clearInterval (contaAsHoras);
    document.getElementById('contador').innerHTML = 'Evento expirado';
}
}, 1000);