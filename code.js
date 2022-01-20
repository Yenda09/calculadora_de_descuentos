
function calcularDescuento(precio,descuento) {
const porcentajeAPagar = 100 - descuento;
const precioConDescuento = (precio * porcentajeAPagar)/100;

return precioConDescuento;
}

function calcularPrecioFinal() {
    const inputPrice = document.getElementById("inputPrice");
    const valuePrice = Number(inputPrice.value);
    const inputDiscount = document.getElementById("inputDiscount");
    const valueDiscount = Number(inputDiscount.value);

    const precioFinal = calcularDescuento(valuePrice,valueDiscount);

    const resultado = document.getElementById("arrojarResultado");
    resultado.innerText = "El valor a pagar es $" + precioFinal;
}