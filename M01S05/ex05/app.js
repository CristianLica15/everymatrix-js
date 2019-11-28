var person = {
    getName: function () {
        return 'Dragos Iordache'
    },
    getAge: function () {
        return 32;
    }
}
console.log(person.getName().split(' ')[0]);
console.log(`Diferenta de varsta dintre mine si ala este:${56 - person.getAge()}`)
let birthYear = (new Date().getFullYear() - person.getAge());
console.log(String(birthYear).slice(-2))


console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani`);
console.log(person.getName());
console.log(person.getAge());
console.log(new Date().getFullYear() - person.getAge());
console.log(`Ma numesc ${person.getName()} si m-am nascut acum ${person.getAge()} ani in anul ${new Date().getFullYear() - person.getAge()}! `)
