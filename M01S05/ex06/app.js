var person = {
    getName: function () {
        return 'Dragos Iordache'
    },
    getAge: function () {
        return 32;
    }
};

function accessor(methodSuffix) {
    var methodName = 'get' + methodSuffix;
    return person[methodName]();
}
console.log(accessor('Name'))
let firstName = accessor('Name').split(' ')[0]
console.log(firstName);

console.log(56 - accessor('Age'));
console.log((new Date()).getFullYear() - accessor('Age'))
let age = accessor('Age')
console.log(`Ma numesc ${firstName} si am ${age} ani si m-am nascut acum ${age} de ani`)
console.warn('Now')
let name = accessor('Name')
console.log(`${name}`);
console.log(`${age}`)
let birthYear = (new Date().getFullYear() - accessor('Age'))
console.log(birthYear)
console.log(`Ma numesc ${name} si am ${age} ani`)