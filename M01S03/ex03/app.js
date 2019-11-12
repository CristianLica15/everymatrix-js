var dragos = {
    name: 'Dragos',
    surname: 'Iordache',
    friends: {}
};
var larry = {
    name: 'Larry',
    surname: 'Larryson',
    friends: {}
};
var carol = {
    name: 'Carol',
    surname: 'Carolson',
    friends: {}
};
var steven = {
    name: 'Steven',
    surname: 'Stevenson',
    friends: {}
};
var anita = {
    name: 'Andra',
    surname: 'Andrason',
    friends: {}
};

dragos.friends.larry = larry;
dragos.friends.carol = steven;
dragos.friends.anita = anita;

larry.friends.dragos = dragos;
steven.friends.dragos = dragos;
anita.friends.dragos = dragos

larry.friends.steven=steven;
anita.friends.steven=steven;
steven.friends.larry=larry;
steven.friends.anita=anita;

carol.friends.steven=steven;
carol.friends.larry=larry;
carol.friends.dragos=dragos;

delete dragos.friends.larry;
delete larry.friends.dragos;

console.log(
    larry.friends.steven.friends.dragos.name + ' ' +
    larry.friends.steven.friends.dragos.surname
)

console.log(
    larry.friends.steven.friends.larry.name+ ' ' +
    larry.friends.steven.friends.larry.surname
)
console.log(
    carol.friends.steven.friends.dragos.name+ ' ' +
    carol.friends.steven.friends.dragos.surname
)
