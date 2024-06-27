const hora = 7;
const eBomDia = hora >=6 && hora <=11;
const eBoaTarde = hora >=12 && hora <=17;

if (eBomDia) {
    console.log("Bom dia");
}else if (eBoaTarde) {
    console.log("Boa tarde");
}else {
    console.log("Boa noite");
}
