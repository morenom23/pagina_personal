
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitando el envío del formulario vacio

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    const formularioData = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    };

    localStorage.setItem('formularioData', JSON.stringify(formularioData));

    this.reset();
    alert("Mensaje enviado con exito");
});

document.getElementById('verInformacion').addEventListener('click', function() {
    
    const dataGuardada = localStorage.getItem('formularioData');

    const cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = ''; 

    if (dataGuardada) {
        const datos = JSON.parse(dataGuardada); 

        // Creando una fila nueva en la tabla
        const nuevaFila = `<tr>
            <td>${datos.nombre}</td>
            <td>${datos.correo}</td>
            <td>${datos.mensaje}</td>
        </tr>`;
        
        cuerpoTabla.innerHTML = nuevaFila; 
        document.getElementById('tablaResultados').style.display = 'table'; 
        document.getElementById('cerrarTabla').style.display = 'inline'; 
    } else {
        cuerpoTabla.innerHTML = '<tr><td colspan="3">No hay información guardada.</td></tr>';
        document.getElementById('tablaResultados').style.display = 'table'; 
        document.getElementById('cerrarTabla').style.display = 'inline'; 
    }
});

document.getElementById('cerrarTabla').addEventListener('click', function() {
    document.getElementById('tablaResultados').style.display = 'none'; 
    this.style.display = 'none'; // Ocultando el botón "Cerrar Vista"
});


