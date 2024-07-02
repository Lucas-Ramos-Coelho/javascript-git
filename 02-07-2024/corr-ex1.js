const drinkType = 'refrigerante';
let message = '';

switch (drinkType) {
    case 'refrigerante':
        message = 'Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.';
    break;
    case 'suco':
        message = 'Bedida produzida do líquido extraído de frutos.'
    break;
    case 'agua':
        message = 'Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.'
    default:
        message = 'Bebida desconhecida.'
    break;
}
console.log(message);