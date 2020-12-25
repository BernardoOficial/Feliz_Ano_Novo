let Anonovo = {

    novoAno: new Date("1 Janeiro 2021").getTime(),

    getRegressiva() {

        let diaAtual = new Date().getTime();

        let tempoFalta = parseInt((Anonovo.novoAno - diaAtual) / 1000);
        let diaFalta = parseInt(tempoFalta / 86400)
        tempoFalta = tempoFalta % 86400;

        let horaFalta = parseInt(tempoFalta / 3600)
        tempoFalta = tempoFalta % 3600;

        let minutoFalta = parseInt(tempoFalta / 60);
        let segundoFalta = parseInt(tempoFalta % 60);

        Anonovo.setRegressiva(diaFalta, horaFalta, minutoFalta, segundoFalta);
    },

    setRegressiva(dia, hora, minuto, segundo) {

        const $ = document.querySelector.bind(document);

        $("[data-dia]").innerHTML = dia;
        $("[data-hora]").innerHTML = hora;
        $("[data-minutos]").innerHTML = minuto;
        $("[data-segundos]").innerHTML = segundo;

    }
}

setInterval(Anonovo.getRegressiva, 1000)