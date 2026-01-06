function calc(){
  const precio = Number(document.getElementById("precio").value);
  const baldes = Number(document.getElementById("baldes").value);

  if(!precio || !baldes){
    document.getElementById("ahorro").innerText = "S/ 0";
    return;
  }

  const gastoActual = precio * baldes * 4.33;
  const gastoNuevo = gastoActual * 0.67; // 50% más rendimiento aprox
  const ahorro = gastoActual - gastoNuevo;

  document.getElementById("ahorro").innerText =
    "S/ " + Math.round(ahorro).toLocaleString("es-PE");
}
