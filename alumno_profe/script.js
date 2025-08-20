let usuario = ""; // 'alumno' o 'profesor'
let mensajesChat = [];
let denuncias = [];

// Selección de rol
function entrarComo(rol) {
    usuario = rol;
    document.getElementById("loginScreen").style.display = "none";
    if (rol === "alumno") {
        document.getElementById("alumnoUI").style.display = "block";
    } else {
        document.getElementById("profesorUI").style.display = "block";
    }
}

// Alumno envía denuncia
document.getElementById("denunciaForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const curso = e.target.curso.value;
    const fecha = e.target.fecha.value;
    const detalle = e.target.detalle.value;

    denuncias.push({ curso, fecha, detalle, chat: [] });

    const li = document.createElement("li");
    li.textContent = `${fecha} - ${curso}`;
    document.getElementById("listaReportes").appendChild(li);

    document.getElementById("chatAlumno").style.display = "block";
    e.target.reset();

    actualizarDenunciasProfesor();
});

// Enviar mensajes en chat
function enviarMensaje(desde) {
    let mensajeTexto = "";
    if (desde === "alumno") {
        mensajeTexto = document.getElementById("mensajeAlumno").value.trim();
        if (mensajeTexto) {
            mensajesChat.push({ remitente: "Alumno", texto: mensajeTexto });
            document.getElementById("mensajeAlumno").value = "";
        }
    } else {
        mensajeTexto = document.getElementById("mensajeProfesor").value.trim();
        if (mensajeTexto) {
            mensajesChat.push({ remitente: "Profesor", texto: mensajeTexto });
            document.getElementById("mensajeProfesor").value = "";
        }
    }
    actualizarChat();
}

// Mostrar mensajes
function actualizarChat() {
    let chatAlumno = document.getElementById("mensajesAlumno");
    let chatProfesor = document.getElementById("mensajesProfesor");
    if (chatAlumno) {
        chatAlumno.innerHTML = mensajesChat.map(m => `<p><strong>${m.remitente}:</strong> ${m.texto}</p>`).join("");
    }
    if (chatProfesor) {
        chatProfesor.innerHTML = mensajesChat.map(m => `<p><strong>${m.remitente}:</strong> ${m.texto}</p>`).join("");
    }
}

// Actualizar lista en profesor
function actualizarDenunciasProfesor() {
    let lista = document.getElementById("listaDenuncias");
    lista.innerHTML = denuncias.map((d, i) =>
        `<li onclick="abrirChat(${i})">${d.fecha} - ${d.curso}</li>`
    ).join("");
}

// Profesor abre chat con denuncia seleccionada
function abrirChat(index) {
    document.getElementById("mensajesProfesor").innerHTML = "";
    mensajesChat = denuncias[index].chat;
    actualizarChat();
}
