const website = {
    name: 'AlgoExpert',
    ratting: 5,
    founders: ['Clement', 'Antonie'],
    sayHello() {
        console.log('Hello')
    },
    get getRatting() {
        return this.ratting * 2;
    },
    set setRatting(value) {
        this.ratting = value;
    }
}

// console.log(website)
// website.name = 'FrontEndExpert';
// console.log(website)
console.log('toString' in website)
console.log(website.hasOwnProperty('name'))
// if (website.hasOwnProperty('name')) {
//     console.log('object')
// }

website.sayHello();
console.log(website.getRatting)
website.setRatting = 6
console.log(website.getRatting)
