let labelsEmoji1 = ["Agendar un zoom o reunión", "Día de grabación o filmación, clase o charla", "Día de películas o de video/estreno"];
let numerosEmoji1 = ["68", "28","19"];
let colors1 = ['#D22F27','#EA5A47','#EA5A47'];

let labelsEmoji2 = ["Levantar la mano", "Pare", "High five"];
let numerosEmoji2 = ["144", "10","4"];
let colors2 = ['#F1B31C','#FCEA2D','#FCEA2D'];

let labelsEmoji3 = ["Compartir pantalla", "Subir archivo", "Exportar"];
let numerosEmoji3 = ["96", "29","4"];
let colors3 = ['#5C9E31','#B1CC33','#B1CC33'];

let labelsEmoji4 = ["Archivo o carpeta de archivo", "Archivo adjunto o adjuntar", "Archivar o guardar, un archivo"];
let numerosEmoji4 = ["47", "20","3"];

let labelsEmoji5= ["Archivo adjunto o adjuntar", "Archivo o carpeta de archivo", "Archivar o guardar, un archivo"];
let numerosEmoji5 = ["61", "23","17"];

let colors4 = ['#E27022','#F4AA41','#F4AA41'];


let labelsEmoji6 = ["Apagar micrófono"];
let numerosEmoji6 = ["171"];
let colors5 = ['#92D3F5','#61B2E4','#61B2E4'];





let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'bar',
    data: {
        labels: labelsEmoji1 ,
        datasets: [{
            data: numerosEmoji1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: "Programar Video Reunión",
            display: true
        }
    }
});
let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
        type: 'bar',
    data: {
        labels: labelsEmoji2 ,
        datasets: [{
            data: numerosEmoji2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Pedir la Palabra",
            display: true
        }
    }
});
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
        type: 'bar',
    data: {
        labels: labelsEmoji3 ,
        datasets: [{
            data: numerosEmoji3,
            backgroundColor: colors3
        }]
    },
    options: {
        title: {
            text: "Compartir Pantalla",
            display: true
        }
    }
    });
let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
        type: 'bar',
    data: {
        labels: labelsEmoji4 ,
        datasets: [{
            data: numerosEmoji4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Archivo Adjunto",
            display: true
        }
    }
    });
let myChart5 = document.getElementById("myChart5").getContext('2d');

let chart5 = new Chart(myChart5, {
        type: 'bar',
    data: {
        labels: labelsEmoji5 ,
        datasets: [{
            data: numerosEmoji5,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Archivo Adjunto 2",
            display: true
        }
    }
    });
    let myChart6 = document.getElementById("myChart6").getContext('2d');

let chart6 = new Chart(myChart6, {
        type: 'bar',
    data: {
        labels: labelsEmoji6,
        datasets: [{
            data: numerosEmoji6,
            backgroundColor: colors5
        }]
    },
    options: {
        title: {
            text: "Micrófono Apagado",
            display: true
        }
    }
    });


