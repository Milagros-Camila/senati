document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Evento mouseover en el botón
    document.getElementById("btnHover").addEventListener("mouseover", function() {
        this.style.backgroundColor = "#ffc107"; // Cambio de color
        console.log("Evento: mouse encima del botón");
    });

    // 2. Evento mouseout en el botón
    document.getElementById("btnHover").addEventListener("mouseout", function() {
        this.style.backgroundColor = "#28a745"; // Vuelve al color original
        console.log("Evento: mouse fuera del botón");
    });

    // 3. Evento clic en el botón
    document.getElementById("btnClick").addEventListener("click", function() {
        console.log("Evento: clic en el botón");
    });

    // 4. Evento doble clic en el botón
    
    document.getElementById("btnDblClick").addEventListener("dblclick", function() {
        console.log("Evento: doble clic en el botón");
    });
    

    // 5. Evento focus en el campo de texto
    const inputTexto = document.createElement("input");
    inputTexto.placeholder = "Escribe algo aquí...";
    document.body.appendChild(inputTexto);
    
    inputTexto.addEventListener("focus", function() {
        console.log("Evento: campo de texto enfocado");
    });

    // 6. Evento blur en el campo de texto
    inputTexto.addEventListener("blur", function() {
        console.log("Evento: campo de texto perdido foco");
    });

    // 7. Evento change en el campo de selección
    const select = document.createElement("select");
    const option1 = document.createElement("option");
    option1.textContent = "Opción 1";
    const option2 = document.createElement("option");
    option2.textContent = "Opción 2";
    select.appendChild(option1);
    select.appendChild(option2);
    document.body.appendChild(select);

    select.addEventListener("change", function() {
        console.log("Evento: opción seleccionada: " + this.value);
    });

    // 8. Evento keydown en el campo de texto
    inputTexto.addEventListener("keydown", function(event) {
        console.log(`Evento: tecla presionada: ${event.key}`);
    });

    // 9. Evento keyup en el campo de texto
    inputTexto.addEventListener("keyup", function(event) {
        console.log(`Evento: tecla soltada: ${event.key}`);
    });

    // 10. Evento resize (cambiar tamaño de la ventana)
    window.addEventListener("resize", function() {
        console.log("Evento: ventana redimensionada");
    });

    // 11. Evento scroll en la página
    window.addEventListener("scroll", function() {
        console.log("Evento: la página fue desplazada");
    });

    // 12. Evento contextmenu (clic derecho en la página)
    document.body.addEventListener("contextmenu", function(event) {
        event.preventDefault();
        console.log("Evento: clic derecho bloqueado");
    });

    // 13. Evento submit en el formulario (usamos un formulario ficticio)
    const form = document.createElement("form");
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Enviar";
    form.appendChild(submitBtn);
    document.body.appendChild(form);

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Evento: formulario enviado");
    });

    // 14. Evento mousemove (mover el mouse por la página)
    document.body.addEventListener("mousemove", function() {
        console.log("Evento: moviendo el mouse en la página");
    });

    // 15. Evento focus en el input texto
    inputTexto.addEventListener("focus", function() {
        console.log("Evento: input de texto enfocado");
    });
});
