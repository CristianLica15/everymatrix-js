var i;
var number = prompt('Introdu un numar divizibil');
var limita = prompt('Introdu limita..');
for(i = 0; i <=limita; i++)
{
    
    console.log(i);

    if (i % number !== 0) {
        continue;
    }
    console.log(`Acest numar este multiplu de ${number}`);
}
