var dateBuilder = [
    function() {
        return '2019'
    },
    function() {
        return 'Februarie'
    },
    function() {
        return 24;
    }
];
console.log(dateBuilder);

dateBuilder[3] = function ()
{
    return 'Duminica';
};
dateBuilder[5] = function ()
{
    return 'Februarie'
}
console.log(dateBuilder);

console.log(`Suntem in anul ${dateBuilder[0]()}.` )

console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`)

console.log(`Astazi este ${dateBuilder[3]()}.`)

console.warn('Slide 36')

console.log(`${dateBuilder[5]()}`)
console.log(`Suntem in anul ${dateBuilder[0]()}.`)
console.log(`Suntem in luna ${dateBuilder[5]()} in anul ${dateBuilder[0]()}.`)
console.log(`Astazi este ${dateBuilder[3]()}`)