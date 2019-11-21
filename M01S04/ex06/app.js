var person = {
    name:"Lica",
    surname:"Cristian",
    age:15,
    petOwner: false,
    skills: ['html','javascript','css','java','c++','node','jquery'],
    friends: [{
        name:'Larry',
        surname:'Larryson',
        age:30
    }, {
        name:"Steven",
        surname:"Stevenson",
        age:31
    }, {
        name:'Carol',
        surname:'Carolson',
        age:29
    }]
};
/**1. */
console.warn('PASUL 1')
for(let i = 0; i < person.skills.length; i++)
{
    if(i % 2 === 0)
    {
        console.log(person.skills[i]);

    }
}
console.warn('PASUL 2')
/**2. */
for(let i = 0; i < person.skills.length; i++){
    console.log(person.skills[i]);
}
console.warn('PASUL 3')
let sentence= 'Prietenii mei sunt:  ';
for(let i = 0; i < person.friends.length; i++){
sentence +=`${person.friends[i]. name} ${person.friends[i]. surname}`;
if(i < person.friends.length -1)
{
    sentence += ', '
}
else{
    sentence += '.'
}
};
console.log(sentence);
console.warn('PASUL 4');
