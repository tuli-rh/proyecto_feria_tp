document.getElementById("denunciaForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener datos
    const curso = e.target.curso.value;
    const fecha = e.target.fecha.value;
    const detalle = e.target.detalle.value;

    // Guardar reporte en lista lateral
    const li = document.createElement("li");
    li.textContent = `${fecha} - ${curso}`;
    document.getElementById("listaReportes").appendChild(li);

    // Mostrar chat
    document.getElementById("chatBox").style.display = "block";

    // Mensaje inicial en el chat
    const mensajes = document.getElementById("mensajes");
    mensajes.innerHTML = `<p><strong>Profesor:</strong> Hemos recibido tu denuncia. Gracias por confiar.</p>`;

    // Limpiar formulario
    e.target.reset();
});

// Enviar mensajes en el chat
document.getElementById("enviarMensaje").addEventListener("click", function () {
    const input = document.getElementById("mensajeInput");
    const texto = input.value.trim();
    if (texto) {
        const mensajes = document.getElementById("mensajes");
        mensajes.innerHTML += `<p><strong>Tú:</strong> ${texto}</p>`;
        input.value = "";

        // Simulación de respuesta automática del profesor
        setTimeout(() => {
            mensajes.innerHTML += `<p><strong>Profesor:</strong> Gracias por tu mensaje, lo revisaremos.</p>`;
            mensajes.scrollTop = mensajes.scrollHeight;
        }, 1000);
    }
});
