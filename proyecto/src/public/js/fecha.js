class fecha {
    constructor() {
        this.fecha = document.getElementById('fecha_creacion')
    }
    obtencion() {
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        this.fecha.value = hoy.toLocaleDateString();
    }
}

let fechas = new fecha();
window.onload = fechas.obtencion() 