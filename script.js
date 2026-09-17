function mostrarSorpresa() {

    const mensaje =
        document.getElementById("mensajeSorpresa");

    if (mensaje.style.display === "block") {

        mensaje.style.display = "none";

    } else {

        mensaje.style.display = "block";

    }
}