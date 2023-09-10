const website = {
    name: 'AlgoExpert',
    ratting: 5,
    founders: ['Clement', 'Antonie']
}

// console.log(website)
// website.name = 'FrontEndExpert';
// console.log(website)
console.log('toString' in website)
console.log(website.hasOwnProperty('name'))
if (website.hasOwnProperty('name')) {
    console.log('object')
}