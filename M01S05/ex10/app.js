function calculateSurface(L, l) {
    if ( arguments.length === 2) {
        return L * l;
    } else {
        return Math.pow(L, 2);
    }
}

console.log('Suprafata unui patrat de 2 x 2 =', calculateSurface(2));
console.log('Suprafata unui dreptunghi de 6 x 6 =', calculateSurface(6));
function calculateSqureface(calculateSurface){
    if( arguments.length === 2) {
        return calculateSqureface * calculateSurface
    } else
    {
        return Math.pow(calculateSurface, 2)
    }
}
console.log(calculateSqureface(4))